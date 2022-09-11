import { TunTunNotify } from "../molecules/TunTunNotify";
import { UserCard } from "../molecules/UserCard";
import { UserCardModel } from "../../model/UserCardModel";
import Grid from "@mui/material/Grid";
import styled from "styled-components";

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
  );
};

const StyleCards = styled.div`
  /* ユーザーカードコンポーネント */
  margin: auto;
`;
