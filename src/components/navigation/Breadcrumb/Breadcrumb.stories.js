import React from 'react';

// Storybook

// Components
import { Breadcrumb, BreadcrumbItem} from './Breadcrumb';
import { H1, H2, Icon } from '../../../index';
import { StoryArticle, StoryHeader, StorySection } from '../../../utils/storybook/StyledStoryComponents';
import Docs from './BREADCRUMB.md';

// Utils
import { createStory } from '../../../utils/storybook/storybookUtils';

createStory('Navigation|/').add('Breadcrumb', () => {
  return (
    <StoryArticle>
      <StoryHeader>
        <H1>Breadcrumb</H1>
      </StoryHeader>

      <StorySection>
        <StoryHeader>
          <H2>Basic</H2>
        </StoryHeader>

        <Breadcrumb>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/#">Application Center</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/#">Application List</a>
          </BreadcrumbItem>
          <BreadcrumbItem>An Application</BreadcrumbItem>
        </Breadcrumb>
      </StorySection>

      <StorySection>
        <StoryHeader>
          <H2>With Icons</H2>
        </StoryHeader>

        <Breadcrumb>
          <BreadcrumbItem href="/#">
            <Icon type="home" />
          </BreadcrumbItem>
          <BreadcrumbItem href="/#">
            <Icon type="user" />
            <span>Application List</span>
          </BreadcrumbItem>
          <BreadcrumbItem>Application</BreadcrumbItem>
        </Breadcrumb>
      </StorySection>
    </StoryArticle>
  );
},
{
  notes: {
    markdown: Docs,
  },
});