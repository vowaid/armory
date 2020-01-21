/* istanbul ignore file */
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withKnobs } from '@storybook/addon-knobs';
import armoryLight from './armoryLightTheme';

const createStory = (title) => {
    if (!title || title === '') {
        throw new Error('A "title" is required for a story');
    }

    return storiesOf(title, module)
        .addDecorator(withA11y)
        .addDecorator(withKnobs)
        .addParameters({
            options: {
                theme: armoryLight,
            },
            viewport: {
                viewports: {
                    ...INITIAL_VIEWPORTS,
                },
            },
        });
};

export { createStory };