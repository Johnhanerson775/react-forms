import React from 'react';
import './filterable-regiones.style.css';
import TablaRegion from './tabla-region/tabla-region.com';
import Formulario from './formulario/formulario.comp';
const FilterableRegiones = (props) => {
  
    return (
        
        <div className="filterable-regiones-container">
  
            <TablaRegion municipioList={props.municipioList}/>
            <Formulario/>
      </div>
     
    );
}
export default FilterableRegiones;