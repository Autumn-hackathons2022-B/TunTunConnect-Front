import { TunTunIcon } from "../atoms/TunTunIcon";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Stack from "@mui/material/Stack";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { IconButton } from "@mui/material";

const createDisplayMessage = (props) => {
  //   Consider: メッセージやり取りの場合（not つんつん）どのようなテキスト表記にするか
  //   Consider: そもそも返信済みorつんつん済みのものはinformitemの対象外にするか
  if (props.message === ":tuntun:") {
    if (props.isResponseFromTarget) {
      return `${props.TargetNickname}さんから「つんつん」されました！`;
    } else {
      return `${props.TargetNickname}さんを「つんつん」しました！`;
    }
  } else {
    if (props.isResponseFromTarget) {
      return `${props.TargetNickname}さんからメッセージが届きました！`;
    } else {
      return `${props.TargetNickname}さんへのメッセージを送りました！`;
    }
  }
};

export const InformItem = (props) => {
  const displayMessage = createDisplayMessage(props);
  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <StyleStackLeft direction="row" alignItems="center">
          <div>
            {/* Consider: 最終履歴がつんつんなのかメッセージなのかでアイコン変える？ */}
            <TunTunIcon size={30} />
          </div>

          <Typography variant="p">{displayMessage}</Typography>
        </StyleStackLeft>
        <Stack direction="row" justifyContent="flex-end" alignItems="center">
          {props.isMidoku && <NotifyCircle />}

          {/* Todo: ボタンを押した時にConversationに対象の会話を表示するような処理を追加 */}
          <IconButton>
            <ArrowForwardIosIcon />
          </IconButton>
        </Stack>
      </Stack>
    </>
  );
};

const NotifyCircle = styled.div`
  height: 1em;
  width: 1em;
  background-color: #ff0000;
  border-radius: 50%;
`;
const StyleStackLeft = styled(Stack)`
  margin-right: 2em;
`;
