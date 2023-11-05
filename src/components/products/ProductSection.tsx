import image1 from "../../assets/Landing-Page stuff/first-section-products/Image 1.png";
import image2 from "../../assets/Landing-Page stuff/first-section-products/Image 2.png";
import image3 from "../../assets/Landing-Page stuff/first-section-products/Image 3.png";
import image4 from "../../assets/Landing-Page stuff/first-section-products/Image 4.png";
import image5 from "../../assets/Landing-Page stuff/first-section-products/Image 5.png";
import { MediumFont } from "../fonts";
import Netflix from "../../assets/Landing-Page stuff/Netflix.svg?react";
import Facebook from "../../assets/Landing-Page stuff/facebook-text.svg?react";
import Freelancer from "../../assets/Landing-Page stuff/Freelancer.svg?react";
import MailBuster from "../../assets/Landing-Page stuff/Mailbluster.svg?react";
import ThemeWagon from "../../assets/Landing-Page stuff/ThemeWagon.svg?react";

export function ProductSection() {
    return (
        <main className={"flex flex-col gap-12"}>
            <div className={"flex gap-2 px-2"}>
                <article className={"flex-1"}>
                    <img
                        className={"w-[100%] h-[100%]"}
                        alt={"bottles of product on table"}
                        src={image1}
                    />
                </article>
                <article className={"flex-1"}>
                    <img
                        className={"w-[100%] h-[100%]"}
                        alt={"bottles of product on table"}
                        src={image2}
                    />
                </article>
                <article className={"flex-1"}>
                    <img
                        className={"w-[100%] h-[100%]"}
                        alt={"bottles of product on table"}
                        src={image3}
                    />
                </article>
                <article className={"flex-1"}>
                    <img
                        className={"w-[100%] h-[100%]"}
                        alt={"bottles of product on table"}
                        src={image4}
                    />
                </article>
                <article className={"flex-1"}>
                    <img
                        className={"w-[100%] h-[100%]"}
                        alt={"bottles of product on table"}
                        src={image5}
                    />
                </article>
            </div>
            <div>
                <MediumFont text={"Commercial Product photography agency"} />
                <MediumFont text={"Praised by over 5,000 brands."} />
            </div>
            <div className={"flex justify-center items-center gap-14 px-80"}>
                <Netflix />
                <Facebook />
                <Freelancer />
                <MailBuster />
                <ThemeWagon />
            </div>
        </main>
    );
}
