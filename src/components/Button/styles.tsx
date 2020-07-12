import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 46px;
  flex-direction: row;
  border-radius: 4px;
  align-items: center;
  justify-content: space-around;
`;
export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
