import { useSelector } from 'react-redux';
import { authData } from '../store/store';

export const useAuth = () => {
  const { accessToken } = useSelector(authData);
  const token = accessToken || localStorage.getItem("access_token");

  return {
    isLogged: !!token
  }
}
