import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Text } from './styles';

export default function Button({ icon, children, loading, ...rest }) {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <>
          <Text>{children}</Text>
          {icon && <Icon name={icon} size={30} color="#ffff" />}
        </>
      )}
    </Container>
  );
}

Button.defaultProps = {
  loading: false,
};
