import React from "react";
import { LargeFont, MediumFont } from "../fonts";
import { StepComponent } from "./StepComponent";

export function StepsSection() {
    return (
        <section className={"flex flex-col gap-8"}>
            <hgroup className={"flex flex-col gap-2"}>
                <MediumFont text={"How it happens"} />
                <LargeFont text={"You deliver-We Click"} />
            </hgroup>
            <div
                className={`flex justify-center items-start
                    gap-14 px-80`}
            >
                <StepComponent
                    primaryColor={"text-primary"}
                    bgColor={"bg-primary-light"}
                    mainTitle={"1"}
                    subTitle={"Inform us about your product"}
                    description={
                        "Introduce your product, select through the pricing plan and let us know if you have any references in mind"
                    }
                />
                <StepComponent
                    primaryColor={"text-warning"}
                    bgColor={"bg-warning-light"}
                    mainTitle={"2"}
                    subTitle={"Deliver your products"}
                    description={
                        "Deliver the sujects at our doorstep, we will click perfect shots in no time and make it online ready"
                    }
                />
                <StepComponent
                    primaryColor={"text-success"}
                    bgColor={"bg-success-light"}
                    mainTitle={"3"}
                    subTitle={"Reviewing the shots"}
                    description={
                        "After the photoshoot, you will get to review the shots and let us know if there any modification needed."
                    }
                />
            </div>
        </section>
    );
}
