import React from 'react';
import { Dropdown } from 'antd';

import 'antd/dist/antd.css';

console.log(Object.keys(Dropdown));

const ArmoryDropdown = (props) => <Dropdown {...props} />;

export default ArmoryDropdown;