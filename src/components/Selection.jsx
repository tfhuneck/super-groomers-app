import bath from '../images/bath.png';
import cut from '../images/cut.png';
import clip from '../images/clip.png';
import teeth from '../images/teeth.png';
import camera from '../images/camera.png'

const Selection = () => {

    return (
       <>
        <div className="container selection">
            <div className="row"> 
                <div className="col d-flex justify-content-center">
                    <p className="heading2">Give us some details on your pet and services needs</p>
                </div>
            </div>
            <div className='photo'>
                <img src={camera} className='camera' />
                <span className='add-photo'>
                    Add photo
                </span>
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
                        <select className="form-select drop-form" id="size">
                            <option>Small: Less than 25lbs</option>
                            <option>Medium: Between 25lbs and 60lbs </option>
                            <option>Large: More than 60lbs</option>
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
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row"> 
                <div className="col d-flex justify-content-center">
                    <div className="form-group">
                        <label htmlFor='breed' > 
                            Breed
                            <svg className='help-icon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <g clip-path="url(#clip0_147_294)">
                            <path d="M6.05992 6C6.21665 5.55444 6.52602 5.17873 6.93322 4.93942C7.34042 4.7001 7.81918 4.61262 8.2847 4.69247C8.75022 4.77232 9.17246 5.01434 9.47664 5.37568C9.78081 5.73702 9.94729 6.19434 9.94659 6.66666C9.94659 8 7.94659 8.66666 7.94659 8.66666M7.99992 11.3333H8.00659M14.6666 8C14.6666 11.6819 11.6818 14.6667 7.99992 14.6667C4.31802 14.6667 1.33325 11.6819 1.33325 8C1.33325 4.3181 4.31802 1.33333 7.99992 1.33333C11.6818 1.33333 14.6666 4.3181 14.6666 8Z" stroke="#98A2B3" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_147_294">
                            <rect width="16" height="16" fill="white"/>
                            </clipPath>
                        </defs>
                            </svg>
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
                            <svg className='help-icon-note' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <g clip-path="url(#clip0_147_294)">
                                    <path d="M6.05992 6C6.21665 5.55444 6.52602 5.17873 6.93322 4.93942C7.34042 4.7001 7.81918 4.61262 8.2847 4.69247C8.75022 4.77232 9.17246 5.01434 9.47664 5.37568C9.78081 5.73702 9.94729 6.19434 9.94659 6.66666C9.94659 8 7.94659 8.66666 7.94659 8.66666M7.99992 11.3333H8.00659M14.6666 8C14.6666 11.6819 11.6818 14.6667 7.99992 14.6667C4.31802 14.6667 1.33325 11.6819 1.33325 8C1.33325 4.3181 4.31802 1.33333 7.99992 1.33333C11.6818 1.33333 14.6666 4.3181 14.6666 8Z" stroke="#98A2B3" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_147_294">
                                    <rect width="16" height="16" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
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
                        <button className="services" >
                            <img src={bath} className='service-icon'/>
                            <span className='services-text'>
                                Bath
                            </span>
                            <div className='amount' id='bath-amount'>
                                $ 0.00
                            </div>
                        </button>
                        <button className="services" >
                            <img src={cut} className='service-icon'/>
                            <span className='services-text'>
                                Cut
                            </span>
                            <div className='amount' id='cut-amount'>
                                $ 0.00
                            </div>
                        </button>
                        <button className="services" >
                            <img src={clip} className='service-icon'/>
                            <span className='services-text'>
                                Nail Grinding
                            </span>
                            <div className='amount' id='clip-amount' >
                                $ 0.00
                            </div>
                        </button>
                        <button className="services" >
                            <img src={teeth} className='service-icon'/>
                            <span className='services-text'>
                                Teeth Brushing
                            </span>
                            <div className='amount' id='teeth-amount'>
                                $ 0.00
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <br /><br />
            <div className="row"> 
                <div className="col d-flex justify-content-center">
                    <button className="btn back">
                        Back
                    </button>
                    <button className="btn button">
                        Next
                    </button>
                </div>
            </div>
        </div>
       </>
    )
}

export default Selection