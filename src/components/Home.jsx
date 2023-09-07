

const Home = () => {

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
                        <label for='city'> 
                            Select your city
                        </label>
                        <select class="form-select drop-form" id="city">
                            <option>Roseville</option>
                            <option>Folsom</option>
                            <option>Sacramento</option>
                            <option>West Sacramento</option>
                            <option>Davis</option>
                            <option>Woodland</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row"> 
                <div className="col d-flex justify-content-center">
                    <button className="btn button">
                        Find Groomers
                    </button>
                </div>
            </div>
        </div>
       </>
    )
}

export default Home