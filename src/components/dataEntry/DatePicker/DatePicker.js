import React from 'react';
import { DatePicker } from 'antd';

import 'antd/dist/antd.css';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

const ArmoryDatePicker = (props) => <DatePicker {...props} />;
const ArmoryMonthPicker = (props) => <MonthPicker {...props} />;
const ArmoryRangePicker = (props) => <RangePicker {...props} />;
const ArmoryWeekPicker = (props) => <WeekPicker {...props} />;

export {
  ArmoryDatePicker as DatePicker,
  ArmoryMonthPicker as MonthPicker,
  ArmoryRangePicker as RangePicker,
  ArmoryWeekPicker as WeekPicker,
};