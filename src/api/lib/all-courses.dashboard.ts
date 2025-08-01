import axios from 'axios';


export const getAllCoursesDashboard = async () => {


  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/all-courses`,
    
  );

  return res.data;
};
