import { useContext } from 'react';
import { CountContext } from '../context/CountContext.jsx';

export const useCount = () => {
  return useContext(CountContext);
};
