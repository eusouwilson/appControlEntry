import styled from 'styled-components/native';
import { Colors } from '../../../constants/colors';

export const Container = styled.View`
  width: 100%;
  height: 80px;
  background-color: ${Colors.green};
  align-items: center;
  justify-content: center;
`;

export const MessageText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${Colors.redFont};
`;
