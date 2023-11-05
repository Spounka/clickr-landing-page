type FAQItemProps = {
    title: string;
    description: string;
    textColor: string;
};

export function FAQItem({ title, description, textColor }: FAQItemProps) {
    return (
        <div className={"flex flex-col gap-6 text-left flex-grow-0"}>
            <span className={`text-2xl font-bold ${textColor}`}>{title}</span>
            <p className={"text-slate-700 text-sm font-sans leading-tight"}>
                {description}
            </p>
        </div>
    );
}