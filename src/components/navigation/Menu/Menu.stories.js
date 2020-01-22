import React from 'react';

// Storybook

// Components
import { Menu, MenuItem, MenuItemGroup, SubMenu } from './Menu';
import { H1, H2, Icon } from '../../../index';
import { StoryArticle, StoryHeader, StorySection } from '../../../utils/storybook/StyledStoryComponents';
import Docs from './MENU.md';

// Utils
import { createStory } from '../../../utils/storybook/storybookUtils';

const MenuStory = createStory('Navigation|Menu');

MenuStory.add('Top Navigation', () => {
  const [current, setCurrent] = React.useState('mail');
  const handleClick = (event) => {
    setCurrent(event.click);
  }

  return (
    <StoryArticle>
      <StoryHeader>
        <H1>Menu</H1>
        <H2>Top Navigation</H2>
      </StoryHeader>

      <StorySection>
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
          <MenuItem key="mail">
            <Icon type="mail" />
            Navigation One
          </MenuItem>
          <MenuItem key="app" disabled>
            <Icon type="appstore" />
            Navigation Two
          </MenuItem>
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <Icon type="setting" />
                Navigation Three - Submenu
              </span>
            }
          >
            <MenuItemGroup title="Item 1">
              <MenuItem key="setting:1">Option 1</MenuItem>
              <MenuItem key="setting:2">Option 2</MenuItem>
            </MenuItemGroup>
            <MenuItemGroup title="Item 2">
              <MenuItem key="setting:3">Option 3</MenuItem>
              <MenuItem key="setting:4">Option 4</MenuItem>
            </MenuItemGroup>
          </SubMenu>
          <MenuItem key="alipay">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
              Navigation Four - Link
            </a>
          </MenuItem>
        </Menu>
      </StorySection>
    </StoryArticle>
  );
},
{
  notes: {
    markdown: Docs,
  },
});