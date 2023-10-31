import "@/styles/globals.css";
import Layout from "../../components/layout/Layout";
import type {AppProps} from "next/app";
import {Poppins} from "next/font/google";
import {store} from "@/redux/store";
import {Provider} from "react-redux";
import {SessionProvider} from "next-auth/react";

const poppins = Poppins({
    variable: "--Poppins",
    subsets: ["latin"],
    display: "swap",
    weight: "400",
});

export default function App({
                                Component,
                                pageProps: {session, ...pageProps},
                            }: AppProps) {
    return (
        
        <SessionProvider session={session}>
            <Provider store={store}>
                <Layout>
                        <Component {...pageProps} />
                </Layout>
            </Provider>
        </SessionProvider>

        // <Layout>
        //     <Component {...pageProps} />
        // </Layout>

    );
}
