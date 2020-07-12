import React from 'react';
import { Text } from 'react-native';
import Header from '../../components/Header';
import { Container, SubmitButton } from './styles';

const Admin: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Text>admin screen</Text>
      </Container>
    </>
  );
};

export default Admin;
