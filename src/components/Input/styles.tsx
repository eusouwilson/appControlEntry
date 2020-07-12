import styled from 'styled-components/native';
import { Colors } from '../../../constants/colors';

export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  border-radius: 4px;
  border-color: ${Colors.green};
  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: Colors.green,
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: ${Colors.green};
`;
