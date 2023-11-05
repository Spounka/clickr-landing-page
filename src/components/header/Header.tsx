import { BigFont, LargeFont } from "../fonts";
import PhotoImage from "../../assets/Landing-Page stuff/camera.svg?react";

export function Header() {
    return (
        <header className={"flex flex-col items-center gap-6"}>
            <div>
                <LargeFont text={"San Francisco Based"} />
                <LargeFont text={"Product Photography Services"} />
            </div>
            <BigFont
                text={
                    "Get high-quality aesthetic photographs of your valuable products within few days"
                }
            />

            <button
                className={
                    "bg-warning rounded-full px-[1.5rem] py-3 text-white font-bold flex items-center gap-1.5 font-serif"
                }
            >
                <PhotoImage className={"p-0 self-center place-self-center"} />
                Book a photoshoot
            </button>
        </header>
    );
}
