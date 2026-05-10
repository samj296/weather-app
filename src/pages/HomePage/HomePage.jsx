import { useState } from "react";
import City from "../component/Weather";

function HomePage(){
    const [city, setCity] = useState("")
    return(
        <div>
            <h1>Welcome to Weather App</h1>
            <select onChange={(e) => {setCity(e.target.value)}}>
                <option value="">Please select City</option>
                <option value="kelowna">Kelowna</option>
                <option value="vancouver">Vancouver</option>
            </select>
            <City city={city}/>
        </div>
    )
};

export default HomePage;