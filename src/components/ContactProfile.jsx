import edit from '../images/edit.png'
import { useNavigate } from "react-router-dom"
import { useState, useContext, useEffect } from "react";

const ContactProfile = (props) => {
    const navigate                      = useNavigate();


    const handleEdit = () => {
        navigate('/contact')
    }

    // useEffect(()=>{
    //     console.log(data)
    // }, [data])

    return (
        <>
            <div className='contact-profile'>
                <img src={edit} className='pet-profile-edit' onClickCapture={handleEdit}/>
                <div className='contact-name'>
                    {props.firstname} {props.lastname}
                </div>
                <div className='contact-info'>
                   {props.street}
                </div>
                <div className='contact-info'>
                   {props.city}, {props.state} {props.zip}
                </div>
                <div className='contact-info'>
                   {props.phone}
                </div>
                <div className='contact-info'>
                   {props.email}
                </div>
                
            </div>
        </>
    )
}

export default ContactProfile;