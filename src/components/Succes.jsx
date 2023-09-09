import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Success = () => {

    const navigate              = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const handleButton = () => {
        navigate('/')
    }

    return (
       <>
        <div className="container home">
            <div className="row"> 
                <div className="col d-flex justify-content-center">
                    <p className="heading">Your booking has been submitted sucessfully!</p>
                </div>
            </div>
            <div className="row"> 
                <div className="col d-flex justify-content-center">
                    <p className="heading">You will recieve an confirmation email shortly.</p>
                </div>
            </div>
            <div className="row"> 
                <div className="col d-flex justify-content-center">
                    <button className="btn button" onClick={handleButton}>
                        Make another Booking
                    </button>
                </div>
            </div>
        </div>
       </>
    )
}

export default Success