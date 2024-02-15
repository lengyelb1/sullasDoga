import axios from "axios"
import { useEffect, useState } from "react";
export default function Post(){

    return (
        <form onSubmit={(e)=>{
            axios.post("https://nodejs.sulla.hu/data",{
                name: document.getElementById("name").value,
                hostname: document.getElementById("hostname").value,
                localhost: document.getElementById("localhost").value,
                price: document.getElementById("price").value,
                minimum_nights: document.getElementById("minimum_nights").value,
            })
            .then((resp)=>{
                console.log(resp)
            })
        }}>
            <nav className="navbar navbar-light bg-success ">
              <div className="container-fluid">
                <a className="navbar-brand" href="/">Home</a>
                <a className="navbar-brand" href="/adminLogin">Login</a>
                <a className="navbar-brand" href="/admin">admin</a>
                <a className="navbar-brand" href="/post">Post</a>
                <a className="navbar-brand" href="/Put">Put</a>
              </div>
            </nav>
            <h1>Admin Login</h1>
            <p id="wrong"></p>
            <input type="text" id="name" name="name" placeholder="name" className="form-control"></input>
            <input type="text" id="hostname" name="hostname" placeholder="hostname" className="form-control"></input>
            <input type="text" id="localhost" name="localhost" placeholder="localhost" className="form-control"></input>
            <input type="number" id="price" name="price" placeholder="price" className="form-control"></input>
            <input type="number" id="minimum_nights" name="minimum_nights" placeholder="minimum_nights" className="form-control"></input> 
            <button type="submit" className="btn btn-primary">Post</button>
        </form>
    )

}