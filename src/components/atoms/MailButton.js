import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import styled from "styled-components";

export const MailButton = (props) => {
  return (
    <MailBox>
      <Icon>
        <AlignCenter>
          <MailOutlinedIcon></MailOutlinedIcon>
        </AlignCenter>
      </Icon>
      {props.isMidokuExist && <RedCircle></RedCircle>}
    </MailBox>
  );
};

const AlignCenter = styled.div`
  vertical-align: middle;
  padding-left: 1px;
`;
const Icon = styled.a`
  display: inline-block;
  text-decoration: none;
  padding: 0.1em 0.2em;

  border: solid 1px #000;
  background-color: #ffffff;
  border-radius: 50%;
  transition: 0.4s;
  cursor: pointer;
`;
const MailBox = styled.div`
  position: relative;
`;
const RedCircle = styled.div`
  position: absolute;
  top: -0.25em;
  left: 1.4em;
  width: 1em;
  height: 1em;
  background-color: #ff0000;
  border-radius: 50%;
`;
