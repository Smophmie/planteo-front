import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "../assets/css/login.css"

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        city:'',
    });
  
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        axios.post(`${import.meta.env.VITE_BACK_URL_LARAVEL}register`, formData)
            .then(response => {
                setMessage('Inscription réussie ! Vous pouvez maintenant vous connecter.');
                setFormData({
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: '',
                    city: '',
                });
                setErrors({});
                navigate('/login');
            })
            .catch(error => {
                if (error.response && error.response.data) {
                    setErrors(error.response.data.errors);
                    setMessage(error.response.data.message || 'Une erreur est survenue lors de l\'inscription.');
                } else {
                    setMessage('Une erreur est survenue. Veuillez réessayer plus tard.');
                }
            });
    };

    return (
        <div className="lg:w-1/3 sm:w-3/4 md:w-3/4 m-auto my-10">
            <div className="form space-y-3">
                <h1 className='text-3xl'>S’enregistrer</h1>
                {message && <p style={{ color: 'red' }}>{message}</p>}
                <form onSubmit={handleSubmit} className='space-y-6'>
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Votre nom" 
                            value={formData.name} 
                            onChange={handleChange} 
                            className="input bg-transparent w-full"
                        />
                        {/* {errors.name && <p style={{ color: 'red' }}>{errors.name[0]}</p>} */}
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="city" 
                            placeholder="Votre ville" 
                            value={formData.city} 
                            onChange={handleChange} 
                            className="input bg-transparent w-full"
                        />
                        {/* {errors.name && <p style={{ color: 'red' }}>{errors.city[0]}</p>} */}
                    </div>
                    <div className="form-group">
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Votre e-mail" 
                            value={formData.email} 
                            onChange={handleChange} 
                            className="input bg-transparent w-full"
                        />
                        {/* {errors.email && <p style={{ color: 'red' }}>{errors.email[0]}</p>} */}
                    </div>
                    <div className="form-group">
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Votre mot de passe" 
                            value={formData.password} 
                            onChange={handleChange} 
                            className="input bg-transparent w-full"
                        />
                        {/* {errors.password && <p style={{ color: 'red' }}>{errors.password[0]}</p>} */}
                    </div>
                    <div className="form-group">
                        <input 
                            type="password" 
                            name="password_confirmation" 
                            placeholder="Confirmez votre mot de passe" 
                            value={formData.password_confirmation} 
                            onChange={handleChange} 
                            className="input bg-transparent w-full"
                        />
                    </div>
                    <button type="submit" className="btn w-full uppercase">S’enregistrer</button>
                    <div>
                        <span>Vous avez déjà un compte ? </span><Link to='/login'>Se connecter</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;

