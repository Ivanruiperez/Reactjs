import React, { useState } from 'react';
import PriceCalculator from './components/PriceCalculator/PriceCalculator';
import PriceTableComponent from './components/PriceTableComponent/PriceTableComponent';

function App() {
  const [valueToCalculate, setValueToCalculate] = useState(null);
  return (
    <div className="App">
      <PriceCalculator setValueToCalculate={setValueToCalculate} />
      <PriceTableComponent gbNumber={valueToCalculate} />
    </div>
  );
}

export default App;
