import ins from "../customize/axios";

export const handleRegister = async (data) => {
    const response = await ins.post('auth/register', data);
    console.log('Check response api: ', response);
    return response.data;
}

export const handleLogin = async (data) => {
    const response = await ins.post('auth/login', data);
    console.log('Check response api: ', response);
    return response.data;
}

export const handleLogout = async () => {
    const response = await ins.get('auth/logout');
    return response.data;
}