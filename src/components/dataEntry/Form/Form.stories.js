import React from 'react';

// Storybook

// Components
import Form from './Form';
import { H1, H2 } from '../../../index';
import { StoryArticle, StoryHeader, StorySection } from '../../../utils/storybook/StyledStoryComponents';
import Docs from './FORM.md';

// Utils
import { createStory } from '../../../utils/storybook/storybookUtils';

createStory('Data Entry|/').add('Form', () => {
  return (
    <StoryArticle>
      <StoryHeader>
        <H1>Form</H1>
      </StoryHeader>

      <StorySection>
        <StoryHeader>
          <H2>Form</H2>
        </StoryHeader>
      </StorySection>
    </StoryArticle>
  );
},
{
  notes: {
    markdown: Docs,
  },
});