import { useEffect, useState } from "react";
import axios from "axios";

function UsersAdministration(){
    const [users, setUsers] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get("http://localhost:8000/api/users", {
          headers: {
              Authorization: `Bearer ${token}`
          }
        })
        .then(response => {
        const data = response.data;
        if (data.length != 0){
            setUsers(data);
        } 
        })
      }, []);

    const deleteUser = (userId) => {
        const token = localStorage.getItem('token');
        axios.delete(`http://localhost:8000/api/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          setUsers(users.filter(user => user.id !== userId));
        })
        .catch(error => {
          console.error("Erreur lors de la suppression de l'utilisateur.", error);
        });
      };

      const toggleAdminStatus = (userId, isAdmin) => {
        const token = localStorage.getItem('token');
        setUsers(users.map(user => 
            user.id === userId ? { ...user, is_admin: !isAdmin } : user
        ));
        axios.put(`http://localhost:8000/api/users/${userId}/toggle-admin`, {
          is_admin: !isAdmin
        }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
      };

      return <div className="container m-16">
      <h2 className="text-3xl mb-5">Tous les utilisateurs</h2>
      <div className="overflow-x-auto">
      <table className="min-w-full bg-transparent">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Nom</th>
              <th className="py-2 px-4 border-b">E-mail</th>
              <th className="py-2 px-4 border-b">Administrateur</th>
              <th className="py-2 px-4 border-b">Suppression</th>
            </tr>
          </thead>
          <tbody>
            {users && users.map((user) => (
              <tr key={user.id} className="text-center">
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">
                    <label className="inline-flex items-center cursor-pointer">
                        <input
                        type="checkbox"
                        checked={user.is_admin}
                        onChange={() => toggleAdminStatus(user.id, user.is_admin)}
                        className="sr-only peer"
                        />
                        <div className="relative w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-200 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white  after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-400"></div>
                    </label>
                </td>
                <td className="py-2 px-4 border-b">
                  <button onClick={() => deleteUser(user.id)}>
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
}

export default UsersAdministration;
