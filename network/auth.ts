import Endpoints from "./endpoints";
import API, { BaseResponse } from "./API";

// export const login = async (
//     payload: any
// ): Promise<BaseResponse<any>> => {
//     return API.post<any, any>(Endpoints.LOGIN, payload);
// };

export const serviceProviderLogin = async (
    payload: any
): Promise<BaseResponse<any>> => {
    const endpoint = Endpoints.SERVICE_PROVIDER_LOGIN;
    return API.post<any, any>(endpoint, payload);
};

export const customerLogin = async (
    payload: any
): Promise<BaseResponse<any>> => {
    const endpoint = Endpoints.CUSTOMER_LOGIN;
    return API.post<any, any>(endpoint, payload);
};


export const customerSignup = async (
    payload: any
): Promise<BaseResponse<any>> => {
    const endpoint = Endpoints.CUSTOMER_SIGNUP;
    return API.post<any, any>(endpoint, payload);
};

export const serviceProviderSignup = async (
    payload: any
): Promise<BaseResponse<any>> => {
    const endpoint = Endpoints.SERVICE_PROVIDER_SIGNUP;
    return API.post<any, any>(endpoint, payload);
};






