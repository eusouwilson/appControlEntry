import React from 'react';

import { Container, MessageText } from './styles';

interface message {
  message: string;
  hiden: boolean;
}

const CardMessage: React.FC<message> = ({ message, hiden }) => {
  return (
    <>
      {hiden ? (
        <Container>
          <MessageText>{message}</MessageText>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};

export default CardMessage;
