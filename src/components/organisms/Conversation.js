import { ChatMolecule } from "../molecules/ChatMolecule";
import { InputZone } from "../molecules/InputZone";
import { Stack } from "@mui/material";

/**
 * DM画面の右側の会話部分
 */

export const Conversation = ({ userId, partnerId }) => {
  // ここで、会話内容を読み込む
  const GetConversation = (userId, partnerId) => {
    //とりあえず今は適当なメッセージを入れる。
    const messageList = [
      {
        isSelf: false,
        message: "トータルテンボ",
      },
      {
        isSelf: true,
        message: "ス",
      },
    ];
    return messageList;
  };
  return (
    <Stack
      direction={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
      minHeight={"80vh"}
      width={"100%"}
    >
      <ChatMolecule messageBoxList={GetConversation(userId, partnerId)} />
      <InputZone />
    </Stack>
  );
};
