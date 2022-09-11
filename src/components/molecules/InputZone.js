import { SubmitText } from "../atoms/SubmitText";
import { SubmitButton } from "../atoms/SubmitButton";
import { useState } from "react";

export const InputZone = () => {
    const [nowText, setNowtext] = useState("")
    
    return <div>
        <SubmitText />
        <SubmitButton />
    </div>
}