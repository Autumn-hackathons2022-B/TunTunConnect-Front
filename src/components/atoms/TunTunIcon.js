import yubi from "../../assets/img/yubi.jpeg";
import Avatar from "react-avatar";
import styled from "styled-components";


export const TunTunIcon = ({ size }) => {

    const StyledAvatar = styled(Avatar)`
      border: 1px solid #000000;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      border-radius: 151px;
      margin-right: 10px;
    `;

    return <StyledAvatar
        size={size}
        name="つんつん"
        round
        color="#000"
        alt="つんつん"
        src={yubi}
    />
}

