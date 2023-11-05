import { FooterColumn } from "./FooterColumn";
import { IconFooterColumn } from "./IconFooterColumn";
import { Separator } from "../separator/Separator";

export function FooterSection() {
    return (
        <footer className={"flex flex-col gap-12"}>
            <div
                className={
                    "flex w-full gap-10 lg:px-80 xs:flex-col lg:flex-row"
                }
            >
                <FooterColumn
                    title={"Why Us"}
                    links={["Channel", "Engagement", "Scale", "Watch Demo"]}
                />
                <FooterColumn
                    title={"Product"}
                    links={[
                        "Features",
                        "Integration",
                        "Entreprise",
                        "Solutions",
                    ]}
                />
                <FooterColumn
                    title={"Resources"}
                    links={["Partners", "Developers", "Apps", "Blogs"]}
                />
                <FooterColumn
                    title={"Company"}
                    links={[
                        "About Us",
                        "Leadership",
                        "Investor Relations",
                        "News",
                    ]}
                />
                <FooterColumn
                    grow
                    title={"Pricing"}
                    links={["Plans", "Paid vs. Free"]}
                />
                <IconFooterColumn />
            </div>
            <Separator />
        </footer>
    );
}
