import React from 'react';

// Storybook

// Components
import Button from './Button';
import { H1 } from '../../../index';
import { StoryArticle, StoryHeader, StorySection } from '../../../utils/storybook/StyledStoryComponents';
import Docs from './BUTTON.md';

// Utils
import { createStory } from '../../../utils/storybook/storybookUtils';

createStory('General|/').add('Button', () => {
  return (
    <StoryArticle>
      <StoryHeader>
        <H1>Button</H1>
      </StoryHeader>

      <StorySection>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Link</Button>
      </StorySection>
    </StoryArticle>
  );
},
{
  notes: {
    markdown: Docs,
  },
});