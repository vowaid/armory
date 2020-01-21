import React from 'react';

// Storybook

// Components
import Button from './Button';
import { StoryArticle, StoryHeader, StorySection } from '../../../utils/storybook/StyledStoryComponents';
import Docs from './BUTTON.md';

// Utils
import { createStory } from '../../../utils/storybook/storybookUtils';

createStory('Atoms|/').add('Button', () => {
  return (
    <StoryArticle>
      <StoryHeader>
        <h1>Button</h1>
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