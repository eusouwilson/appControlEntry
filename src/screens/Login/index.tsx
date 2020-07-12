import React, { useRef, useState } from 'react';
import logo from '../../../assets/img/parking.png';
import { useAuth } from '../../contexts/auth';
import CardMessage from '../../components/CardMessage';
import {
  Container,
  Header,
  Body,
  HeaderView,
  Logo,
  LogoTitle,
  LogoSubTitle,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

const Login: React.FC = () => {
  const passwordRef = useRef;
  const { error, singIn, loading } = useAuth();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const handlerSubmit = async () => {
    await singIn(userName, password);
  };
  return (
    <Container>
      <Header>
        <HeaderView>
          <Logo source={logo} />
          <LogoTitle>Bem-vindo</LogoTitle>
          <LogoSubTitle>Faça seu login para continuar</LogoSubTitle>
        </HeaderView>
      </Header>
      <Body>
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite Seu Usuário"
            value={userName}
            onChangeText={setUserName}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite Sua Senha"
            // ref={passwordRef}
            returnKeyType="send"
            value={password}
            onChangeText={setPassword}
            //onSubmitEditing={handlerSubmit}
          />

          <SubmitButton
            loading={loading}
            onPress={handlerSubmit}
            icon="arrow-forward"
          >
            Vamos continuar
          </SubmitButton>
        </Form>
        <SignLink>
          <SignLinkText onPress={() => {}}>
            Crie uma conta gratuita
          </SignLinkText>
        </SignLink>
      </Body>
      <CardMessage message={error} hiden={!!error} />
    </Container>
  );
};

export default Login;
