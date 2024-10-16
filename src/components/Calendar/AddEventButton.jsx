import '../../assets/css/calendarapp.css'
import { Link } from 'react-router-dom';

function AddEventButton () {
    return <>
        <div className="my-8 mx-10 text-right btn-container">
            <button type="submit" className='btn uppercase'><Link to="/create-event">Ajouter un évènement</Link></button>
        </div>
    </>
}

export default AddEventButton;