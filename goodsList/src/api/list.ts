import api from '../http/http';
//商城订单
export const listOrder = () => api({
    url: '',
    method: 'GET',
})