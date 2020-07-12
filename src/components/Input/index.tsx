import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, TInput } from './styles';
import { Colors } from '../../../constants/colors';

function Input({ style, icon, ...rest }, ref) {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={30} color={Colors.green} />}
      <TInput {...rest} ref={ref} />
    </Container>
  );
}

export default forwardRef(Input);
