import more from '../images/morepets.png';
import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../App";
import Pet from './PetProfile';

const VerifyPet = ()=> {
    const navigate                      = useNavigate();  
    const [ data, setData ]             = useContext(DataContext);

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
    const handleNext = async() => {
        
        navigate('/contact')
    }

    const handleBack = () => {
        navigate('/select')
    }

    const handleAdd = () => {
        navigate('/add')
    }

    useEffect(() => {
        if (!data.pets){
            navigate('/select');
        }
    })

    if(data.pets){

        return (
            <>
                <div className="container verify-pet">
                    <div className="row"> 
                        <div className="col d-flex justify-content-center">
                            <p className="heading2">Verify your pet details</p>
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
                    <br /><br />
                    <div className="row"> 
                        <div className="col d-flex justify-content-center">
                            <div className="btn add-pets" onClick={handleAdd}>
                            <   img src={more} className='add-pet-icon'/>
                                Add another pet 
                            </div>
                        </div>
                    </div>
                    <div className="row"> 
                        <div className="col d-flex justify-content-center">
                            <button className="btn back" onClick={handleBack}>
                                Back
                            </button>
                            <button className="btn button" onClick={handleNext}>
                                Next
                            </button>
                        </div>
                    </div>
                </div>
           </>
        )
    } 
}


export default VerifyPet;