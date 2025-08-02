import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setTheme, initializeTheme } from '../redux/actions/themeAction';

export const useTheme = () => {
  const theme = useSelector(state => state.theme.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeTheme());
  }, [dispatch]);

  const changeTheme = (newTheme) => {
    dispatch(setTheme(newTheme));
  };

  return { theme, setTheme: changeTheme };
};