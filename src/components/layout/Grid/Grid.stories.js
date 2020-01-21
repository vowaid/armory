import React from 'react';
import styled from 'styled-components';

// Storybook

// Components
import { Col, Row } from './Grid';
import { H1, H2 } from '../../../index';
import { StoryArticle, StoryHeader, StorySection } from '../../../utils/storybook/StyledStoryComponents';
import Docs from './GRID.md';

// Utils
import { createStory } from '../../../utils/storybook/storybookUtils';

// Themes
import Colors from '../../../themes/vowaid/colors';

const GridContainer = styled.div`
  .ant-col:not(.gutter-row) {
    background: ${Colors.blue[60].hex};
    color: ${Colors.blue[95].hex};
    padding: 1rem 3%;

    &:nth-child(2n + 1) {
      background: ${Colors.blue[75].hex};
      color: ${Colors.blue[5].hex};
    }
  }
`;

createStory('Layout|/').add('Grid', () => {
  return (
    <StoryArticle>
      <StoryHeader>
        <H1>Grid</H1>
      </StoryHeader>

      <StorySection>
        <StoryHeader>
          <H2>Basic Grid</H2>
        </StoryHeader>

        <GridContainer>
          <Row>
            <Col span={12}>col-12</Col>
            <Col span={12}>col-12</Col>
          </Row>
          <Row>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
          </Row>
          <Row>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
          </Row>
        </GridContainer>
      </StorySection>
    </StoryArticle>
  );
},
{
  notes: {
    markdown: Docs,
  },
});