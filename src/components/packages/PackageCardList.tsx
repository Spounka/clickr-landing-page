import Checkmark from "../../assets/Landing-Page stuff/checkmark.svg?react";
import React from "react";

function PackageListElement({ title }: { title: string }) {
    return (
        <div
            aria-label={"content element"}
            className={"flex gap-2 items-center align-middle"}
        >
            <Checkmark />
            <h5 className={"font-lg font-sans align-middle"}>{title}</h5>
        </div>
    );
}

export function PackageCardList({ offers }: { offers: string[] }) {
    return (
        <div
            aria-label={"card content"}
            className={"flex-grow list-none space-y-3"}
        >
            {offers.map((title) => {
                return <PackageListElement key={title} title={title} />;
            })}
        </div>
    );
}
