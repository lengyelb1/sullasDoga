import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function SingleDisplay (){
    const params = useParams()
    const [vissza,setvissza] = useState();

    useEffect(() => {
        axios.get(`https://nodejs.sulla.hu/data/${params.id}`)
        .then((resp)=> {
          setvissza(resp.data);
        })
    });

    if (vissza != null) {
    return (
        <div className="card">
            <div className="card-body">
              <h5 className="card-title">{vissza.name}</h5>
              <h5 className="card-title">{vissza.id}</h5>
              <p className="card-text">{vissza.location}</p>
              <p className="card-text">{vissza.hostname}</p>
              <p className="card-text">{vissza.price}</p>
              <p className="card-text">{vissza.minimum_nights}</p>
            </div>

        </div>
    )}
    else{
        return <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    }
}