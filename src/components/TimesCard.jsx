import edit from '../images/edit.png'
import { useNavigate } from "react-router-dom"
import { useState, useContext, useEffect } from "react";

const Times = (props) => {
    const navigate                      = useNavigate();


    const handleEdit = () => {
        navigate('/time')
    }

    // useEffect(()=>{
    //     console.log(data)
    // }, [data])

    return (
        <>
            <div className='times-card'>
                <img src={edit} className='pet-profile-edit' onClickCapture={handleEdit}/>
                <div className='time-info'>
                    <div className='card-date'>
                        {props.date1} 
                    </div>
                    <div className='card-time'>
                    {props.time1}
                    </div>
                    <div className='card-date'>
                        {props.date2} 
                    </div>
                    <div className='card-time'>
                    {props.time2}
                    </div>
                    <div className='card-date'>
                        {props.date3} 
                    </div>
                    <div className='card-time'>
                    {props.time3}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Times;