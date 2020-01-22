import React from 'react';

// Storybook

// Components
import Affix from './Affix';
import { Button, H1, H2 } from '../../../index';
import { StoryArticle, StoryHeader, StorySection } from '../../../utils/storybook/StyledStoryComponents';
import Docs from './AFFIX.md';

// Utils
import { createStory } from '../../../utils/storybook/storybookUtils';

createStory('Navigation|/').add('Affix', () => {
  const [top, setTop] = React.useState(10);
  const [bottom, setBottom] = React.useState(10);

  return (
    <StoryArticle>
      <StoryHeader>
        <H1>Affix</H1>
      </StoryHeader>

      <StorySection>
        <StoryHeader>
          <H2>Basic</H2>
        </StoryHeader>

        <Affix offsetTop={top}>
          <Button
            type="primary"
            onClick={() => {
              setTop(top + 10)
            }}
          >
            Affix top
          </Button>
        </Affix>
        <br />
        <Affix offsetBottom={bottom}>
          <Button
            type="primary"
            onClick={() => {
              setBottom(bottom + 10);
            }}
          >
            Affix bottom
          </Button>
        </Affix>
      </StorySection>
    </StoryArticle>
  );
},
{
  notes: {
    markdown: Docs,
  },
});