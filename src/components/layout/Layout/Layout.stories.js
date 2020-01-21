import React from 'react';
import styled from 'styled-components';

// Storybook

// Components
import { Layout, Header, Footer, Sider, Content } from './Layout';
import { H1, H2 } from '../../../index';
import { StoryArticle, StoryHeader, StorySection } from '../../../utils/storybook/StyledStoryComponents';
import Docs from './LAYOUT.md';

// Utils
import { createStory } from '../../../utils/storybook/storybookUtils';

// Themes
import Colors from '../../../themes/vowaid/colors';

const LayoutContainer = styled.div`
  > .ant-layout {
    margin-bottom: 20px;
  }

  .ant-layout-header,
  .ant-layout-footer,
  .ant-layout-sider,
  .ant-layout-content {
    padding: 1em 3%;
    color: ${Colors.violet[95].hex};
  }

  .ant-layout-header {
    background: ${Colors.violet[60].hex};
  }

  .ant-layout-footer {
    background: ${Colors.violet[60].hex};
  }

  .ant-layout-sider {
    background: ${Colors.violet[50].hex};
  }

  .ant-layout-content {
    background: ${Colors.violet[40].hex};
  }
`;

createStory('Layout|/').add('Layout', () => {
  return (
    <StoryArticle>
      <StoryHeader>
        <H1>Layout</H1>
      </StoryHeader>

      <StorySection>
        <StoryHeader>
          <H2>Basic Structure</H2>
        </StoryHeader>

        <LayoutContainer>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>

          <Layout>
            <Header>Header</Header>
            <Layout>
              <Sider>Sider</Sider>
              <Content>Content</Content>
            </Layout>
            <Footer>Footer</Footer>
          </Layout>

          <Layout>
            <Header>Header</Header>
            <Layout>
              <Content>Content</Content>
              <Sider>Sider</Sider>
            </Layout>
            <Footer>Footer</Footer>
          </Layout>

          <Layout>
            <Sider>Sider</Sider>
            <Layout>
              <Header>Header</Header>
              <Content>Content</Content>
              <Footer>Footer</Footer>
            </Layout>
          </Layout>
        </LayoutContainer>
      </StorySection>
    </StoryArticle>
  );
},
{
  notes: {
    markdown: Docs,
  },
});