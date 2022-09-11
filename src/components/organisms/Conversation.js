import { ChatMolecule } from "../molecules/ChatMolecule"
import { InputZone } from "../molecules/InputZone"

/**
 * DM画面の右側の会話部分
 */

export const Conversation = (userId, partnerId) => {

    // ここで、会話内容を読み込む
    const GetConversation = (userId, partnerId) => {
        //とりあえず今は適当なメッセージを入れる。
        const messageList = [
            {
                isSelf: false,
                message: "トータルテンボ"
            },
            {
                isSelf: true,
                message: "ス"
            }

        ]
        return messageList;
    }
    return <div>
        <ChatMolecule messageBoxList={GetConversation(userId, partnerId)} />
        <InputZone />
    </div>
}