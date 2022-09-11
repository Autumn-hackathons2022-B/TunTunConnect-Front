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
    const [classmates, setClassmates] = useState([]);

    const url = "https://tuntunconnect-backend.herokuapp.com/"

    useEffect(() => {
        axios.get(url + "api/lecture/classmates?user_id=" + Data.MY_ID).then((response) => {
           setClassmates([
               {
                   userCardModel: UserCardModel.Other,
                   userId: response.data[0].user_id
               },
               {
                   userCardModel: UserCardModel.Other,
                   userId: response.data[1].user_id
               },
               {
                   userCardModel: UserCardModel.Other,
                   userId: response.data[2].user_id
               },
               {
                   userCardModel: UserCardModel.Other,
                   userId: response.data[3].user_id
               },
               {
                   userCardModel: UserCardModel.MySelf,
                   userId: Data.MY_ID
               },
               {
                   userCardModel: UserCardModel.Other,
                   userId: response.data[4].user_id
               },
               {
                   userCardModel: UserCardModel.Other,
                   userId: response.data[5].user_id
               },
               {
                   userCardModel: UserCardModel.Other,
                   userId: response.data[6].user_id
               },
               {
                   userCardModel: UserCardModel.Other,
                   userId: response.data[7].user_id
               }
           ]);
        });
    }, []);

    return (
        <Wrapper>
            <StyledLeaveButton>
                <LeaveButton />
            </StyledLeaveButton>

            <StyleCards>
                <Grid container spacing={2}>
                    {classmates.map((info, index) => {
                        return (
                            <Grid item xs={4} key={index}>
                                <UserCard userCardModel={info.userCardModel} user_id={info.userId} />
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