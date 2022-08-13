import React from 'react';
import { FaTimes, FaRegCircle } from 'react-icons/fa';
const Icon = ({ name }) => {
  switch (name) {
    case 'Circle':
      return <FaRegCircle className='icons' />;
    case 'Cross':
      return <FaTimes className='icons' />;
    default:
  }
};

export default Icon;
