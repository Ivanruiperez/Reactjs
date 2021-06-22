import React, {useState} from 'react';
import './PriceCalculator.css'


function PriceCalculator(props) {
  const [value, setValue] = useState('');
  const setValueToCalculate = props.setValueToCalculate;

  const handleChangeValue = (event) => {
    setValue(event.target.value);
  };
  const handleButtonClick = () => {
    setValueToCalculate(value);
  };
    return (
        <section className='section'>
          <div className='sectionBox'>
			      <div className='sectionTittle'>
                Consumo Gb
            </div>
            <div className='inputBox'>
              <input value={value} onChange={handleChangeValue} className='inputGb'/>
            </div>
            <div className='buttonBox'>
              <button className='buttonGb' disabled={!value || value < 0 || isNaN(value)} onClick={handleButtonClick} >BUSCAR</button>
            </div>
            </div>
	    	</section>
    )
}

export default PriceCalculator;