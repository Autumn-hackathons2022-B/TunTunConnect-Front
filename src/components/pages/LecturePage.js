import { ChatMolecule } from "../molecules/ChatMolecule"
import { useState } from "react";

export const LecturePage = () => {
    const [mmessageBoxList, setMessageBoxList] = useState([{ isSelf: false, message: "シャンクス!" }, { isSelf: true, message: "腕が！" }]);


//    return <>LecturePageです</>
    return <div>
        <ChatMolecule messageBoxList={mmessageBoxList }/>
    </div>
}