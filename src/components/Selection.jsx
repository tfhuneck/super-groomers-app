import bath from '../images/bath.png';
import cut from '../images/cut.png';
import clip from '../images/clip.png';
import teeth from '../images/teeth.png';
import camera from '../images/camera.png'
import edit from '../images/edit.png'
import { useNavigate } from "react-router-dom"
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../App";

const Selection = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
    const navigate                      = useNavigate();
    const [ bathPrice, setBathPrice ]   = useState(75)
    const [ cutPrice, setCutPrice ]     = useState(25)
    const [ clipPrice, setClipPrice ]   = useState(25)
    const [ teethPrice, setTeethPrice ] = useState(15)
    const [ image, setImage ]           = useState();  
    const [ data, setData ]             = useContext(DataContext);
    const [ selected, setSelected ]     = useState([]);
    const [ services, setServices ]     = useState(); 
   
    const Avatar = () => {

        // ========== Check if image uploads==========
        // useEffect(() => {
        //     console.log(image)
        // }, [image, setImage])

        if (image){
            return (
                <>
                    <img src={URL.createObjectURL(image)} className='avatar'/>
                    <img src={edit} className='edit' />
                    <label htmlFor='upload-image' className='change-img'>
                        Change photo
                    </label>
                    <input type="file" accept='image/jpeg, image/jpg, image/png' onChange={handleImageUpload} name="image" id='upload-image' className='upload-img' />
                </>
            )
        }else {
            return (
                <>
                    <img src={camera} className='camera' />
                    <label htmlFor='upload-image' className='add-photo'>
                        Add photo
                    </label>
                    <input type="file" accept='image/jpeg, image/jpg, image/png' onChange={handleImageUpload} name="image" id='upload-image' className='upload-img' />
            
                </>
            )
        }
    }

    const handleImageUpload = (e) => {
        // console.log(e.target.files);
        setImage(e.target.files[0])  
    }

    const toggleService = (service) => {
        const element = document.getElementById(service)
        if(selected.includes(service)){
           let untoggle = selected.filter(i => i !== service);
            setSelected(untoggle);
            element.className = 'services'
        } else {
            setSelected(() => [...selected, service]) 
            element.className = 'services selected'
        }
    }

    useEffect(() => {
        const getPrice = (service) => {
            if(service == 'bath') return bathPrice;
            if(service == 'cut') return cutPrice;
            if(service == 'clip') return clipPrice;
            if(service == 'teeth') return teethPrice;
        }

        let serviceArr = []
        for (let i = 0; i < selected.length; i++) {
            var element = selected[i]
            let price = getPrice(element)
            let entry = { 
                            service : element,
                            price : price,
                        }
            serviceArr.push(entry)
        }
        setServices(serviceArr);
    },[selected, bathPrice, cutPrice, clipPrice, teethPrice]);


    const setPrice = (e) => {
        let value = e.target.value;
        console.log(value)
        if(value == 'small'){
            setBathPrice(75);
            setCutPrice(25);
            setClipPrice(25);
            setTeethPrice(15);
        }
        if(value == 'medium'){
            setBathPrice(100);
            setCutPrice(50);
            setClipPrice(50);
            setTeethPrice(30);
        }
        if(value == 'large'){
            setBathPrice(125);
            setCutPrice(75);
            setClipPrice(75);
            setTeethPrice(45);
        }
    }
        
    const handleNext = async() => {
        const name = document.getElementById('name').value;
        const size = document.getElementById('size').value;
        const energy = document.getElementById('energy').value;
        const breed = document.getElementById('breed').value;
        const note = document.getElementById('note').value;

        let pets = []
        let petData = {
            'name': name,
            'size': size,
            'energy': energy,
            'breed': breed,
            'note': note,
            'services': services,
            'image': image
        }
        pets.push(petData);
        let area = data
        const updateData = {area, pets};
        setData(updateData);
        navigate('/verifypet')
    }

    useEffect(()=>{
        console.log(data)
    }, [data])

    const handleBack = () => {
        navigate('/')
    }

    return (
       <>
        <div className="container selection">
            <div className="row"> 
                <div className="col d-flex justify-content-center">
                    <p className="heading2">Give us some details on your pet and services needs</p>
                </div>
            </div>
            <div className='photo'>
                {/* <img src={camera} className='camera' />
                <label htmlFor='upload-image' className='add-photo'>
                    Add photo
                </label>
                <input type="file" accept='image/jpeg, image/jpg, image/png' onChange={handleImageUpload} name="image" id='upload-image' className='upload-img' /> */}
                <Avatar />
            </div>
            <div className="row"> 
                <div className="col d-flex justify-content-center">
                    <div className="form-group">
                        <label htmlFor='name' > 
                            Your pet's name
                        </label>
                        <input className="form-control form" type="text" placeholder="Name" id="name"/>
                    </div>
                </div>
            </div>
            <div className="row"> 
                <div className="col d-flex justify-content-center">
                    <div className="form-group">
                        <label htmlFor='size'> 
                            Pet Size
                        </label>
                        <select className="form-select drop-form" id="size" onChange={(e) => setPrice(e)}>
                            <option value={'small'} >Small: Less than 25lbs</option>
                            <option value={'medium'} >Medium: Between 25lbs and 60lbs </option>
                            <option value={'large'} >Large: More than 60lbs</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row"> 
                <div className="col d-flex justify-content-center">
                    <div className="form-group">
                        <label htmlFor='energy'> 
                            Energy Level
                        </label>
                        <select className="form-select drop-form" id="energy">
                            <option value={'low'} >Low</option>
                            <option value={'medium'} >Medium</option>
                            <option value={'high'} >High</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row"> 
                <div className="col d-flex justify-content-center">
                    <div className="form-group">
                        <label htmlFor='breed' > 
                            Breed

                            {/* ========Question Mark SVG from design========= */}
                            {/* <svg className='help-icon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <g clipPath="url(#clip0_147_294)">
                            <path d="M6.05992 6C6.21665 5.55444 6.52602 5.17873 6.93322 4.93942C7.34042 4.7001 7.81918 4.61262 8.2847 4.69247C8.75022 4.77232 9.17246 5.01434 9.47664 5.37568C9.78081 5.73702 9.94729 6.19434 9.94659 6.66666C9.94659 8 7.94659 8.66666 7.94659 8.66666M7.99992 11.3333H8.00659M14.6666 8C14.6666 11.6819 11.6818 14.6667 7.99992 14.6667C4.31802 14.6667 1.33325 11.6819 1.33325 8C1.33325 4.3181 4.31802 1.33333 7.99992 1.33333C11.6818 1.33333 14.6666 4.3181 14.6666 8Z" stroke="#98A2B3" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_147_294">
                            <rect width="16" height="16" fill="white"/>
                            </clipPath>
                        </defs>
                            </svg> */}
                        </label>
                            <input className="form-control form" type="text" placeholder="Breed" id="breed" /> 
                    </div>
                </div>
            </div>
            <div className="row"> 
                <div className="col d-flex justify-content-center">
                    <div className="form-group">
                        <label htmlFor='note' > 
                            Note to groomer

                              {/* ========Question Mark SVG from design========= */}
                            {/* <svg className='help-icon-note' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <g clipPath="url(#clip0_147_294)">
                                    <path d="M6.05992 6C6.21665 5.55444 6.52602 5.17873 6.93322 4.93942C7.34042 4.7001 7.81918 4.61262 8.2847 4.69247C8.75022 4.77232 9.17246 5.01434 9.47664 5.37568C9.78081 5.73702 9.94729 6.19434 9.94659 6.66666C9.94659 8 7.94659 8.66666 7.94659 8.66666M7.99992 11.3333H8.00659M14.6666 8C14.6666 11.6819 11.6818 14.6667 7.99992 14.6667C4.31802 14.6667 1.33325 11.6819 1.33325 8C1.33325 4.3181 4.31802 1.33333 7.99992 1.33333C11.6818 1.33333 14.6666 4.3181 14.6666 8Z" stroke="#98A2B3" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_147_294">
                                    <rect width="16" height="16" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg> */}
                        </label>
                        <input className="form-control form" type="text" placeholder="Do we need to know anything?" id="note"/>
                    </div>
                </div>
            </div>
            <br /><br />
            <div className="row"> 
                <div className="col d-flex justify-content-center">
                    <div className="form-group">
                        <label  > 
                            Services needed
                        </label>
                        <button className="services" id='bath'  onClick={() => toggleService('bath')} >
                            <img src={bath} className='service-icon'/>
                            <span className='services-text'>
                                Bath
                            </span>
                            <div className='amount' id='bath-amount'>
                                $ {bathPrice.toFixed(2)}
                            </div>
                        </button>
                        <button className="services" id='cut' onClick={() => toggleService('cut')}>
                            <img src={cut} className='service-icon'/>
                            <span className='services-text'>
                                Cut
                            </span>
                            <div className='amount' id='cut-amount'>
                                $ {cutPrice.toFixed(2)}
                            </div>
                        </button>
                        <button className="services" id='clip' onClick={() => toggleService('clip')} >
                            <img src={clip} className='service-icon'/>
                            <span className='services-text'>
                                Nail Grinding
                            </span>
                            <div className='amount' id='clip-amount' >
                                $ {clipPrice.toFixed(2)}
                            </div>
                        </button>
                        <button className="services" id='teeth' onClick={() => toggleService('teeth')} >
                            <img src={teeth} className='service-icon'/>
                            <span className='services-text'>
                                Teeth Brushing
                            </span>
                            <div className='amount' id='teeth-amount'>
                                $ {teethPrice.toFixed(2)}
                            </div>
                        </button>
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

export default Selection