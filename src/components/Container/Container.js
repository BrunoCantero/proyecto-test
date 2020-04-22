import * as React from 'react';
import {_Container} from './styles';

const Container = ({children, ...props}) => {
  return <_Container {...props}>{children}</_Container>;
};

Container.defaultProps = {
  style: {},
};

export default Container;
