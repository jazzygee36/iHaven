import api from '@/utils/axiosInstance';
import axios from 'axios';

export const getCourseById = async (id: string) => {
 const res =await api.get(`/course/details/${id}`)
 return res.data
};
