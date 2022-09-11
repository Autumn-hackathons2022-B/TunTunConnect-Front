import {TunTunIcon} from "../atoms/TunTunIcon";
import styled from "styled-components";
import {UserCardModel} from "../../model/UserCardModel";
import {MyIcon} from "../atoms/MyIcon";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import * as Data from "../../model/Data";
import { Link } from "react-router-dom";
import {useCookies} from "react-cookie";


export const UserCard = ({userCardModel, user_id}) => {
    const [response, setResponse] = useState();
    const [userId, setUserId] = useState(user_id);
    const [toUserCookie, setToUserCookie, removeToUserCookie] = useCookies(["userId"]);

    const url = "https://tuntunconnect-backend.herokuapp.com/";

    const onUserCardClick = useCallback(() => {
        //tuntunを送信
        axios.post(url + "api/dm/messages?from_id=" + Data.MY_ID + "&to_id=" + userId + "&message=:tuntun:").then((response) => {
            setResponse(response.data);
        });
        setToUserCookie("userId", userId);
    },[])



    switch (userCardModel) {
        case UserCardModel.MySelf:
            return (
                <MySelf>
                    <MyIcon size={100}/>
                </MySelf>
            );
        case UserCardModel.Disabled:
            return <Disabled/>;
        case UserCardModel.TunTun:
            return (
                <TunTun>
                    <TunTunIcon size={100}/>
                    ○○さんを
                    <br/>
                    つんつんしました！
                </TunTun>
            );
        default:
            return (
                <Link to="/dm">
                    <Other onClick={onUserCardClick}>
                        <TunTunIcon size={100}/>
                    </Other>
                </Link>
            );
    }
};



const Other = styled.div`
  /* ユーザーカードコンポーネント */
  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  justify-content: center;
  align-items: center;

  width: 399px;
  height: 271px;

  background: #ffd18c;
  border: 2px solid #af7a2a;
  border-radius: 18px;
`;

const TunTun = styled.div`
  /* ユーザーカードコンポーネント */
  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.8em;
  color: #fff;

  width: 399px;
  height: 271px;

  background: #e88e81;
  border: 2px solid #e35743;
  border-radius: 18px;
`;

const Disabled = styled.div`
  /* ユーザーカードコンポーネント */
  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  justify-content: center;
  align-items: center;

  width: 399px;
  height: 271px;

  background: #d0d0d0;
  border: 2px dotted #000000;
  border-radius: 18px;
`;

const MySelf = styled.div`
  /* ユーザーカードコンポーネント */
  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  justify-content: center;
  align-items: center;

  width: 399px;
  height: 271px;

  background: #81aae8;
  border: 2px solid #202533;
  border-radius: 18px;
`;
