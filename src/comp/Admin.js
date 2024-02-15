import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";


export default function Admin (props){

    const [vissza,setvissza] = useState();
    const navigate = useNavigate();


    useEffect(() => {
        /*
        if(props.logIn == false)
        {
            navigate("/");
        }
        */
        axios.get("https://nodejs.sulla.hu/data")
        .then((resp)=> {
          setvissza(resp.data);
        })

    },[axios]);

    

    if (vissza != null) {
        return <div className="">
            <nav className="navbar navbar-light bg-success ">
              <div className="container-fluid">
                <a className="navbar-brand" href="/">Home</a>
                <a className="navbar-brand" href="/adminLogin">Login</a>
                <a className="navbar-brand" href="/admin">admin</a>
                <a className="navbar-brand" href="/post">Post</a>
                <a className="navbar-brand" href="/Put">Put</a>
              </div>
            </nav>
            <h1>Admin Site</h1>
            {vissza.map((x) =>
                
                    <div key={x.id} id={x.id} className="card">
                        <div className="card-body">
                            <a href={"singleDisplay/"+x.id} >
                                <h5 className="card-title">{x.name}</h5>
                                <h5 className="card-title">{x.id}</h5>
                                <p className="card-text">{x.location}</p>
                                <p className="card-text">{x.hostname}</p>
                                <p className="card-text">{x.price}</p>
                                <p className="card-text">{x.minimum_nights}</p>
                            </a>
                            <NavLink key={x.id+1} to ={`/delete/${x.id}`}>
                                <button>Delete</button>
                            </NavLink>
                        </div>
                    </div>
                
                
            )}
        </div>
    }else{
        return <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    }
}