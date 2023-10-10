
export interface IForgetPasswordRequest{
    emailAddress: string;
}

export interface IForgetPasswordResponse{
    data : string;
    successful : boolean
}


export interface IPasswordRequest{
    authorization: string | null;
    authentication: string
}


export interface ITokenData {
    token: string;
}

export interface ILoginResponse {
    data: ITokenData;
    successful: boolean;
}



export type IUser = {
    firstName: string;
    lastName: string;
    emailAddress: string;
    roles: [
        string,
    ]
    id: string;
    sub: string;
    iat: number;
    exp: number;
}
