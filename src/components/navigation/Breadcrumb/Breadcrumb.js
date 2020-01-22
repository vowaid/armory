import React from 'react';
import { Breadcrumb } from 'antd';

import 'antd/dist/antd.css';

const { Item } = Breadcrumb;

const ArmoryBreadcrumb = (props) => <Breadcrumb {...props} />;
const ArmoryBreadcrumbItem = (props) => <Item {...props} />;

export {
  ArmoryBreadcrumb as Breadcrumb,
  ArmoryBreadcrumbItem as BreadcrumbItem,
};