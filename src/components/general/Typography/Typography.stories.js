import React from 'react';

// Storybook

// Components
import { Paragraph, Text, Title, H1, H2, H3, H4 } from './Typography';
import { StoryArticle, StoryHeader, StorySection } from '../../../utils/storybook/StyledStoryComponents';
import Docs from './TYPOGRAPHY.md';

// Utils
import { createStory } from '../../../utils/storybook/storybookUtils';

createStory('General|/').add('Typography', () => {
  const [editableString, updateEditableString] = React.useState('This is an editable text.')

  const onEditableChange = str => {
    updateEditableString(str);
  };

  return (
    <StoryArticle>
      <StoryHeader>
        <H1>Typography</H1>
      </StoryHeader>

      <StorySection>
        <H2>Title</H2>

        <Title>h1. Armory</Title>
        <H1>h1. Armory</H1>

        <Title level={2}>h2. Armory</Title>
        <H2>h2. Armory</H2>

        <Title level={3}>h3. Armory</Title>
        <H3>h3. Armory</H3>

        <Title level={4}>h4. Armory</Title>
        <H4>h4. Armory</H4>
      </StorySection>

      <StorySection>
        <H2>Text</H2>

        <Text>armory</Text>
        <br />
        <Text type="secondary">armory</Text>
        <br />
        <Text type="warning">armory</Text>
        <br />
        <Text type="danger">armory</Text>
        <br />
        <Text disabled>armory</Text>
        <br />
        <Text mark>armory</Text>
        <br />
        <Text code>armory</Text>
        <br />
        <Text underline>armory</Text>
        <br />
        <Text delete>armory</Text>
        <br />
        <Text strong>armory</Text>
      </StorySection>

      <StorySection>
        <H2>Paragraph</H2>

        <Paragraph editable={{ onChange: onEditableChange }}>{editableString}</Paragraph>
        <Paragraph copyable>This is a copyable text.</Paragraph>
        <Paragraph copyable={{ text: 'Hello, armory!' }}>Replace copy text.</Paragraph>
      </StorySection>
    </StoryArticle>
  );
},
{
  notes: {
    markdown: Docs,
  },
});