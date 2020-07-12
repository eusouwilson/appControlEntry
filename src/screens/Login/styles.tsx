import styled from 'styled-components/native';
import { Platform } from 'react-native';

import { Colors } from '../../../constants/colors';

import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
`;

export const Header = styled.View`
  padding-top: 80px;
  flex: 1.2;
`;

export const HeaderView = styled.View`
  width: 100%;
  height: 70px;
  padding-left: 30px;
`;

export const Logo = styled.Image`
  width: 70px;
  height: 70px;
`;

export const LogoTitle = styled.Text`
  margin-left: 20px;
  margin-top: 20px;
  width: 100%;
  height: 43px;
  font-size: 40px;
  font-weight: 400;
  text-align: left;
  color: ${Colors.green};
`;

export const LogoSubTitle = styled.Text`
  margin-left: 20px;
  margin-top: 20px;
  width: 100%;
  height: 43px;
  font-size: 22px;
  text-align: left;
  color: ${Colors.green};
`;

export const Body = styled.View`
  flex: 3;
  padding: 15px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  margin-top: 15px;
  border-bottom-width: 1px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
  background: ${Colors.blue};
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: ${Colors.blue};
  font-weight: bold;
  font-size: 16px;
`;
