import React from 'react';
import { Typography } from 'antd';

import 'antd/dist/antd.css';

const { Paragraph, Text, Title } = Typography;

const ArmoryParagraph = (props) => <Paragraph {...props} />;
const ArmoryText = (props) => <Text {...props} />;
const ArmoryTitle = (props) => <Title {...props} />;

const ArmoryH1 = (props) => <Title {...props} level={1} />;
const ArmoryH2 = (props) => <Title {...props} level={2} />;
const ArmoryH3 = (props) => <Title {...props} level={3} />;
const ArmoryH4 = (props) => <Title {...props} level={4} />;

export {
  ArmoryParagraph as Paragraph,
  ArmoryText as Text,
  ArmoryTitle as Title,
  ArmoryH1 as H1,
  ArmoryH2 as H2,
  ArmoryH3 as H3,
  ArmoryH4 as H4,
}