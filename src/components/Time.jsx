import { useNavigate } from "react-router-dom"
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../App";

const Time = () => {

    const navigate                      = useNavigate();
    const [ data, setData ]             = useContext(DataContext);
    const [ date1, setDate1 ]           = useState();
    const [ date2, setDate2 ]           = useState();
    const [ date3, setDate3 ]           = useState();

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const handleNext = async() => {
        const time1 = document.getElementById('time1').value;
        const time2 = document.getElementById('time2').value;
        const time3 = document.getElementById('time3').value;

        console.log(date1)
       
        let time = {
           date1 : date1,
           time1 : time1,
           date2 : date2,
           time2 : time2,
           date3 : date3,
           time3 : time3
        }

        // let area = data.area;
        // let pets = data.pets;
        // let contact = data.contact
        const updateData = {...data, time};
        setData(updateData);
        navigate('/confirm')
    }

    useEffect(()=>{
        console.log(data)
    }, [data])

    const handleBack = () => {
        navigate('/contact')
    }

    useEffect(() => {
        const time1 = document.getElementById('time1');
        const time2 = document.getElementById('time2');
        const time3 = document.getElementById('time3');
        const date1 = document.getElementById('date1');
        const date2 = document.getElementById('date2');
        const date3 = document.getElementById('date3');


        if(data.time){
            time1.value = data.time.time1
            time2.value = data.time.time2
            time3.value = data.time.time3
            date1.value = data.time.date1
            setDate1(data.time.date1)
            date2.value = data.time.date2
            setDate2(data.time.date2)
            date3.value = data.time.date3
            setDate3(data.time.date3)
        }
    }, [])

    return (
       <>
        <div className="container time">
            <div className="row"> 
                <div className="col d-flex justify-content-center">
                    <p className="heading2">Please choose three dates and preferred times</p>
                </div>
            </div>
            <div className="row "> 
                <div className="col d-flex justify-content-center">
                    <div className="form-group">
                        <label htmlFor='date1' > 
                            Date Option 1
                        </label>
                        <input className="form-control form" type="date" id="date1" onChange={(e) => setDate1(e.target.value)} />
                    </div>
                </div>
                <div className="col d-flex justify-content-center">
                    <div className="form-group">
                        <label htmlFor='time1' > 
                            Preferred time option 1
                        </label>
                        <select className="form-select drop-form" id="time1">
                            <option value={'morning'} >Morning</option>
                            <option value={'afternoon'} >Afternoon</option>
                            <option value={'evening'} >Evening</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row "> 
                <div className="col d-flex justify-content-center">
                    <div className="form-group">
                        <label htmlFor='date2' > 
                            Date Option 2
                        </label>
                        <input className="form-control form" type="date" id="date2" onChange={(e) => setDate2(e.target.value)}/>
                    </div>
                </div>
                <div className="col d-flex justify-content-center">
                    <div className="form-group">
                        <label htmlFor='time2' > 
                            Preferred time option 2
                        </label>
                        <select className="form-select drop-form" id="time2">
                            <option value={'morning'} >Morning</option>
                            <option value={'afternoon'} >Afternoon</option>
                            <option value={'evening'} >Evening</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row "> 
                <div className="col d-flex justify-content-center">
                    <div className="form-group">
                        <label htmlFor='date3' > 
                            Date Option 3
                        </label>
                        <input className="form-control form" type="date" id="date3" onChange={(e) => setDate3(e.target.value)} />
                    </div>
                </div>
                <div className="col d-flex justify-content-center">
                    <div className="form-group">
                        <label htmlFor='time3' > 
                            Preferred time option 3
                        </label>
                        <select className="form-select drop-form" id="time3">
                            <option value={'morning'} >Morning</option>
                            <option value={'afternoon'} >Afternoon</option>
                            <option value={'evening'} >Evening</option>
                        </select>
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

export default Time