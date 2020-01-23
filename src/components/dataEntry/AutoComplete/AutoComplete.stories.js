import React from 'react';

// Storybook

// Components
import AutoComplete from './AutoComplete';
import { H1, H2 } from '../../../index';
import { StoryArticle, StoryHeader, StorySection } from '../../../utils/storybook/StyledStoryComponents';
import Docs from './AUTO_COMPLETE.md';

// Utils
import { createStory } from '../../../utils/storybook/storybookUtils';

createStory('Data Entry|/').add('AutoComplete', () => {
  const [value, setValue] = React.useState('');
  const [dataSource, setDataSource] = React.useState([]);

  const onSelect = (value) => {
    console.log('onSelect', value);
  };

  const onSearch = searchText => {
    setDataSource(!searchText ? [] : [searchText, searchText.repeat(2), searchText.repeat(3)]);
  };

  const onChange = value => {
    setValue(value);
  };

  return (
    <StoryArticle>
      <StoryHeader>
        <H1>AutoComplete</H1>
      </StoryHeader>

      <StorySection>
        <StoryHeader>
          <H2>Basic Usage</H2>
        </StoryHeader
>
        <div>
          <AutoComplete
            dataSource={dataSource}
            style={{ width: 200 }}
            onSelect={onSelect}
            onSearch={onSearch}
            placeholder="input here"
          />
          <br />
          <br />
          <AutoComplete
            value={value}
            dataSource={dataSource}
            style={{ width: 200 }}
            onSelect={onSelect}
            onSearch={onSearch}
            onChange={onChange}
            placeholder="control mode"
          />
        </div>
      </StorySection>
    </StoryArticle>
  );
},
{
  notes: {
    markdown: Docs,
  },
});