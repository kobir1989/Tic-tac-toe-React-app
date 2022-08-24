import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Games from './Games';
import './App.css';
import checkWinner from './winLogic';
////////////////////////////////////////////////////////////////////////
const itemArray = new Array(9).fill('empty');
const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState('');
  const reloadHandler = () => {
    setIsCross(false);
    setWinMessage('');
    itemArray.fill('empty', 0, 9);
  };

  const changeItemHandler = (itemNumber) => {
    if (winMessage) {
      return toast('Game Over', {
        theme: 'colored',
        type: 'error',
        autoClose: 1800,
      });
    }
    if (itemArray[itemNumber] === 'empty') {
      itemArray[itemNumber] = isCross ? 'Cross' : 'Circle';
      setIsCross(!isCross);
    } else {
      return toast('Incorrect move!', {
        theme: 'colored',
        type: 'warning',
        autoClose: 1800,
      });
    }

    checkWinner(itemArray, setWinMessage);
  };

  return (
    <Games
      onChangeItem={changeItemHandler}
      onReload={reloadHandler}
      isCross={isCross}
      win={winMessage}
      itemArray={itemArray}
      winPopup={toast}
      
    />
  );
};

export default App;
