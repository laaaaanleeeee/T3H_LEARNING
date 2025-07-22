import { useContext } from 'react';
import { CountContext } from '../context/CountContext';

export const useCount = () => {
  return useContext(CountContext);
};
