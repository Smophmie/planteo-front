import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function EventForm () {
    const [formData, setFormData] = useState({
        title: '',
        plant_id: '',
        start: '',
        end: '',
        description:'',
    });
  
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');
    const [plants, setPlants] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACK_URL_LARAVEL}plants`)
            .then(response => {
                setPlants(response.data);
            })
            .catch(error => {
                console.error("Il y a eu un problème avec la récupération des plantes :", error);
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        console.log(formData);
        axios.post(`${import.meta.env.VITE_BACK_URL_LARAVEL}events`, formData, config)
            .then(response => {
                setFormData({
                    title: '',
                    plant_id: '',
                    start: '',
                    end: '',
                    description:'',
                });
                setErrors({});
                navigate('/mycalendar');
            })
            .catch(error => {
                if (error.response && error.response.data) {
                    setErrors(error.response.data.errors);
                    setMessage(error.response.data.message || 'Une erreur est survenue dans la création de l\'évènement.');
                } else {
                    setMessage('Une erreur est survenue. Veuillez réessayer plus tard.');
                }
            });
    };

    return <>
        <div className="lg:w-1/3 sm:w-3/4 md:w-3/4 lg:mx-auto lg:my-10 m-10">
            <div className="form space-y-3">
                {message && <p style={{ color: 'red' }}>{message}</p>}
                <form className='space-y-6'  onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Nom de l'évènement *</label>
                        <input 
                            type="text" 
                            name="title"  
                            value={formData.title} 
                            onChange={handleChange} 
                            className="input bg-transparent w-full"
                        />
                        {errors.title && <p style={{ color: 'red' }}>{errors.title[0]}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="plant_id">Plante associée</label>
                        <select
                            name="plant_id"
                            value={formData.plant_id}
                            onChange={handleChange}
                            className="input bg-transparent w-full"
                        >
                            <option value="">Sélectionnez une plante</option>
                            {plants.map((plant) => (
                                <option key={plant.id} value={plant.id}>{plant.name}</option>
                            ))}
                        </select>
                        {errors.plant_id && <p style={{ color: 'red' }}>{errors.plant_id[0]}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="start">Date de début *</label>
                        <input
                            type="date"
                            name="start"
                            value={formData.start}
                            onChange={handleChange}
                            className="input bg-transparent w-full"
                        />
                        {errors.start && <p style={{ color: 'red' }}>{errors.start[0]}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="end">Date de fin *</label>
                        <input
                            type="date"
                            name="end"
                            value={formData.end}
                            onChange={handleChange}
                            className="input bg-transparent w-full"
                        />
                        {errors.end && <p style={{ color: 'red' }}>{errors.end[0]}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Commentaire</label>
                        <input 
                            type="text" 
                            name="description" 
                            value={formData.description} 
                            onChange={handleChange} 
                            className="input bg-transparent w-full"
                        />
                        {errors.description && <p style={{ color: 'red' }}>{errors.description[0]}</p>}
                    </div>
                    
                    <button type="submit" className="btn w-full uppercase">Créer l'évènement</button>
                    
                </form>
            </div>
        </div>
    </>
}

export default EventForm;