import React from 'react';

// Storybook

// Components
import { Checkbox, CheckboxGroup } from './Checkbox';
import { H1, H2 } from '../../../index';
import { StoryArticle, StoryHeader, StorySection } from '../../../utils/storybook/StyledStoryComponents';
import Docs from './CHECKBOX.md';

// Utils
import { createStory } from '../../../utils/storybook/storybookUtils';

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];

createStory('Data Entry|/').add('Checkbox', () => {
  return (
    <StoryArticle>
      <StoryHeader>
        <H1>Checkbox</H1>
      </StoryHeader>

      <StorySection>
        <StoryHeader>
          <H2>Basic</H2>
        </StoryHeader>

        <Checkbox onChange={onChange}>Checkbox</Checkbox>
        <br />
        <Checkbox defaultChecked={false} disabled>Disabled</Checkbox>
        <br />
        <Checkbox defaultChecked disabled>Checked &amp; Disabled</Checkbox>
      </StorySection>

      <StorySection>
        <StoryHeader>
          <H2>Checkbox Group</H2>
        </StoryHeader>

        <div>
          <CheckboxGroup options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
          <br />
          <br />
          <CheckboxGroup options={options} defaultValue={['Pear']} onChange={onChange} />
          <br />
          <br />
          <CheckboxGroup
            options={optionsWithDisabled}
            disabled
            defaultValue={['Apple']}
            onChange={onChange}
          />
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