import {IconButton, Stack} from "@mui/material";
import {Close} from "@mui/icons-material";
import styled from "styled-components";


export const Header = () => {
    return (
        <Wrapper>
            <Stack direction="row" justifyContent="space-between" alignItems="center" >
                <IconButton>
                    <Close style={{fontSize: "50px", alignItems: "baseline"}}/>
                </IconButton>
                <Title>トーク</Title>
            </Stack>
        </Wrapper>
    );
}

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  background-color: #fff;
  box-shadow: 0 0 2px 0;
  z-index: 500;
`


const Title = styled.h1`
  margin: 0 50% 0 0;
`