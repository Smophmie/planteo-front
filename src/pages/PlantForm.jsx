import React, { useState } from 'react';
import axios from 'axios';
import HeroSection from "../components/HeroSection";

function PlantForm (){
    const months = [
        { name: 'Janvier', value: '01' },
        { name: 'Février', value: '02' },
        { name: 'Mars', value: '03' },
        { name: 'Avril', value: '04' },
        { name: 'Mai', value: '05' },
        { name: 'Juin', value: '06' },
        { name: 'Juillet', value: '07' },
        { name: 'Août', value: '08' },
        { name: 'Septembre', value: '09' },
        { name: 'Octobre', value: '10' },
        { name: 'Novembre', value: '11' },
        { name: 'Décembre', value: '12' }
    ];

    const [formData, setFormData] = useState({
        name: '',
        image: null,
        type: '',
        description: '',
        sowing_period: '',
        planting_period: '',
        harvest_period: '',
        soil: '',
        watering: '',
        exposure: '',
        maintenance: ''
      });
    
      const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
        ...formData,
        [name]: type === 'file' ? files[0] : value
        });
    };

    const handleCheckboxChange = (e, period) => {
        const { value, checked } = e.target;
        const updatedPeriod = checked
          ? [...formData[period], value]
          : formData[period].filter(v => v !== value);
        setFormData({ ...formData, [period]: updatedPeriod });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formPayload = new FormData();
        Object.keys(formData).forEach(key => {
        formPayload.append(key, formData[key]);
        });

        try {
        const token = localStorage.getItem('token');
        await axios.post('http://localhost:8000/api/plants', formPayload, {
            headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
            }
        });
        alert('Plante créée avec succès');
        } catch (error) {
        if (error.response && error.response.data.errors) {
            setErrors(error.response.data.errors);
        } else {
            console.error(error);
        }
        }
    };

    return <>
      <HeroSection title="Création d'une Plante" />
      <div className="lg:w-1/3 sm:w-3/4 md:w-3/4 m-auto my-10">
      <div className="form space-y-3">
        <form onSubmit={handleSubmit} className='space-y-6'>
            <div className="form-group">
                <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder='Nom de la plante'
                    className="input bg-transparent w-full"
                    required />
                {errors.name && <span>{errors.name}</span>}
            </div>

            <div className="form-group">
                <input 
                    type="file" 
                    name="image" 
                    className="input bg-transparent w-full"
                    onChange={handleChange} />
                {errors.image && <span>{errors.image}</span>}
            </div>

            <div className="form-group">
                <input 
                    type="text"
                    name="type" 
                    placeholder='Type de plante potagère'
                    className="input bg-transparent w-full"
                    value={formData.type} 
                    onChange={handleChange} />
                {errors.type && <span>{errors.type}</span>}
            </div>

            <div className="form-group">
                <textarea 
                    name="description" 
                    value={formData.description} 
                    onChange={handleChange} 
                    placeholder='Description'
                    required 
                    className="input bg-transparent w-full" />
                {errors.description && <span>{errors.description}</span>}
            </div>

            <div className='space-y-2'>
          <label className="">Périodes de semis:</label>
          {months.map(month => (
            <div key={month.value} className='space-x-3'>
              <input
                type="checkbox"
                name="sowing_period"
                value={month.value}
                checked={formData.sowing_period.includes(month.value)}
                onChange={(e) => handleCheckboxChange(e, 'sowing_period')}
              />
              <span>{month.name}</span>
            </div>
          ))}
          {errors.sowing_period && <span>{errors.sowing_period}</span>}
        </div>

        <div className='space-y-2'>
          <label className="">Périodes de plantation:</label>
          {months.map(month => (
            <div key={month.value} className='space-x-3'>
              <input
                type="checkbox"
                name="planting_period"
                value={month.value}
                checked={formData.planting_period.includes(month.value)}
                onChange={(e) => handleCheckboxChange(e, 'planting_period')}
              />
              <span>{month.name}</span>
            </div>
          ))}
          {errors.planting_period && <span>{errors.planting_period}</span>}
        </div>

        <div className='space-y-2'>
          <label className="">Périodes de récolte:</label>
          {months.map(month => (
            <div key={month.value} className='space-x-3'>
              <input
                type="checkbox"
                name="harvest_period"
                value={month.value}
                checked={formData.harvest_period.includes(month.value)}
                onChange={(e) => handleCheckboxChange(e, 'harvest_period')}
              />
              <span>{month.name}</span>
            </div>
          ))}
          {errors.harvest_period && <span>{errors.harvest_period}</span>}
        </div>

            <div className="form-group">
                <input 
                    type="text" 
                    name="soil"
                    placeholder='Type de sol' 
                    value={formData.soil}
                    className="input bg-transparent w-full" 
                    onChange={handleChange} 
                    required />
                {errors.soil && <span>{errors.soil}</span>}
            </div>

            <div className="form-group">
                <input 
                    type="text" 
                    name="watering" 
                    placeholder='Arrosage'
                    className="input bg-transparent w-full"
                    value={formData.watering} 
                    onChange={handleChange} 
                    required />
                {errors.watering && <span>{errors.watering}</span>}
            </div>

            <div className="form-group">
                <input 
                    type="text" 
                    name="exposure" 
                    placeholder='Exposition'
                    className="input bg-transparent w-full"
                    value={formData.exposure} 
                    onChange={handleChange} 
                    required />
                {errors.exposure && <span>{errors.exposure}</span>}
            </div>

            <div className="form-group">
                <input 
                    type="text" 
                    name="maintenance" 
                    placeholder='Entretien'
                    className="input bg-transparent w-full"
                    value={formData.maintenance} 
                    onChange={handleChange} 
                    required />
                {errors.maintenance && <span>{errors.maintenance}</span>}
            </div>

            <button type="submit" className='btn uppercase'>Créer</button>
        </form>
      </div>
      </div>
    </>
}

export default PlantForm;