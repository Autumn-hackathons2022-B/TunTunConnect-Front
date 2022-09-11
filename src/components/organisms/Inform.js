/**
 * DM画面の左側のリスト部分
 */
import { Divider } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { InformItem } from "../molecules/InformItem";

export const Inform = (props) => {
  const MessageChecks = [
    {
      from_id: "aaa",
      to_id: "bbb",
      message: ":tuntun:",
      targetNickname: "ぽんた",
      isMidoku: true,
    },
    {
      from_id: "aaa",
      to_id: "bbb",
      message: ":tuntun:",
      targetNickname: "わんこ",
      isMidoku: false,
    },
    {
      from_id: "bbb",
      to_id: "aaa",
      message: "今日の授業長くね",
      targetNickname: "ぽんた",
      isMidoku: false,
    },
  ];
  return (
    <List>
      {MessageChecks.map((messageInfo, index) => {
        return (
          //   ここにOnClick?
          <ListItem key={index} divider>
            <InformItem
              message={messageInfo.message}
              TargetNickname={messageInfo.targetNickname}
              isResponseFromTarget={messageInfo.from_id !== props.my_id}
              isMidoku={messageInfo.isMidoku}
            />
            <Divider />
          </ListItem>
        );
      })}
    </List>
  );
};
