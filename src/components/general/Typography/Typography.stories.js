import React from 'react';

// Storybook

// Components
import { Paragraph, Text, Title } from './Typography';
import { StoryArticle, StoryHeader, StorySection } from '../../../utils/storybook/StyledStoryComponents';
import Docs from './BUTTON.md';

// Utils
import { createStory } from '../../../utils/storybook/storybookUtils';

createStory('Atoms|/').add('Typography', () => {
  return (
    <StoryArticle>
      <StoryHeader>
        <h1>Typography</h1>
      </StoryHeader>

      <StorySection>
        <Title level={2}>Title</Title>

        <Title>h1. Armory</Title>
        <Title level={2}>h2. Armory</Title>
        <Title level={3}>h3. Armory</Title>
        <Title level={4}>h4. Armory</Title>
      </StorySection>

      <StorySection>
        <Title level={2}>Text</Title>

        <Text>Ant Design</Text>
        <br />
        <Text type="secondary">Ant Design</Text>
        <br />
        <Text type="warning">Ant Design</Text>
        <br />
        <Text type="danger">Ant Design</Text>
        <br />
        <Text disabled>Ant Design</Text>
        <br />
        <Text mark>Ant Design</Text>
        <br />
        <Text code>Ant Design</Text>
        <br />
        <Text underline>Ant Design</Text>
        <br />
        <Text delete>Ant Design</Text>
        <br />
        <Text strong>Ant Design</Text>
      </StorySection>

      <StorySection>
        <Title level={2}>Paragraph</Title>

        <Paragraph editable={{ onChange: this.onChange }}>{this.state.str}</Paragraph>
        <Paragraph copyable>This is a copyable text.</Paragraph>
        <Paragraph copyable={{ text: 'Hello, Ant Design!' }}>Replace copy text.</Paragraph>
      </StorySection>
    </StoryArticle>
  );
},
{
  notes: {
    markdown: Docs,
  },
});