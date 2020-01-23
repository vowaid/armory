import React from 'react';
import { Checkbox } from 'antd';

import 'antd/dist/antd.css';

const { Group } = Checkbox;

const ArmoryCheckbox = (props) => <Checkbox {...props} />;
const ArmoryCheckboxGroup = (props) => <Group {...props} />;

export {
  ArmoryCheckbox as Checkbox,
  ArmoryCheckboxGroup as CheckboxGroup,
};