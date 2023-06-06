import { useState } from 'react';
import './App.css';

function App() {
  const [color, changeColor] = useColorChange();

  function useColorChange() {
    const [color, setColor] = useState('red');

    const changeColor = () => {
      setColor(prevColor => (prevColor === 'red' ? 'blue' : 'red'));
    };

    return [color, changeColor];
  }

  return (
    <>
      <button onClick={changeColor}>Change Color</button>
      {color}
    </>
  );
}

export default App;
