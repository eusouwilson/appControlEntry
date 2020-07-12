import styled from 'styled-components/native';
import { Colors } from '../../../constants/colors';
import Button from '../../components/Button';

export const Container = styled.View`
  width: 100%;
  height: 100px;
  margin-top: 50px;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
`;

export const Logo = styled.Image`
  width: 50px;
  height: 50px;
`;

export const LogoTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${Colors.green};
`;

export const LogoSubTitle = styled.Text`
  font-size: 18px;
  font-weight: 400;
  color: ${Colors.green};
`;

export const ContainerTitle = styled.View`
  width: 50%;
  height: 60px;
  align-items: flex-start;
  justify-content: center;
`;

export const SubmitButton = styled(Button)`
  background: ${Colors.blue};
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;
