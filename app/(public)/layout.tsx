import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "مستر وحید | رنت ویلا و ماشین",
  description: ""
}

export default function PublicLayout ({ children, } : Readonly<{ children: React.ReactNode }>) {
    return (
        <main>
            {children}
        </main>
    )
}