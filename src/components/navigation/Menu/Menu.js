import React from 'react';
import { Menu } from 'antd';

import 'antd/dist/antd.css';

const { Item, ItemGroup, SubMenu } = Menu;

const ArmoryMenu = (props) => <Menu {...props} />;
const ArmorySubMenu = (props) => <SubMenu {...props} />;
const ArmoryMenuItem = (props) => <Item {...props} />;
const ArmoryMenuItemGroup = (props) => <ItemGroup {...props} />;

export {
  ArmoryMenu as Menu,
  ArmorySubMenu as SubMenu,
  ArmoryMenuItem as MenuItem,
  ArmoryMenuItemGroup as MenuItemGroup,
};