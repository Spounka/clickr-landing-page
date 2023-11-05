type FooterColumnProps = {
    title: string;
    links: string[];
    grow?: boolean;
};

export function FooterColumn({ title, links, grow = false }: FooterColumnProps) {
    return (
        <div className={`flex flex-col gap-6 ${grow ? "flex-grow" : ""}`}>
            <span className={"text-md font-bold font-serif"}>{title}</span>
            <div className={"list-none space-y-2"}>
                {links.map((link) => {
                    return (
                        <div
                            key={link}
                            className={
                                "font-sans font-normal text-xs text-[#616161]"
                            }
                        >
                            {link}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}