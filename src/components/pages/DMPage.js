import { Header } from "../organisms/Header";
import { Grid, Stack } from "@mui/material";
import { Inform } from "../organisms/Inform";
import styled from "styled-components";
import { Conversation } from "../organisms/Conversation";

export const DMPage = () => {
  return (
    <WholeWrapper>
      <Header />
      <Wrapper>
        <Grid container>
          <Grid item xs={6}>
            <InformWrapper>
              <Inform my_id={"aaa"} />
            </InformWrapper>
          </Grid>
          <Grid item xs={6}>
            <ConversationWrapper>
              <Conversation user_id={"aaa"} partnerId={"aaa"} />
            </ConversationWrapper>
          </Grid>
        </Grid>
      </Wrapper>
    </WholeWrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding-top: 7vh;
  background-color: #f9f9f9;
  height: 85vh;
`;
const WholeWrapper = styled.div`
  height: 80vh;
`;

const InformWrapper = styled.div`
  border: 2px solid #000;
  padding: 20px;
  min-height: 80vh;
`;

const ConversationWrapper = styled.div`
  border: 2px solid #000;
  display: block;
  padding: 20px;
  height: 80vh;
`;
