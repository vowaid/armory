import React from 'react';
import { Layout } from 'antd';

import 'antd/dist/antd.css';

const { Header, Footer, Sider, Content } = Layout;

const ArmoryLayout = (props) => <Layout {...props} />;
const ArmoryHeader = (props) => <Header {...props} />;
const ArmoryFooter = (props) => <Footer {...props} />;
const ArmorySider = (props) => <Sider {...props} />;
const ArmoryContent = (props) => <Content {...props} />;

export {
  ArmoryLayout as Layout,
  ArmoryHeader as Header,
  ArmoryFooter as Footer,
  ArmorySider as Sider,
  ArmoryContent as Content,
};
