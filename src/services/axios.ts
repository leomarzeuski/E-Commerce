import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchComments = async () => {
  try {
    const response = await axios.get(`${API_URL}/comments`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
