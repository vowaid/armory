import React from 'react';

// Storybook

// Components
import { Input, TextArea, InputGroup, SearchInput, PasswordInput } from './Input';
import { H1, H2 } from '../../../index';
import { StoryArticle, StoryHeader, StorySection } from '../../../utils/storybook/StyledStoryComponents';
import Docs from './INPUT.md';

// Utils
import { createStory } from '../../../utils/storybook/storybookUtils';

createStory('Data Entry|/').add('Input', () => {
  return (
    <StoryArticle>
      <StoryHeader>
        <H1>Input</H1>
      </StoryHeader>

      <StorySection>
        <StoryHeader>
          <H2>Input</H2>
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