import Quote from "../../assets/Landing-Page stuff/quotes.svg?react";
import WomanImage from "../../assets/Landing-Page stuff/woman.png";
import React from "react";

export function TestimonialsSection() {
    return (
        <section>
            <div className={"grid grid-cols-2 gap-[7rem] px-80"}>
                <div className={"flex flex-col justify-start gap-8"}>
                    <Quote />
                    <h3
                        className={
                            "text-2xl text-[#424242] font-bold font-sans w-full"
                        }
                    >
                        When it comes to both <br />
                        reliability and quality, &nbsp;
                        <span className={"inline text-primary"}>ClickR</span> is
                        undoubtly one of best services out there. Team was fast
                        and responsible. 5 stars for them!
                    </h3>
                    <hgroup>
                        <h5
                            className={
                                "text-[#757575] font-serif text-lg font-bold"
                            }
                        >
                            Andrinna Malin
                        </h5>
                        <h6 className={"text-[#757575] font-serif text-lg"}>
                            Designer, co-Founder at Nirvana Tech
                        </h6>
                    </hgroup>
                </div>
                <div className={"relative"}>
                    <div
                        className={
                            "w-full h-full absolute -top-10 -right-10 -z-10"
                        }
                        style={{
                            borderRadius: "2rem 4.5rem 2rem 2rem",
                            background:
                                "linear-gradient(135deg, #FFF8F4 0%, #FFE8DB 100%)",
                        }}
                    ></div>
                    <img
                        loading={"lazy"}
                        alt={"woman giving testimonials"}
                        src={WomanImage}
                    />
                </div>
            </div>
        </section>
    );
}
