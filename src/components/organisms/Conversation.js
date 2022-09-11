import { ChatMolecule } from "../molecules/ChatMolecule";
import { InputZone } from "../molecules/InputZone";
import { Stack } from "@mui/material";
import * as Data from "../../model/Data"
import { useEffect, useState } from "react";
import axios from "axios"
import SelectInput from "@mui/material/Select/SelectInput";

/**
 * DM画面の右側の会話部分
 */

export const Conversation = ({ userId, partnerId, submitHandleClick }) => {

    const url = "https://tuntunconnect-backend.herokuapp.com/"
    const delayTime = 1000;

    const [nowLooping, setNowLooping] = useState(true)
    const [conversationList, setConversationList] = useState(true)

    function sleep(time) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, time);
        });
    }

    const loopUpdate = async (delayTime) => {
        while (nowLooping) {
            await axios.get(url + "api/dm/messages?from_id=" + Data.MY_ID + "&partnerId=" + partnerId).then((response) => {
                let newConversationList = [];
                response.data.map((newMessage, index) => {
                    let oneMessage = {
                        isSelf: false,
                        message: "",
                    }
                    newConversationList = [...newConversationList, oneMessage];
                })
                setConversationList(newConversationList);
            });
            await sleep(delayTime);
        }
    }

    useEffect(() => {
        loopUpdate(this.delayTime);
    })
    // ここで、会話内容を読み込む
    //今使ってません
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
      <ChatMolecule messageBoxList={conversationList} />
      <InputZone submitHandleClick={submitHandleClick} />
    </Stack>
  );
};
