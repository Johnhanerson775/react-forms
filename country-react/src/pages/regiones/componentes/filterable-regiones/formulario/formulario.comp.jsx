import React, { useState } from 'react';
import './formulario.style.css'

const Formulario = (props) => {
    const [region, setRegion] = useState('');
    const [departamentos, setDepartamento] = useState('');
    const [name, setName] = useState('');
    const [poblacion, setPoblacion] = useState(0);
    const addMunicipio = (event) => {
        event.preventDefault();
       
        console.log('region ' +region);
        console.log('departamentos ' + departamentos);
       
        console.log('poblacion ' + poblacion);
    }
    return (
        <table className="formulario-container">
        <div >
       <th> Las regiones del pais </th>
        <form>
      
       <tr>
               <td>
                Region <select 
                   value={region}
                   onChange={(event)=>{
                   setRegion(event.target.value);
                    }}
       >
          <option value="m1">Region Andina </option> 
          <option value="m2">Region de la Amazonia</option> 
          <option value="m3">Region Caribe</option> 
         
       </select>
               </td>

       </tr>
      
       <tr>
               <td>
             Departamento <select value={departamentos} onChange={(event)=>{
                   setDepartamento(event.target.value);
                    }}
       >
              <option value="c1">Antioquia</option>
              <option value="c2">Amazonas</option> 
              <option value="c3">Atlantico</option> 
       </select>
               </td>

       </tr>
       
            
       <tr>
               <td>
                  Municipio <input type="text"
                    value={name}
                    onChange={(event)=>{
                      setName(event.target.value);
                    }}
                   />
               </td>
       </tr>

           
 <tr>
       <td>
            Poblacion <input type="number"  value={poblacion} onChange={(event)=>{
                      setPoblacion(event.target.value);
                    }}
                   />
               </td>
       </tr>
           
          
     
          
           <tr>
                <td>
                     <button
                     onClick={addMunicipio}
                     >
                         Añadir Municipio
                     </button>
               </td>
           </tr>
           </form>
    </div>
    </table>
);
    
}
export default Formulario;