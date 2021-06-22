import React from 'react';
import './PriceTableComponent.css';
import TableHeader from './TableHeader/TableHeader';
import TableItems from './TableItems/TableItems';
import {products} from '../../products';

function PriceTableComponent(props) {
    const gbNumber = props.gbNumber;
  
    return gbNumber && gbNumber > 0 ? (
        <div className='sectionTable'>
          <TableHeader headerArray={['Compañía', 'Plan', 'coste anual', 'Duración de contrato', 'Límite Gb']} />
          <TableItems gbNumber={gbNumber} itemsArray={products}/>
        </div>
    ) : (
        <div className='section'>Introduce un número</div>
    )
    
}

export default PriceTableComponent;