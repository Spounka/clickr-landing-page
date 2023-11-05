import React from "react";

export function PackageCardHeader({
    title,
    price,
    color,
}: {
    title: string;
    price: string;
    color: string;
}) {
    return (
        <div aria-label={"card header"}>
            <h5 className={"text-xl font-serif font-bold text-[#616161] mb-4"}>
                {title}
            </h5>
            <div>
                <h2 className={`text-6xl font-bold ${color}`}>{price}</h2>
                <h5 className={`text-lg font-bold ${color}`}>/ per image</h5>
            </div>
        </div>
    );
}
