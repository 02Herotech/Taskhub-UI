import NextAuth from "next-auth/next";

declare module "next-auth" {
    interface Session {
        user: {
            accessToken: string;
            exp: number;
            iat: number;
            jti: string;
            message: string;
            refreshToken: string;
     
            user: {
                id: number;
                stripeId: string | null;
                firstName: string;
                lastName: string;
                emailAddress: string;
                password: string;
                phoneNumber: string;
                address: {
                    id: string | null; 
                    houseNumber: string | null;
                    streetName:string | null;
                    town: string | null;
                    postCode: string | null;
                    state: string | null;
                    country: string | null;
                }
                profileImage: string | null;
                enabled: boolean | null;
                accountState: string;
                deactivatedAt: string | null;
                registeredAt: string;
                roles: string[];
                appNotificationList: any[];
            }
    
        }
    }

}

