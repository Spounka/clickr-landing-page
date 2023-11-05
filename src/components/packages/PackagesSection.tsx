import { PackageCard } from "./PackageCard";
import React from "react";

export function PackagesSection() {
    return (
        <section className={"flex flex-col gap-8 justify-center px-80"}>
            <h2 className={"text-5xl font-serif font-bold text-center"}>
                Our Packages
            </h2>
            <div
                aria-label={"offers list"}
                className={"flex justify-center gap-4"}
            >
                <PackageCard
                    title={"Basic"}
                    price={"$9"}
                    bgColor={"bg-primary-light"}
                    textColor={"text-primary"}
                    borderColor={"border-primary"}
                    buttonBg={"bg-primary"}
                    circlesColor={"bg-[#E6EFFF]"}
                    filled={false}
                    offers={[
                        "High quality images",
                        "Single Revision",
                        "10 Products per order",
                        "Not providing softcopy",
                        "Free return shipment",
                    ]}
                />
                <PackageCard
                    title={"Average"}
                    price={"$19"}
                    bgColor={"bg-warning-light"}
                    textColor={"text-warning"}
                    borderColor={""}
                    buttonBg={"bg-warning"}
                    filled={true}
                    offers={[
                        "High quality images",
                        "3 Revisions",
                        "25 Products per order",
                        "Provides softcopy",
                        "Free return shipment",
                    ]}
                />
                <PackageCard
                    title={"Professional"}
                    price={"$29"}
                    bgColor={"bg-success-light"}
                    textColor={"text-success"}
                    borderColor={"border-success"}
                    buttonBg={""}
                    filled={false}
                    offers={[
                        "High quality images",
                        "5 Revisions",
                        "50 Products per order",
                        "Provides softcopy & PSD",
                        "Free return shipment",
                    ]}
                />
            </div>
        </section>
    );
}