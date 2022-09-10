import {TunTunIcon} from "../atoms/TunTunIcon";
import styled from "styled-components";
import {UserCardModel} from "../../model/UserCardModel";
import {MyIcon} from "../atoms/MyIcon";

export const UserCard = ({ userCardModel }) => {
    switch (userCardModel) {
        case UserCardModel.MySelf:
            return <MySelf><MyIcon size={100}/></MySelf>
        case UserCardModel.Disabled:
            return <Disabled />
        case UserCardModel.TunTun:
            return <TunTun><TunTunIcon size={100}/>○○さんを<br />つんつんしました！</TunTun>
        default:
            return <Other><TunTunIcon size={100}/></Other>
    }
}

const Other = styled.div`
  /* ユーザーカードコンポーネント */
  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  width: 399px;
  height: 271px;
  left: 64px;
  top: 70px;

  background: #FFD18C;
  border: 2px solid #AF7A2A;
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

  position: absolute;
  width: 399px;
  height: 271px;
  left: 64px;
  top: 70px;

  background: #E88E81;
  border: 2px solid #E35743;
  border-radius: 18px;
`;

const Disabled = styled.div`
  /* ユーザーカードコンポーネント */
  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  width: 399px;
  height: 271px;
  left: 64px;
  top: 70px;

  background: #D0D0D0;
  border: 2px dotted #000000;
  border-radius: 18px;
`

const MySelf = styled.div`
  /* ユーザーカードコンポーネント */
  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  width: 399px;
  height: 271px;
  left: 64px;
  top: 70px;

  background: #81AAE8;
  border: 2px solid #202533;
  border-radius: 18px;
`