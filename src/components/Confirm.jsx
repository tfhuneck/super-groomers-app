import bath from '../images/bath.png';
import cut from '../images/cut.png';
import clip from '../images/clip.png';
import teeth from '../images/teeth.png';
import camera from '../images/camera.png'
import edit from '../images/edit.png'
import { useNavigate } from "react-router-dom"
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../App";
import Pet from './PetProfile'
import ContactProfile from './ContactProfile';
import Times from './TimesCard';
import axios from 'axios';

const Confirm = ()=> {
    const navigate                      = useNavigate();  
    const [ data, setData ]             = useContext(DataContext);
    
    const handleNext = async() => {
        
        navigate('/contact')
    }

    const handleBack = () => {
        navigate('/edit')
    }

    const handleConfirm = async () =>{
        // await axios.post('/booking', {
        //     data
        // })
        //     .then(async res => {
        //         console.log('booking submitted');
        //     })
        //     .catch(err => console.log(err));
        
        navigate('/success');
    }

    return (
        <>
            <div className="container verify-pet">
                <div className="row"> 
                    <div className="col d-flex justify-content-center">
                        <p className="heading2">Please confirm your details</p>
                    </div>
                </div>
                <div className="row"> 
                    <div className="col">
                        <p className="heading3">Your pets and service needs</p>
                    </div>
                </div>
                <div className='row'>
                    {data.pets.map((i, key) => {
                        return (
                            <Pet 
                                key={key}
                                image = {i.image}
                                name = {i.name}
                                breed = {i.breed}
                                size = {i.size} 
                                energy = {i.energy}
                                note = {i.note}
                                service = {i.services}
                            />
                        )
                    })}
                </div>
                <div className="row"> 
                    <div className="col">
                        <p className="heading3">Your residence and contact information</p>
                    </div>
                </div>
                <div className='row'>
                    <ContactProfile 
                        firstname={data.contact.firstname}
                        lastname={data.contact.lastname}
                        street={data.contact.street}
                        city={data.contact.city}
                        state={data.contact.state}
                        zip={data.contact.zip}
                        phone={data.contact.phone}
                        email={data.contact.email}
                    />
                </div>
                <div className="row"> 
                    <div className="col">
                        <p className="heading3">Your preferred service windows</p>
                    </div>
                </div>
                <div className='row'>
                    <Times
                        time1={data.time.time1}
                        time2={data.time.time2}
                        time3={data.time.time3}
                        date1={data.time.date1}
                        date2={data.time.date2}
                        date3={data.time.date3}
                    />
                </div>
                <div className="row"> 
                    <div className="col d-flex justify-content nomargin">
                        <button className="btn button confirm" onClick={handleConfirm}>
                            Set up Grooming
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}


export default Confirm;