import React from 'react';
import styled from 'styled-components';
import Color from 'color';
import uuid from 'uuid/v4';

// Storybook

// Components
import { StoryArticle, StoryHeader, StorySection } from '../../utils/storybook/StyledStoryComponents';

// Utils
import { createStory } from '../../utils/storybook/storybookUtils';
import Colors from './colors';

const colorNames = Object.keys(Colors);

const ColorVariants = [];
console.log(Colors);
for (let index = 5; index <= 95; index += 5) {
  ColorVariants.push(index);
}

const ColorList = styled.ul`
  display: grid;
  list-style: none;
  padding: 0;
  width: 100%;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(3, auto);
  grid-gap: 1em 0;

  li:nth-child(10) {
    grid-column: 1 / 10;

    .text-block {
      padding: 0 0.333333333%;
    }

    h4 {
      left: 0.333333333%;
    }
  }
`;

const ColorBlock = styled.div`
  background: ${({ background }) => background};
  height: 100px;
  position: relative;
  width: 100%;
`;

const TextBlock = styled.div`
  padding: 0 3%;

  p {
    margin: 0;
  }
`;

const ColorTitle = styled.h4`
  bottom: 0.1em;
  color: ${({ color }) => color};
  left: 3%;
  margin-top: -1.6em;
  position: absolute;
`;

const generateColorSection = (colorName) => (
  <StorySection key={uuid()}>
    <StoryHeader>
      <h2>{colorName}</h2>
    </StoryHeader>

    <ColorList>
      {ColorVariants.map((colorVariant) => {
        const colorValues = Colors[colorName][colorVariant];
        const color = Color(colorValues.hex);
        const titleColor = (color.isLight()) ? Colors.grayscale[20].hex : Colors.grayscale[90].hex;

        const rgb = color.rgb().array().join(', ');
        let hsl = color.hsl().array();

        hsl.forEach((value, index) => {
          hsl[index] = Math.round(value);
        });

        hsl = hsl.join(', ');

        return (
          <li key={uuid()}>
            <ColorBlock background={colorValues.hex}>
              <ColorTitle color={titleColor}>{colorVariant}</ColorTitle>
            </ColorBlock>

            <TextBlock className='text-block'>
              <p><strong>hex:</strong> {color.hex()}</p>
              <p><strong>rgb:</strong> {rgb}</p>
              <p><strong>hsl:</strong> {hsl}</p>
            </TextBlock>
          </li>
        );
      })}
    </ColorList>
  </StorySection>
);

const ColorsStory = createStory('Themes|VOWAID/Colors');

ColorsStory.add('all', () => (
  <StoryArticle>
    <StoryHeader>
      <h1>Colors</h1>
    </StoryHeader>

    {colorNames.map(generateColorSection)}
  </StoryArticle>
));

for (let index = 0; index < colorNames.length; index++) {
  const colorName = colorNames[index];

  ColorsStory.add(colorName, () => generateColorSection(colorName));
};