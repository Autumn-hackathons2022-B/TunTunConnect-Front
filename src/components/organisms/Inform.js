/**
 * DM画面の左側のリスト部分
 */
import { Divider } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { InformItem } from "../molecules/InformItem";
import { useEffect, useState } from "react";
import axios from "axios";
import * as Data from "../../model/Data";

export const Inform = (props) => {
  const url = "https://tuntunconnect-backend.herokuapp.com/";
  const [informList, setInformList] = useState([]);
  useEffect(() => {
    axios
      .get(url + "api/dm/partners?user_id=" + Data.MY_ID)
      .then((response) => {
        setInformList(response.data);
      });
  }, []);

  return (
    <List>
      {informList.map((messageInfo, index) => {
        return (
          //   ここにOnClick?
          <ListItem key={index} divider>
            <InformItem
              message={messageInfo.message}
              TargetNickname={messageInfo.partner_nickname}
              isResponseFromTarget={messageInfo.from_id !== Data.MY_ID}
              isMidoku={!messageInfo.is_read}
            />
            <Divider />
          </ListItem>
        );
      })}
    </List>
  );
};
