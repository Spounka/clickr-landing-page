import Phone from "../../assets/Landing-Page stuff/phone-alt.svg?react";
import Mail from "../../assets/Landing-Page stuff/envelope.svg?react";
import LocationSvg from "../../assets/Landing-Page stuff/map-marker-alt.svg?react";
import { IconLabel } from "./IconLabel";

export function IconFooterColumn() {
    return (
        <div className="flex flex-col gap-6">
            <span className={"text-md font-bold font-serif"}>Contact</span>
            <div className={"list-none space-y-4 text-end"}>
                <IconLabel label={"+214556905345"} icon={<Phone />} />
                <IconLabel label={"someone@gmail.com"} icon={<Mail />} />
                <IconLabel
                    label={"567, Kansas, San Francisco, USA"}
                    icon={<LocationSvg />}
                />
            </div>
        </div>
    );
}
