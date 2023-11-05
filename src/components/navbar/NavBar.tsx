import Logo from "../../assets/Landing-Page stuff/Logo.svg?react";
import ActiveLink from "../active-link";
import InactiveLink from "../inactive-link";

export function NavBar() {
    return (
        <nav className={"flex px-4 lg:px-80 justify-between items-center"}>
            <Logo className={"max-h-6"} />
            <div className={"flex gap-14 items-center"}>
                <ActiveLink text={"Home"} />
                <InactiveLink text={"How it works"} />
                <InactiveLink text={"Reviews"} />
                <InactiveLink text={"Works"} />
                <InactiveLink text={"FAQs"} />
                <button
                    className={
                        "px-3.5 py-2 text-white font-sans rounded-[0.25rem] bg-blue-700"
                    }
                >
                    Get Started
                </button>
            </div>
        </nav>
    );
}
