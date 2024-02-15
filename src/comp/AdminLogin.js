import Admin from "./Admin"
import { useNavigate } from "react-router-dom";

export default function AdminLogin (){
    const navigate = useNavigate();
    return <div>
        <form onSubmit={(e)=>{
            e.preventDefault(); 
            if (document.getElementById("userName").value == "admin" && document.getElementById("password").value == "password"){
                document.getElementById("wrong").innerHTML = "";
                console.log("Log in success");
                navigate("/admin");
                
            }
            else{
                document.getElementById("wrong").innerHTML = "Wrong password or username";
            }
        }}>
            <nav className="navbar navbar-light bg-success ">
              <div className="container-fluid">
                <a className="navbar-brand" href="/">Home</a>
                <a className="navbar-brand" href="">Login</a>
              </div>
            </nav>
            <h1>Admin Login</h1>
            <p id="wrong"></p>
            <input type="text" id="userName" name="userName" placeholder="User name" className="form-control"></input>
            <input type="password" id="password" name="password" placeholder="Password" className="form-control"></input>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>   
    </div>
}