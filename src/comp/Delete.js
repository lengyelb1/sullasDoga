import axios from "axios"
import { useEffect, useState } from "react";
export default function Delete (id) {
    axios.delete("https://nodejs.sulla.hu/data/"+id)
    .then(()=> {
        console.log("Sikeres törlés, id: "+id)
    })
}