import React from 'react';

// Storybook

// Components
import PageHeader from './PageHeader';
import { H1, H2 } from '../../../index';
import { StoryArticle, StoryHeader, StorySection } from '../../../utils/storybook/StyledStoryComponents';
import Docs from './PAGE_HEADER.md';

// Utils
import { createStory } from '../../../utils/storybook/storybookUtils';

createStory('Navigation|/').add('PageHeader', () => {
  return (
    <StoryArticle>
      <StoryHeader>
        <H1>PageHeader</H1>
      </StoryHeader>

      <StorySection>
        <StoryHeader>
          <H2>Basic</H2>
        </StoryHeader>

        <PageHeader
          style={{
            border: '1px solid rgb(235, 237, 240)',
          }}
          onBack={() => null}
          title="Title"
          subTitle="This is a subtitle"
        />
      </StorySection>
    </StoryArticle>
  );
},
{
  notes: {
    markdown: Docs,
  },
});