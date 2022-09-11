import { TunTunNotify } from "../molecules/TunTunNotify";
import { UserCard } from "../molecules/UserCard";
import { UserCardModel } from "../../model/UserCardModel";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import { LeaveButton } from "../atoms/LeaveButton";
import { MailButton } from "../atoms/MailButton";
import schoolImage from "../../assets/img/school.jpg";
import {useEffect, useState} from "react";
import axios from "axios";
import * as Data from "../../model/Data";

export const LecturePage = () => {
    const [classmates, setClassmates] = useState(null);

    const url = "https://tuntunconnect-backend.herokuapp.com/"

    useEffect(() => {
        axios.get(url + "api/lecture/classmates?user_id=" + Data.MY_ID).then((response) => {
           setClassmates(response.data);
        });
    });

    return (
        <Wrapper>
            <StyledLeaveButton>
                <LeaveButton />
            </StyledLeaveButton>

            <StyleCards>
                <Grid container spacing={2}>
                    {classmates.map((Card, index) => {
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