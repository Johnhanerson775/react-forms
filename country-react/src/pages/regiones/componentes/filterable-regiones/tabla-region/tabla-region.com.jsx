import React from 'react';
import'./tabla-region.style.css';
import Departamento from './departamento/departamento.comp';
import Municipio from './municipio/municipio.comp';
import Region from './region/region.com';

const TablaRegion = (props) => {
    
 return (
             <table className="tabla-region-container">
      
                 <div>
             {props.municipioList.map((departamentos,index) =>{
               return(
                <div key={(departamentos.id)}>
              <Region municipioNam={departamentos.nam}/>
            
              <Departamento categoryName={departamentos.name}/>
     <div className="der">Nombre    Poblacion</div>
           {(departamentos.municipios).map((datos, indexProduct)=>{
                   return(
                      <div>
                    <Municipio
                    key={datos.id} 
                    datos={datos}/>
                  </div>
                 );
                })}
                </div>
                );
              })}
              </div>
            </table>
         );

}
export default TablaRegion;