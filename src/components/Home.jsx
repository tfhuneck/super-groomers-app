import { useNavigate } from "react-router-dom"
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../App";

const Home = () => {

    const navigate              = useNavigate();
    const [ city, setCity ]     = useState({'city':'Roseville, CA'});
    const [ data, setData ]     = useContext(DataContext);

    const handleNext = async () => {
        await setData(city);
        navigate('/select');
    }

    const handleChange = async (e) =>{
        let value = e.target.value;
        let area =  {'city' : value};
        setCity(area);
       
    }

    // useEffect(()=>{
    //     console.log(city)
    // }, [city, setCity])

    return (
       <>
        <div className="container home">
            <div className="row"> 
                <div className="col d-flex justify-content-center">
                    <p className="heading">Find local groomers that will come to you</p>
                </div>
            </div>
            <div className="row"> 
                <div className="col d-flex justify-content-center">
                    <div className="city-dropdown form-group">
                        <label htmlFor='city-select'> 
                            Select your city
                        </label>
                        <select className="form-select drop-form" id="city-select"  onChange={(e) => handleChange(e)}>
                            <option value={'Roseville, CA'} >Roseville, CA</option>
                            <option value={'Citrus Heights, CA'} >Citrus Heights, CA</option>
                            <option value={'Folsom, CA'} >Folsom, CA</option>
                            <option value={'Granite Bay, CA'} >Granite Bay, CA</option>
                            <option value={'Carmichael, CA'} >Carmichael, CA</option>
                            <option value={'Orangevale, CA'} >Orangevale, CA</option>
                            <option value={'El Dorado Hills, CA'} >El Dorado Hills, CA</option>
                            <option value={'Rancho Cordova, CA'} >Rancho Cordova, CA</option>
                            <option value={'Sacramento, CA'} >Sacramento, CA</option>
                            <option value={'West Sacramento, CA'} >West Sacramento, CA</option>
                            <option value={'Davis, CA'} >Davis, CA</option>
                            <option value={'Woodland, CA'} >Woodland, CA</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row"> 
                <div className="col d-flex justify-content-center">
                    <button className="btn button" onClick={handleNext}>
                        Find Groomers
                    </button>
                </div>
            </div>
        </div>
       </>
    )
}

export default Home