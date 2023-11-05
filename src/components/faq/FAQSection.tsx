import { FAQColumn } from "./FAQColumn";
import { FAQItem } from "./FAQItem";

export function FAQSection() {
    return (
        <section>
            <div className={"lg:px-80 text-center flex flex-col gap-12"}>
                <span className="text-5xl font-bold font-serif">FAQ</span>
                <div className={"flex w-full justify-center gap-12"}>
                    <FAQColumn>
                        <FAQItem
                            textColor={"text-primary"}
                            title={"What's the roundabout time?"}
                            description={
                                "Generally the turnabout time depends on the scheme of pricing you are selecting. The tentative turnaround time for orders less than 100 images is up to 12 business days from the time we receive your products and payment. Reach our support to get better insight."
                            }
                        />
                        <FAQItem
                            title={"What are the delivery options?"}
                            description={
                                "Deliver your products by using the labeling with the help of any courier service or just drop it at our door step at the Biancca Studio, San Francisco."
                            }
                            textColor={"text-success"}
                        />
                        <FAQItem
                            title={"Will my products be returned?"}
                            description={
                                "That’s totally up to you. If you want the product back, then you have to include that option in registration time. Else, it will be stored in our storage and you can pick that whenever you wish."
                            }
                            textColor={"text-warning"}
                        />
                    </FAQColumn>
                    <div className={"border-r border-r-gray-200"}></div>
                    <FAQColumn>
                        <FAQItem
                            title={"Can I provide references?"}
                            description={
                                "Absolutely! If clients provide any sort of refernces, that is highly appreciated by our creative team."
                            }
                            textColor={"text-warning"}
                        />
                        <FAQItem
                            title={"Can I be present during the shoot?"}
                            description={
                                "Sorry, we currently do not support that under any pricing scheme. Usually any other person than the creative team is not allowed to attend the phototshoot. Otherwise, it has effects on others and time & effort get wasted as we conduct the process on a fixed plan. We hope that people would understand and respect our creative process."
                            }
                            textColor={"text-primary"}
                        />
                        <FAQItem
                            title={"Do you support revisions?"}
                            description={
                                "Yes, based on the pricing plan, you will have several revision options. If you want to bring more than 90% change, then you will have to pay further."
                            }
                            textColor={"text-success"}
                        />
                    </FAQColumn>
                </div>
            </div>
        </section>
    );
}