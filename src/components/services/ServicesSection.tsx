import { ServiceCard } from "./ServiceCard";
import BlueHighHeel from "../../assets/Landing-Page stuff/BlueHeelImage.png";
import GreenHighHeel from "../../assets/Landing-Page stuff/GreenHeelImage.png";

export function ServicesSection() {
    return (
        <section className={"flex flex-col gap-12"}>
            <span className={"text-5xl font-bold font-serif text-center"}>
                Our Services
            </span>
            <div className={"flex flex-col items-center gap-4 px-16 lg:px-80"}>
                <ServiceCard
                    img={BlueHighHeel}
                    title={"Photo Preview"}
                    description={
                        "Invest on your commercial product photography on a visual story created by our creative team. Each click at the most reasonable price going to pay you more."
                    }
                    textColor={"text-primary"}
                    bgColor={"bg-primary-light"}
                    fillColor={"fill-primary"}
                />
                <ServiceCard
                    reverse
                    img={GreenHighHeel}
                    title={"Product Revision"}
                    description={
                        "It's not just another edge correcting services. A team trusted by more than 5,000 brands will work at your product with care and creativity."
                    }
                    textColor={"text-success"}
                    bgColor={"bg-success-light"}
                    fillColor={"fill-success"}
                />
            </div>
        </section>
    );
}