import React, {useEffect, useState} from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import protect from '../utils/protect';

function Quote(){

    const [quote, setQuote] = useState({})

    useEffect(() =>{
        const token = window.localStorage.getItem('token')
        const config = {
            headers:{
               Authorization: `JWT ${token}` 
            }
        }
        axios.get("http://ca35951931f4.ngrok.io/quotes",config)
        .then((response) =>{
            setQuote(response.data)
        })
        .catch((err) =>{
            alert(err.response.data.message)
        })

    },[])

    return(
       <div>
         <Navbar/>
         <div className="container mt-5">
             <div className="row">
                 <div className="col-12">
                    <h2>{quote.quote}</h2>
                    <span>{quote.source}</span>
                 </div>
             </div>
         </div>
       </div> 
    )


}

export default protect(Quote);


