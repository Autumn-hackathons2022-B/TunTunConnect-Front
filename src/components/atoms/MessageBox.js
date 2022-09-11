import styled from "styled-components";

export const MessageBox = ({ isSelf, message }) => {
    return (
        <>
            {isSelf ? (
                <Green>{message}</Green>
            ) : (
                <Grey>{message}</Grey>
            )}
        </>
    );
}

const Green = styled.li`
  margin-left: 20px;
  margin-bottom: 16px;
  max-width: 500px;
  min-width: 120px;
  min-height: 30px;
  background: #a7ffdf;
  border-radius: 4px;
  list-style-type: none;
  overflow-wrap: break-word;
  font-size: 1.8em;
`;

const Grey = styled.li`
  margin-right: 20px;
  margin-bottom: 32px;
  max-width: 500px;
  min-width: 120px;
  min-height: 30px;
  background: #ddd;
  border-radius: 4px;
  list-style-type: none;
  overflow-wrap: break-word;
  font-size: 1.8em;
`;