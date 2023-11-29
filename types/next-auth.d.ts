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
                address: string | null;
                profileImage: string | null;
                isEnabled: boolean | null;
                accountState: string;
                deactivatedAt: string | null;
                registeredAt: string;
                roles: string[];
                appNotificationList: any[];
            }
    
        }
    }

}

