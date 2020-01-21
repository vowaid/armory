import React from 'react';

// Storybook

// Components
import Icon from './Icon';
import { H1 } from '../../../index';
import { StoryArticle, StoryHeader, StorySection } from '../../../utils/storybook/StyledStoryComponents';
import Docs from './ICON.md';

// Utils
import { createStory } from '../../../utils/storybook/storybookUtils';

createStory('General|/').add('Icon', () => {
  return (
    <StoryArticle>
      <StoryHeader>
        <H1>Icon</H1>
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