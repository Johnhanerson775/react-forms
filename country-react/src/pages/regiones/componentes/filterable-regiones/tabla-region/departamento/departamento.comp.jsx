import React from 'react';
import'./departamento.style.css';


const Departamento = (props) => {
    return (
       <div className="departamento-container">
          {props.categoryName}
       </div> 
           
    );
}
export default Departamento;     
