import { useNavigate } from "react-router-dom"
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../App";


const Contact = () => {

    const navigate                      = useNavigate();
    const [ data, setData ]             = useContext(DataContext);

    const handleNext = async() => {
        const firstname = document.getElementById('firstname').value;
        const lastname  = document.getElementById('lastname').value;
        const street    = document.getElementById('street').value;
        const city      = document.getElementById('city').value;
        const state     = document.getElementById('state').value;
        const zip       = document.getElementById('zip').value;
        const phone     = document.getElementById('phone').value;
        const email     = document.getElementById('email').value;
       
        let contact = {
            firstname : firstname,
            lastname : lastname,
            street : street,
            city : city,
            state : state,
            zip : zip,
            phone : phone,
            email : email
        }

        let area = data.area;
        let pets = data.pets
        const updateData = {area, pets, contact};
        setData(updateData);
        navigate('/time')
    }


    const handleBack = () => {
        navigate('/verifypet')
    }

    return (
       <>
        <div className="container contact">
            <div className="row"> 
                <div className="col d-flex justify-content-center">
                    <p className="heading2">Details about you and your residence</p>
                </div>
            </div>
            <div className="row "> 
                <div className="col d-flex justify-content-center">
                    <div className="form-group">
                        <label htmlFor='firstname' > 
                            First Name
                        </label>
                        <input className="form-control form" type="text" placeholder="First" id="firstname"/>
                    </div>
                </div>
                <div className="col d-flex justify-content-center">
                    <div className="form-group">
                        <label htmlFor='name' > 
                            Last Name
                        </label>
                        <input className="form-control form" type="text" placeholder="Last" id="lastname"/>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center"> 
                <div className="col ">
                    <div className="form-group">
                        <label htmlFor='street'> 
                            Street Address
                        </label>
                        <input className="form-control form" type="text" placeholder="Street" id="street"/>
                    </div>
                </div>
            </div>
            <div className="row"> 
                <div className="col-sm-4">
                    <div className="form-group">
                        <label htmlFor='city' > 
                            City
                        </label>
                        <input className="form-control form" type="text" placeholder="City" id="city"/>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <label htmlFor='state'> 
                            State
                        </label>
                        <select className="form-select drop-form" id="state">
                            <option>CA</option>
                        </select>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <label htmlFor='zip' > 
                            Zipcode
                        </label>
                        <input className="form-control form" type="text" pattern="[0-9]{5}" placeholder="Zipcode" id="zip"/>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center"> 
                <div className="col">
                    <div className="form-group">
                        <label htmlFor='phone'> 
                            Phone Number
                        </label>
                        <input className="form-control form" type="phone" placeholder="XXX-XXX-XXXX" id="phone"/>
                    </div>
                </div>
                <div className="col">
                    <div className="form-group">
                        <label htmlFor='email'> 
                            Email Address
                        </label>
                        <input className="form-control form" type="email" placeholder="Email Address" id="email"/>
                    </div>
                </div>
            </div>
            <br /><br />
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

export default Contact