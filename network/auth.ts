import Endpoints from "./endpoints";
import API, { BaseResponse } from "./API";

export const login = async (
    payload: any
): Promise<BaseResponse<any>> => {
    return API.post<any, any>(Endpoints.LOGIN, payload);
};


export const signup = async (
    payload: any,
    q: string
): Promise<BaseResponse<any>> => {
    let endpoint = '';

    if (q === 'customer') {
        endpoint = Endpoints.CUSTOMER_SIGNUP;
    } else if (q === 'serviceProvider') {
        endpoint = Endpoints.SERVICE_PROVIDER_SIGNUP;
    } else {
        // Handle default case or error
        console.error('Invalid q value');
        return Promise.reject('Invalid q value');
    }

    return API.post<any, any>(endpoint, payload);
};






