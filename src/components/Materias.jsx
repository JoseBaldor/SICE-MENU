//Catálogo para la carga de Materias

import React, {useState} from "react";

const Materias = () =>{
    
    return(
        <>
        <form>
            <div>
                <label htmlFor="idMAteria">Clave Materia</label>
                <input
                    type="text"
                    name="idMateria"
                    id="idMateria"
                />
            </div>
            <div>
                <label htmlFor="description">Descripción</label>
                <input
                    type="text"
                    name="description"
                    id="description"
                />
            </div>
            <button type="submit">Guardar</button>
        </form>
        </>
    );

}

export default Materias;