import { useState } from "react";
import Admin from "./comp/Admin";
import AdminLogin from "./comp/AdminLogin.js";
import Hagyomanyos from "./comp/Hagyomanyos.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protected from "./comp/Protected.js";
import SingleDisplay from "./comp/SingleDisplay.js";
import Post from "./comp/Post.js";
import Put from "./comp/Put.js";
import Delete from "./comp/Delete.js";

function App() {
  const [logIn,setLogIn] = useState(false);

  function changeLogin (value){setLogIn(value)};


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hagyomanyos />}>
        </Route>
        <Route path="adminLogin" element={<AdminLogin />}></Route>
        <Route path="singleDisplay/:id" element={<SingleDisplay/>}/>
        <Route path="admin" element={<Admin/>}/>
        <Route path="post" element={<Post/>}/>  
        <Route path="put" element={<Put/>}/>        
        <Route path="delete" element={<Delete/>}/>        


      </Routes>
    </BrowserRouter>
  );
}

export default App;
