import React from 'react'
import { useEffect, useState } from 'react'
import '../styles/style.css'
import Navbar from './Navbar';

function Imagenes() {

    const [heroe, setHeroe] = useState([]);

    useEffect(() => {
        obtenerHeroes();
    })

    const obtenerHeroes = async () => {
        const url = "https://raw.githubusercontent.com/jennymontoya1001/endpointheroesjson/main/heroes.json"
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        const { results } = data;
        setHeroe(results);
    }

    return (
        <div>
            <Navbar />
            <h1>Heroes</h1>
            <hr />
            {
                heroe.map(her => (

                    <div className="card" key={her.id}>
                        <img className="card-img-top" src={her.image} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{her.superhero}</h5>
                            <p className="card-text">{her.publisher}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Imagenes
