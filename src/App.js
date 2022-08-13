import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Games from './Games';
import './App.css';

////////////////////////////////////////////////////////////////////////
const itemArray = new Array(9).fill('empty');
const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState('');
  const reloadHandler = () => {
    setIsCross(false);
    setWinMessage('');
    itemArray.fill('empty', 0, 8);
  };

  const changeItemHandler = (itemNumber) => {
    if (winMessage) {
      return toast(winMessage, { type: 'success' });
    }
    if (itemArray[itemNumber] === 'empty') {
      itemArray[itemNumber] = isCross ? 'Cross' : 'Circle';
      setIsCross(!isCross);
    } else {
      return toast('Drow No one Wins!', { type: 'error' });
    }
  };

  return (
    <div className='games__Container'>
      <Games
        onChangeItem={changeItemHandler}
        onReload={reloadHandler}
        isCross={isCross}
        win={winMessage}
        itemArray={itemArray}
      />
    </div>
  );
};

export default App;
