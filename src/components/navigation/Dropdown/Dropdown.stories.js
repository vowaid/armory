import React from 'react';

// Storybook

// Components
import Dropdown from './Dropdown';
import { H1, H2, Icon, Menu, MenuItem } from '../../../index';
import { StoryArticle, StoryHeader, StorySection } from '../../../utils/storybook/StyledStoryComponents';
import Docs from './DROPDOWN.md';

// Utils
import { createStory } from '../../../utils/storybook/storybookUtils';

const menu = (
  <Menu>
    <MenuItem>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </MenuItem>
    <MenuItem>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </MenuItem>
    <MenuItem>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </MenuItem>
  </Menu>
);

createStory('Navigation|/').add('Dropdown', () => {
  return (
    <StoryArticle>
      <StoryHeader>
        <H1>Dropdown</H1>
      </StoryHeader>

      <StorySection>
        <StoryHeader>
          <H2>Basic</H2>
        </StoryHeader>

        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="/#">
            Hover me <Icon type="down" />
          </a>
        </Dropdown>
      </StorySection>
    </StoryArticle>
  );
},
{
  notes: {
    markdown: Docs,
  },
});