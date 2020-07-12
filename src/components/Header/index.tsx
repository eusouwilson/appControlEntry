import React from 'react';
import logo from '../../../assets/img/parking.png';
import { useAuth } from '../../contexts/auth';

import {
  Container,
  Logo,
  LogoTitle,
  ContainerTitle,
  SubmitButton,
  LogoSubTitle,
} from './styles';

const Header: React.FC = () => {
  const { user, singOut } = useAuth();
  const handSingOut = () => {
    singOut();
  };
  return (
    <Container>
      <Logo source={logo} />
      <ContainerTitle>
        <LogoTitle>Controle De Entrada</LogoTitle>
        <LogoSubTitle>{user?.username}</LogoSubTitle>
      </ContainerTitle>
      <SubmitButton onPress={handSingOut} icon="exit-to-app"></SubmitButton>
    </Container>
  );
};

export default Header;
