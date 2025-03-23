import axios from '../utils/axios';

export const getUserProfile = async() => {
    const res = await axios.get('/api/users/profile');
    return res.data;
};

export const updateUserProfile = async(data) => {
    const res = await axios.put('/api/users/profile', data);
    return res.data;
};