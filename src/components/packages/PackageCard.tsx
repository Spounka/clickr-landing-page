import { PackageCardHeader } from "./PackageCardHeader";
import { PackageCardList } from "./PackageCardList";
import React from "react";

type Package = {
    title: string;
    price: string;
    offers: string[];
    bgColor: string;
    textColor: string;
    borderColor: string;
    buttonBg: string;
    circlesColor?: string;
    filled: boolean;
};

export function PackageCard({
    title,
    price,
    offers,
    bgColor,
    textColor,
    borderColor,
    buttonBg,
    circlesColor,
    filled,
}: Package) {
    return (
        <div
            className={`rounded-md ${bgColor} p-12 w-full relative overflow-clip`}
            aria-label={"offer card"}
        >
            <div
                className={`absolute top-0 left-full -translate-x-1/2 -translate-y-1/2
                            z-10 w-2/3 aspect-square rounded-full ${circlesColor} opacity-70
                            bg-blend-multiply`}
            ></div>
            <div
                className={`absolute top-32 left-full -translate-x-1/2 -translate-y-1/2
                            z-0 w-2/6 aspect-square rounded-full ${circlesColor} opacity-70
                            bg-blend-multiply`}
            ></div>
            <div
                className={"flex h-full flex-grow flex-col gap-12"}
                aria-label={"card container"}
            >
                <PackageCardHeader
                    color={textColor}
                    title={title}
                    price={price}
                />
                <PackageCardList offers={offers} />
                <button
                    className={`w-full justify-self-end font-bold text-lg ${
                        filled
                            ? `text-white ${buttonBg}`
                            : `border ${textColor} ${borderColor}`
                    } rounded-full self-stretch px-3 py-2`}
                >
                    Choose plan
                </button>
            </div>
        </div>
    );
}
