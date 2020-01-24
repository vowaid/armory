import React from 'react';

// Storybook

// Components
import { DatePicker, MonthPicker, RangePicker, WeekPicker } from './DatePicker';
import { H1, H2 } from '../../../index';
import { StoryArticle, StoryHeader, StorySection } from '../../../utils/storybook/StyledStoryComponents';
import Docs from './DATE_PICKER.md';

// Utils
import { createStory } from '../../../utils/storybook/storybookUtils';

function onChange(date, dateString) {
  console.log(date, dateString);
}

createStory('Data Entry|/').add('DatePicker', () => {
  return (
    <StoryArticle>
      <StoryHeader>
        <H1>DatePicker</H1>
      </StoryHeader>

      <StorySection>
        <StoryHeader>
          <H2>Basic</H2>
        </StoryHeader>

        <div>
          <DatePicker onChange={onChange} />
          <br />
          <MonthPicker onChange={onChange} placeholder="Select month" />
          <br />
          <RangePicker onChange={onChange} />
          <br />
          <WeekPicker onChange={onChange} placeholder="Select week" />
        </div>
      </StorySection>
    </StoryArticle>
  );
},
{
  notes: {
    markdown: Docs,
  },
});