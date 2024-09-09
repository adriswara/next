import axios from 'axios';

const login = async (email, password) => {
    const response = await axios.post('http://localhost:8081/login', { email, password });
    localStorage.setItem('token', response.data.token);
};

const getRestrictedData = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get('http://localhost:8081/restricted', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};
