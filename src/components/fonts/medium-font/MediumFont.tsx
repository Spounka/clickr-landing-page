export function MediumFont({ text }: { text: string }) {
    return (
        <div
            className={
                "text-center font-serif text-[#9E9E9E] font-extrabold text-sm px-4 lg:px-96"
            }
        >
            {text}
        </div>
    );
}
