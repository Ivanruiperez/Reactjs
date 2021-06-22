import React from 'react';
import './TableHeader.css';

function TableHeader(props){
    const headerArray = props.headerArray;
    return <ul className='tableHeader'>
      {headerArray.map((item) => {
        return <li className='tableCells' key={item}>{item}</li>
      })}
    </ul>
}

export default TableHeader;