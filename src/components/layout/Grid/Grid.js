import React from 'react';
import { Col, Row } from 'antd';

import 'antd/dist/antd.css';

const ArmoryCol = (props) => <Col {...props} />;
const ArmoryRow = (props) => <Row {...props} />;

export {
  ArmoryCol as Col,
  ArmoryRow as Row,
};