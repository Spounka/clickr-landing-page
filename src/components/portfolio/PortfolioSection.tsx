import Image1 from "../../assets/Landing-Page stuff/second-section-products/1-1.png";
import Image2 from "../../assets/Landing-Page stuff/second-section-products/1.png";
import Image3 from "../../assets/Landing-Page stuff/second-section-products/2-1.png";
import Image4 from "../../assets/Landing-Page stuff/second-section-products/2.png";
import Image5 from "../../assets/Landing-Page stuff/second-section-products/3-1.png";
import Image6 from "../../assets/Landing-Page stuff/second-section-products/3.png";
import ArrowRight from "../../assets/Landing-Page stuff/right-arrow-small.svg?react";

export function PortfolioSection() {
    return (
        <section
            className={"flex flex-col gap-12 justify-center items-center px-80"}
        >
            <h2 className={"text-5xl font-serif font-bold text-center"}>
                Over 1,000,000 Photos Shot
            </h2>
            <div className={"flex flex-wrap gap-4 justify-center w-full"}>
                <img
                    loading={"lazy"}
                    className={"flex-auto max-w-[32%]"}
                    src={Image1}
                />
                <img
                    loading={"lazy"}
                    className={"flex-auto max-w-[32%]"}
                    src={Image2}
                />
                <img
                    loading={"lazy"}
                    className={"flex-auto max-w-[32%]"}
                    src={Image3}
                />
                <img
                    loading={"lazy"}
                    className={"flex-auto max-w-[32%]"}
                    src={Image4}
                />
                <img
                    loading={"lazy"}
                    className={"flex-auto max-w-[32%]"}
                    src={Image5}
                />
                <img
                    loading={"lazy"}
                    className={"flex-auto max-w-[32%]"}
                    src={Image6}
                />
            </div>
            <button
                className={`flex items-center gap-4 font-bold text-lg border text-warning border-warning
                                rounded-full px-16 py-2`}
            >
                View Portfolio
                <ArrowRight fill={"#FF6A00"} />
            </button>
        </section>
    );
}
