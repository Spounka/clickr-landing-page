import Background from "../../assets/Landing-Page stuff/Background.svg?react";
import Checkmark from "../../assets/Landing-Page stuff/check.svg?react";

export function CTASection() {
    return (
        <section>
            <div className={"px-4 md:px-16 lg:px-80"}>
                <div
                    className={
                        "relative overflow-clip -z-10 rounded-2xl p-[4.5rem] bg-warning-light flex flex-col gap-16 justify-center items-center"
                    }
                >
                    <Background
                        className={
                            "absolute w-full h-full left-0 right-0 top-0 bottom-0"
                        }
                    />
                    <span className={"text-5xl font-black text-center"}>
                        Get your commercial product images today that matter
                    </span>
                    <button
                        className={`justify-self-end font-bold text-lg
                                        flex gap-4 items-center
                                        text-white bg-warning rounded-full px-5 py-2`}
                    >
                        Get Started Now
                        <Checkmark />
                    </button>
                </div>
            </div>
        </section>
    );
}
