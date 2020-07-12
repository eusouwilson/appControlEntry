import styled from 'styled-components/native';
import Button from '../../components/Button';
import { Colors } from '../../../constants/colors';
import Input from '../../components/Input';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 50px;
  margin: 10px;
`;
export const SubmitButton = styled(Button)`
  background: ${Colors.blue};
  justify-content: center;
  align-items: center;
  width: 30%;
`;

export const Form = styled.View`
  flex-direction: row;
  align-self: stretch;
  justify-content: space-between;
`;

export const FormInput = styled(Input)`
  border-width: 1px;
  width: 65%;
`;

export const Body = styled.View`
  padding: 10px;
  width: 100%;
  height: 80%;
  justify-content: flex-start;
  align-items: center;
`;

export const ImageCar = styled.Image`
  width: 100%;
  height: 80%;
`;

export const CarInfo = styled.Text`
  font-size: 25px;
  font-weight: 600;
  color: ${Colors.green};
  margin-bottom: 15px;
`;
