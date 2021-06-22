import React, { useState } from 'react';
import './TableItems.css';

function TableItems(props) {
    const itemsArray = props.itemsArray.products;
    const gbNumber = props.gbNumber;
    const [tooltip, setTooltip] = useState(null); 
  return( 
    <div>
      <ul className='tableItems'>
      {itemsArray.map((item) => {
      return <li className='items' key={item.id}>
          <div className='itemsCells'>{item.company}</div>
          <div className='itemsCells'>{item.name}</div>
          <div className='itemsCells'>{(item.monthlyrate*12+item.gbrate*(gbNumber-item.monthlygbs)*12).toFixed(2)}</div>
          <div className='itemsCells'>{item.contractlength}</div>
          <div className='itemsCells'>{item.monthlygbs}</div>
          <div className='itemsCellsInfo' onClick={() => {setTooltip(item.id)}}>Más info</div>
          {tooltip === item.id && 
          <div className='tooltipBox'>
          <button className='tooltipButton' onClick={() => {setTooltip(null)}}>X</button>
          <table>
          <tbody>
          <tr>
            <th>Tarifa mensual:</th>
            <td>{item.monthlyrate} €</td>
          </tr>
          <tr>
            <th>Precio por Gb:</th>
            <td>{item.gbrate} €</td>
          </tr>
          <tr>
            <th>Estado:</th>
            <td>{item.status === 'live' ? 'Activo' : 'Expirado'}</td>
          </tr>
          </tbody>
          </table>
          </div>}
          </li>
      })}
      </ul>
     </div>)
}

export default TableItems;