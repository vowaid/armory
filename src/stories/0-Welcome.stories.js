import React from 'react';

// Storybook

// Components
import { StoryArticle, StoryHeader, StorySection } from '../utils/storybook/StyledStoryComponents';
import ArmoryLogo from '../icons/armory/armory-logo.svg';

// Utils
import { createStory } from '../utils/storybook/storybookUtils';

createStory('Intro|/').add('Welcome', () => {
  return (
    <StoryArticle>
      <StoryHeader>
        <img src={ArmoryLogo} height="150" alt="armory" />
      </StoryHeader>

      <StorySection>
        <StoryHeader>
          <h1>Welcome!</h1>
        </StoryHeader>
      </StorySection>
    </StoryArticle>
  );
});