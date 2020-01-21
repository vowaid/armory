import React from 'react';
import { Typography } from 'antd';

import 'antd/dist/antd.css';

const { Paragraph, Text, Title } = Typography;

const ArmoryParagraphy = (props) => <Paragraph {...props} />;
const ArmoryText = (props) => <Text {...props} />;
const ArmoryTitle = (props) => <Title {...props} />;

export {
  Paragraph: ArmoryParagraphy,
  Text: ArmoryText,
  Title: ArmoryTitle,
}