export function InactiveLink({ text }: { text: string }) {
    return (
        <a className={"font-sans font-bold text-slate-500 text-md"} href={"#"}>
            {text}
        </a>
    );
}
