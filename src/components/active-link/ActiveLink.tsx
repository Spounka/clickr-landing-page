export function ActiveLink({text}: { text: string }) {
    return (
        <a className={"font-sans font-bold text-lg"} href={"#"}>
            {text}
        </a>
    );
}