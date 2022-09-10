import { TunTunNotify } from "./TunTunNotify"
import { MessageBox } from "../atoms/MessageBox"


/**
 * 右側のつんつん通知と、MessageBoxをまとめたコンポーネント
 */
export const ChatMolecule = ({ messageBoxList } ) => {
    return <div className="ChatMolecule">
        <div>
            <span style={{flexGrow: 1}}></span>
            <span><TunTunNotify /></span>
        </div>
        {
            messageBoxList.map((messageBox, index) => (
                <MessageBox isSelf={messageBox.isSelf} message={messageBox.message} />
        ))}
    </div>
}