import React, { Fragment, useRef, useState } from "react";
import "../css/bootstrap.min.css";
import "../css/style.css";
import { PostItCard } from "./PostItCard";
import {v4 as uuid} from "uuid";

export function PostIt() {
    const [notas, setNotas] = useState([
        { id: uuid(), title: "Jugar", description: "Silksong" },
        { id: uuid(), title: "Leer", description: "1984 de George Orwell" },
        { id: uuid(), title: "Estudiar", description: "Node" },
        { id: uuid(), title: "Ejercicio", description: "Salir a correr 30 minutos" },
    ]);
    const titleRef = useRef();
    const descRef = useRef();

    const agregarNota = (e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        const desc = descRef.current.value;

        setNotas((prevNotas)=>{
            const nuevaNota = {
                id: uuid(),
                title: title,
                description: desc
            };
            return [...prevNotas, nuevaNota];  
        });

        titleRef.current.value = "";
        descRef.current.value = "";
    };
    const eliminarNota = (id) => {
        setNotas((prevNotas) => prevNotas.filter((nota) => nota.id !== id));
    }

    return (
        <Fragment>
            
            <form className="row g-2" onSubmit={agregarNota}>
                <h1>Post It Simulator!</h1>
                <div className="col-12 col-md-4">
                    <input
                        type="text"
                        placeholder="Título"
                        className="form-control"
                        ref={titleRef}
                        required
                    />
                </div>
                <div className="col-12 col-md-5">
                    <input
                        type="text"
                        placeholder="Descripción"
                        className="form-control"
                        ref={descRef}
                    />
                </div>
                <div className="col-12 col-md-2">
                    <button className="btn btn-dark w-100" type="submit">
                        Agregar
                    </button>
                </div>
            </form>

            
              <div className="container-fluid">
                <div className="row">
                    <ul className="col-12">
                        {notas.map((note) => (
                            <PostItCard key={note.id} postIt={note} eliminar={eliminarNota}/>
                        ))}
                    </ul>
                </div>
            </div>
        </Fragment>
    );
}