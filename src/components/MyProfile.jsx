import React, { useState, useEffect } from "react";
import axios from "axios";

function MyProfile () {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        city: "",
    });
    const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get("http://localhost:8000/api/connectedUser", {
      headers: {
          Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        const data = response.data;
        setUserData(data);
        setFormData({ name: data.name, email: data.email, city: data.city });
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    axios.put(`http://localhost:8000/api/users/${userData.id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        setUserData(response.data);
        setSuccessMessage("Modifications enregistrées avec succès.");
      })
      .catch(err => {
        setError(err);
      });
  };

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur au chargement de vos données utilisateur.</div>;

    return <div className="mx-8 my-12">
        <div className="form space-y-3">
            <h2 className='text-3xl'>Mon profil</h2>
            {successMessage && <div className="alert alert-success">{successMessage}</div>}
            <form onSubmit={handleFormSubmit} className='space-y-6'>
                <div className="form-group">
                    <label>Mon nom:</label>
                    <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="input bg-transparent w-full lg:w-1/3 sm:w-3/4 md:w-2/3"

                    />
                </div>
                <div>
                    <label>Mon e-mail:</label>
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input bg-transparent w-full lg:w-1/3 sm:w-3/4 md:w-2/3"

                    />
                </div>
                <div>
                    <label>Ma ville:</label>
                    <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="input bg-transparent w-full lg:w-1/3 sm:w-3/4 md:w-2/3"
                    />
                </div>
                <button type="submit" className='btn uppercase'>Enregistrer les modifications</button>
            </form>
        </div>
  </div>
}

export default MyProfile