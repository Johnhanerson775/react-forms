import React from 'react';
import'./municipio.style.css';

const Municipio = (props) => {
    return (
        <div className="municipio-container">
            
         
            {props.datos.name} 
         <div className="derecha"> {props.datos.poblacion}</div> 
         
         
        </div>
    
 );
}
export default Municipio ;  