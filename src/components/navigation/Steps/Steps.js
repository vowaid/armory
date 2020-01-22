import React from 'react';
import { Steps } from 'antd';

import 'antd/dist/antd.css';

const { Step } = Steps;

const ArmorySteps = (props) => <Steps {...props} />;
const ArmoryStep = (props) => <Step {...props} />;

export {
  ArmorySteps as Steps,
  ArmoryStep as Step,
};