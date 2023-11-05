import React from "react";

type Props = {
    primaryColor: React.ComponentProps<"div">["className"];
    bgColor: React.ComponentProps<"div">["className"];
    mainTitle: string;
    subTitle: string;
    description: string;
};

export function StepComponent({
    primaryColor = "text-primary",
    bgColor = "bg-primary-light",
    mainTitle,
    subTitle,
    description,
}: Props) {
    return (
        <div className={"flex flex-col w-full flex-[30%] gap-4 items-center"}>
            <div
                className={`${bgColor} rounded-full w-20 h-20 aspect-square
                            flex flex-col justify-center items-center`}
            >
                <h1
                    className={`text-5xl font-serif font-bold align-middle ${primaryColor}`}
                >
                    {mainTitle}
                </h1>
            </div>
            <h3 className={`text-md font-bold font-serif ${primaryColor}`}>
                {subTitle}
            </h3>
            <h3
                className={
                    "text-sm font-normal leading-tight font-sans text-[#616161] align-middle text-center"
                }
            >
                {description}
            </h3>
        </div>
    );
}
