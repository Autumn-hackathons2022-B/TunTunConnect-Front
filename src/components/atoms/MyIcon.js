import icon from "../../assets/img/user.png";
import Avatar from "react-avatar";


export const MyIcon = ({ size }) => {

    return <Avatar
        size={size}
        name="ユーザー"
        round
        color="#000"
        alt="ユーザー"
        src={icon}
    />
}