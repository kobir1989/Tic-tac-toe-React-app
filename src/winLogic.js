const checkWinner = (itemArray, setWinMessage) => {
  // Horizontal Check
  if (
    itemArray[0] === itemArray[1] &&
    itemArray[0] === itemArray[2] &&
    itemArray[0] !== 'empty'
  ) {
    setWinMessage(`${itemArray[0]} Wins`);
  } else if (
    itemArray[3] !== 'empty' &&
    itemArray[3] === itemArray[4] &&
    itemArray[4] === itemArray[5]
  ) {
    setWinMessage(`${itemArray[3]} Wins`);
  } else if (
    itemArray[6] !== 'empty' &&
    itemArray[6] === itemArray[7] &&
    itemArray[7] === itemArray[8]
  ) {
    setWinMessage(`${itemArray[6]} Wins`);
  }
  // verticla Check
  else if (
    itemArray[0] !== 'empty' &&
    itemArray[0] === itemArray[3] &&
    itemArray[3] === itemArray[6]
  ) {
    setWinMessage(`${itemArray[0]} Wins`);
  } else if (
    itemArray[1] !== 'empty' &&
    itemArray[1] === itemArray[4] &&
    itemArray[4] === itemArray[7]
  ) {
    setWinMessage(`${itemArray[1]} Wins`);
  } else if (
    itemArray[2] !== 'empty' &&
    itemArray[2] === itemArray[5] &&
    itemArray[5] === itemArray[8]
  ) {
    setWinMessage(`${itemArray[2]} Wins`);
  }
  // Top-Left Corner
  else if (
    itemArray[0] !== 'empty' &&
    itemArray[0] === itemArray[4] &&
    itemArray[4] === itemArray[8]
  ) {
    setWinMessage(`${itemArray[0]} Wins`);
  }
  //Top-Right Corner
  else if (
    itemArray[2] !== 'empty' &&
    itemArray[2] === itemArray[4] &&
    itemArray[4] === itemArray[6]
  ) {
    setWinMessage(`${itemArray[2]} Wins`);
  }
};
export default checkWinner;
