import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import Sidebar from './Sidebar';

const SidebarWrapper = (props) => {
  return <Sidebar {...props} />;
};

export default withNavigation(SidebarWrapper);
