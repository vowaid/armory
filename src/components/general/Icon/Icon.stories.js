import React from 'react';

// Storybook

// Components
import Icon from './Icon';
import { StoryArticle, StoryHeader, StorySection } from '../../../utils/storybook/StyledStoryComponents';
import Docs from './BUTTON.md';

// Utils
import { createStory } from '../../../utils/storybook/storybookUtils';

createStory('Atoms|/').add('Icon', () => {
  return (
    <StoryArticle>
      <StoryHeader>
        <h1>Icon</h1>
      </StoryHeader>

      <StorySection>
        <Icon type="home" />
        <Icon type="setting" theme="filled" />
        <Icon type="smile" theme="outlined" />
        <Icon type="sync" spin />
        <Icon type="smile" rotate={180} />
        <Icon type="loading" />
        <Icon type="smile" theme="twoTone" />
        <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
        <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
      </StorySection>
    </StoryArticle>
  );
},
{
  notes: {
    markdown: Docs,
  },
});