import Arrow from "../../assets/Landing-Page stuff/right-arrow-small.svg?react";

type ServiceProps = {
    title: string;
    description: string;
    img: any;
    reverse?: boolean;
    bgColor: string;
    textColor: string;
    fillColor: string;
};

export function ServiceCard({
    title,
    description,
    img,
    reverse = false,
    bgColor,
    textColor,
    fillColor,
}: ServiceProps) {
    return (
        <div
            className={`flex flex-col md:flex-row gap-4 lg:gap-24 justify-between
                        w-full rounded-2xl px-4 lg:px-16 py-[0.625rem] items-center
                        ${bgColor}`}
        >
            {!reverse && <img src={img} />}
            <div className={"flex flex-col justify-start w-full gap-8 h-full"}>
                <span className={`text-2xl ${textColor} font-bold`}>
                    {title}
                </span>
                <p className={"font-sans text-md"}>{description}</p>
                <div className={"flex justify-start justify-self-end gap-4"}>
                    <a
                        href={"#"}
                        className={`${textColor} items-center font-lg font-bold flex gap-4`}
                    >
                        Explore service
                        <Arrow className={`${fillColor}`} />
                    </a>
                    <a
                        href={"#"}
                        className={`${textColor} items-center font-lg font-bold flex gap-4`}
                    >
                        Pricing
                        <Arrow className={`${fillColor}`} />
                    </a>
                </div>
            </div>
            {reverse && <img src={img} />}
        </div>
    );
}
