import { TunTunNotify } from "../molecules/TunTunNotify";
import { UserCard } from "../molecules/UserCard";
import { UserCardModel } from "../../model/UserCardModel";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import { LeaveButton } from "../atoms/LeaveButton";
import { MailButton } from "../atoms/MailButton";
import schoolImage from "../../assets/img/school.jpg";

export const LecturePage = () => {
    const CardTypes = [
        UserCardModel.TunTun,
        UserCardModel.Other,
        UserCardModel.Other,
        UserCardModel.Other,
        UserCardModel.MySelf,
        UserCardModel.TunTun,
        UserCardModel.Disabled,
        UserCardModel.Disabled,
        UserCardModel.Other,
    ];
    return (
        <Wrapper>
            <StyledLeaveButton>
                <LeaveButton />
            </StyledLeaveButton>

            <StyleCards>
                <Grid container spacing={2}>
                    {CardTypes.map((Card, index) => {
                        return (
                            <Grid item xs={4} key={index}>
                                <UserCard userCardModel={Card} />
                            </Grid>
                        );
                    })}
                </Grid>
            </StyleCards>
            <StyledMailButton>
                <MailButton isMidokuExist={true} />
            </StyledMailButton>
        </Wrapper>
    );
};

const StyleCards = styled.div`
  /* ユーザーカードコンポーネント */
  margin: 3em;
`;

const StyledLeaveButton = styled.div`
  position: fixed;
  top: 0;
  right: 0;
`;
const StyledMailButton = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
`;
const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${schoolImage});
  background-size: cover;
  min-height: 100vh;
  margin: 0;
  padding: 0;
`;