import React from 'react';

// Storybook

// Components
import { Steps, Step } from './Steps';
import { H1, H2, Icon } from '../../../index';
import { StoryArticle, StoryHeader, StorySection } from '../../../utils/storybook/StyledStoryComponents';
import Docs from './STEPS.md';

// Utils
import { createStory } from '../../../utils/storybook/storybookUtils';

createStory('Navigation|/').add('Steps', () => {
  return (
    <StoryArticle>
      <StoryHeader>
        <H1>Steps</H1>
      </StoryHeader>

      <StorySection>
        <StoryHeader>
          <H2>Basic</H2>
        </StoryHeader>

        <Steps current={1}>
          <Step title="Finished" description="This is a description." />
          <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
        </Steps>
      </StorySection>

      <StorySection>
        <StoryHeader>
          <H2>With Icons</H2>
        </StoryHeader>

        <Steps>
          <Step status="finish" title="Login" icon={<Icon type="user" />} />
          <Step status="finish" title="Verification" icon={<Icon type="solution" />} />
          <Step status="process" title="Pay" icon={<Icon type="loading" />} />
          <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
        </Steps>
      </StorySection>
    </StoryArticle>
  );
},
{
  notes: {
    markdown: Docs,
  },
});