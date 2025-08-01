import api from '@/utils/axiosInstance';


export const getProfile = async () => {
 const res = await api.get('/me')
  return res.data;
};
