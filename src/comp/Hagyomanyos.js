import axios from "axios"
import { useEffect, useState } from "react";
export default function Hagyomanyos (){

    const [vissza,setvissza] = useState();

    useEffect(() => {
        axios.get("https://nodejs.sulla.hu/data")
        .then((resp)=> {
          setvissza(resp.data);
        })

    },[axios]);
        
    if (vissza != null) {
        return <div className="">
            <nav className="navbar navbar-light bg-success ">
              <div className="container-fluid">
                <a className="navbar-brand" href="">Home</a>
                <a className="navbar-brand" href="/adminLogin">Login</a>
              </div>
            </nav>
            <h1>Hagyomanyos</h1>
            {vissza.map((x) =>
                <a href={"singleDisplay/"+x.id} >
                    <div key={x.id} id={x.id} className="card">
                        <div className="card-body">
                          <h5 className="card-title">{x.name}</h5>
                          <h5 className="card-title">{x.id}</h5>
                          <p className="card-text">{x.location}</p>
                          <p className="card-text">{x.hostname}</p>
                          <p className="card-text">{x.price}</p>
                          <p className="card-text">{x.minimum_nights}</p>
                        </div>
                    </div>
                </a>
                
                
            )}
        </div>
    }else{
        return <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    }


    
}