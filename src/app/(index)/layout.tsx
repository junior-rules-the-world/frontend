import {Header} from "@/widgets/Header";
import React from 'react';

export const Layout = ({children}) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};