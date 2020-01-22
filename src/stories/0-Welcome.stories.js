import React from 'react';
import styled from 'styled-components';

// Storybook

// Components
import { H1 } from '../index';
import { StoryArticle, StoryHeader, StorySection } from '../utils/storybook/StyledStoryComponents';
import ArmoryPreview from '../icons/armory/armory-preview.svg';

// Utils
import { createStory } from '../utils/storybook/storybookUtils';

const StyledStoryHeader = styled(StoryHeader)`
  align-items: center;
  display: flex;
  justify-content: center;

  > img {
    height: 300px;
    max-width: 80%;
    width: auto;
  }
`;

createStory('Intro|/').add('Welcome', () => {
  return (
    <StoryArticle>
      <StyledStoryHeader>
        <img src={ArmoryPreview} alt="armory" />
      </StyledStoryHeader>

      <StorySection>
        <StoryHeader>
          <H1>Welcome!</H1>
        </StoryHeader>
      </StorySection>
    </StoryArticle>
  );
});