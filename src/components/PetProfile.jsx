import bath from '../images/bath.png';
import cut from '../images/cut.png';
import clip from '../images/clip.png';
import teeth from '../images/teeth.png';
import edit from '../images/edit.png'
import avatar from '../images/dog-avatar.png'
import { useNavigate } from "react-router-dom"
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../App";

const Pet = (props) => {
    const navigate                      = useNavigate();
    const [ data, setData ]             = useContext(DataContext);

    const Image = () => {
        if (props.image){
            return (
                <img src={URL.createObjectURL(props.image)} className='pet-profile-img'/>
            ) 
        } else {
            return (
                <img src={avatar} className='pet-profile-img'/>
            )
        }
    }

    const DisplayIcons = (service) => {
        let image = ''
        if (service == 'bath') {
                image = bath;
        }
        if (service == 'cut') {
                image = cut;
        }
        if (service == 'clip') {
                image = clip;
        }
        if (service == 'teeth') {
                image = teeth;
        }
       return image;

      
    }

    const handleEdit = () => {
        navigate('/edit')
    }

    // useEffect(()=>{
    //     console.log(data)
    // }, [data])

    return (
        <>
            <div className='pet-profile'>
                <img src={edit} className='pet-profile-edit' onClickCapture={handleEdit}/>
                    <Image /> 
                <div className='pet-name'>
                    {props.name}
                </div>
                <div className='pet-info'>
                   <b>Breed:</b>  {props.breed}
                </div>
                <div className='pet-info'>
                   <b>Size:</b>  {props.size} 
                </div>
                <div className='pet-info'>
                   <b>Energy:</b>  {props.energy} 
                </div>
                <div className='pet-info'>
                   <b>Note:</b>  {props.note}
                </div>
                <div className='pet-services'>
                    Services needed:
                </div>
                <DisplayIcons />
                <div>
                    {props.service.map((n) => {
                        return(
                            <>
                                <img src={DisplayIcons(n.service)} className='pet-profile-service-icon'/>
                                <div className='pet-profile-service'>
                                    {n.service}
                                </div>
                                <div className='pet-profile-price'>
                                    $ {n.price.toFixed(2)}
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Pet;