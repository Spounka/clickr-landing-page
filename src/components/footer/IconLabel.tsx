import { ReactNode } from "react";

type IconLabelProps = {
    label: string;
    icon: ReactNode;
};

export function IconLabel({ label, icon }: IconLabelProps) {
    return (
        <div className="flex gap-4 items-center text-xs text-[#616161] font-light">
            {icon}
            {label}
        </div>
    );
}