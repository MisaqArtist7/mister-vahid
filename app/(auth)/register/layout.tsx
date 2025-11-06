import React from "react";

export default function RegisterLayout({children, } : Readonly<{ children: React.ReactNode }>){
    return(
        <>
            <main>
                {children}
            </main>
        </>
    )
}