export function BigFont({ text }: { text: string }) {
    return (
        <div
            className={
                "text-center font-sans text-lg text-gray-600 px-4 lg:px-96"
            }
        >
            {text}
        </div>
    );
}