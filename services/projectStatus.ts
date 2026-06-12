import axios from 'axios';

const getProjectStatus = async () => {
  try {
    const response = await axios.get('/api/status');
    return response.data.status;
  } catch (error) {
    console.error(error);
    return 'خطأ في استرجاع حالة المشروع';
  }
};

export default getProjectStatus;