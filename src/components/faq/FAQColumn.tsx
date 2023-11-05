import { ReactNode } from "react";

export function FAQColumn({ children }: { children: ReactNode }) {
    return (
        <div className={"flex flex-col justify-between flex-[49%] gap-12"}>
            {children}
        </div>
    );
}