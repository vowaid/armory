import React from 'react';

// Storybook

// Components
import Pagination from './Pagination';
import { H1, H2 } from '../../../index';
import { StoryArticle, StoryHeader, StorySection } from '../../../utils/storybook/StyledStoryComponents';
import Docs from './PAGINATION.md';

// Utils
import { createStory } from '../../../utils/storybook/storybookUtils';

createStory('Navigation|/').add('Pagination', () => {
  return (
    <StoryArticle>
      <StoryHeader>
        <H1>Pagination</H1>
      </StoryHeader>

      <StorySection>
        <StoryHeader>
          <H2>Basic</H2>
        </StoryHeader>

        <Pagination defaultCurrent={1} total={50} />
      </StorySection>

      <StorySection>
        <StoryHeader>
          <H2>More Pages</H2>
        </StoryHeader>

        <Pagination defaultCurrent={6} total={500} />
      </StorySection>
    </StoryArticle>
  );
},
{
  notes: {
    markdown: Docs,
  },
});