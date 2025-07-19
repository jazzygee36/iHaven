import axios from 'axios';

export const getCourseById = async (id: string) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/course/details/${id}`
    );

    return res.data;
  } catch (error) {
    console.error("Error fetching course:", error);
    throw new Error("Failed to fetch course.");
  }
};
