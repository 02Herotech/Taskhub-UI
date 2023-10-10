import Endpoints from "./endpoints";
import API, { BaseResponse } from "./API";

export const login = async (
    payload: any
): Promise<BaseResponse<any>> => {
    return API.post<any, any>(Endpoints.LOGIN, payload);
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






