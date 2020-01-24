import React from 'react';
import { Input } from 'antd';

import 'antd/dist/antd.css';

const { TextArea, Group, Search, Password } = Input;

const ArmoryInput = (props) => <Input {...props} />;
const ArmoryTextArea = (props) => <TextArea {...props} />;
const ArmoryInputGroup = (props) => <Group {...props} />;
const ArmorySearchInput = (props) => <Search {...props} />;
const ArmoryPasswordInput = (props) => <Password {...props} />;

export {
  ArmoryInput as Input,
  ArmoryTextArea as TextArea,
  ArmoryInputGroup as InputGroup,
  ArmorySearchInput as SearchInput,
  ArmoryPasswordInput as PasswordInput,
};