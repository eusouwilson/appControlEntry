import styled from 'styled-components/native';
import Button from '../../components/Button';
import { Colors } from '../../../constants/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const SubmitButton = styled(Button)`
  background: ${Colors.blue};
  justify-content: center;
  align-items: center;
  width: 30%;
`;
