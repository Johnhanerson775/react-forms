import React from 'react';
 import FilterableRegiones from './componentes/filterable-regiones/filterable-regiones.comp';
 
const RegionesPages = () => {
  let municipioList = [
    {   
        id:'m1',
        nam:'Region Andina ',
        id:"m1c1",
        name:'Antioquia',
        municipios:[
            {
                
               
                id:"m1c1p1",
                name:"Medellin",
                poblacion:'1000',
              
            },
            {
                id:"m1c1p2",
                name:"Envigado",
                poblacion:'1500',
            },
            {
                id:"m1c1p2",
                name:"Caucasia",
                poblacion:'2500',
            },
            {
                id:"m1c1p4",
                name:"Caldas",
                poblacion:'3000',
            },
            {
                id:"m1c1p5",
                name:"Bello",
                poblacion:'3500',
            }
        ]
    },
    {
        id:'m2',
        nam: 'Region de la Amazonia',
        id:"m2c2",
        name:'Amazonas',
        municipios:[
            {
                id:"c2p1",
                name:"Leticia",
                poblacion:'4000',
            },
            {
                id:"c2p2",
                name:"Manaos",
                poblacion:'4500',
            },
            {
                id:"c2p3",
                name:"Tarapaca",
                poblacion:'5000',
            },
            {
                id:"c2p4",
                name:"pradedra",
                poblacion:'5500',
            },
            {
                id:"c2p5",
                name:"pradedra",
                poblacion:'6000',
            }
        ]
    },
    {
        id:"m3",
        nam: 'Region Caribe',
        id:"c3",
        name:'Atlantico',
        municipios:[
            {
                id:"c2p1",
                name:"Barranquilla",
                poblacion:'6500',
            },
            {
                id:"c2p2",
                name:"Soledad",
                poblacion:'7000',
            },
            {
                id:"c2p3",
                name:"malambo",
                poblacion:'7500',
            },
            {
                id:"c2p4",
                name:"galapa",
                poblacion:'8000',
            },
            {
                id:"c2p5",
                name:"luruaco",
                poblacion:'8500',
            }
        ]
    }
   
];
    return (
        
      <div>
      <div>
           <> <FilterableRegiones municipioList={municipioList}/> </>
     <div />
         
      </div>
      </div>
      );
}
export default RegionesPages;