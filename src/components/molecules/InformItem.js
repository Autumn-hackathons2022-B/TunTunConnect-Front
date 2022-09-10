import { TunTunIcon } from "../atoms/TunTunIcon";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Stack from "@mui/material/Stack";
import styled from "styled-components";
import { Typography } from "@mui/material";

export const InformItem = () => {
  return (
    <>
      <Stack direction={{ xs: "column", sm: "row" }}>
        <Stack direction={{ xs: "column", sm: "row" }}>
          <TunTunIcon />
          <Typography variant="p">text</Typography>
        </Stack>
        <Stack direction={{ xs: "column", sm: "row" }}>
          <NotifyCircle />
          <ArrowForwardIosIcon />
        </Stack>
      </Stack>
    </>
  );
};

const NotifyCircle = styled.div`
  height: 2em;
  width: 2em;
  background-color: #ff0000;
  border-radius: 50%;
`;
