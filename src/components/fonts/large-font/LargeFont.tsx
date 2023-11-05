export function LargeFont({ text }: { text: string }) {
    return (
        <div
            className={
                "text-center font-serif font-extrabold text-5xl px-4 lg:px-96 align-middle"
            }
        >
            {text}
        </div>
    );
}
