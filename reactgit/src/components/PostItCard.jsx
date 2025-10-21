import React from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";

export function PostItCard({ postIt, eliminar }) {
    return (
    <li className="col-xs-12 post-it">
        <div>
            <button className="btn btn-danger position-absolute top-0 end-0 m-2" aria-label="Close" onClick={() => eliminar(postIt.id)}><i class="bi bi-trash"></i></button>
            <h2>{postIt.title}</h2>
            <p>{postIt.description}</p>
        </div>
    </li>);
}