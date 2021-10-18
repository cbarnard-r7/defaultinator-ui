import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../../stories/routes/Credentials/EditCredentialsPage.stories';

const { Primary: EditCredentialsPage } = composeStories(stories);

describe('routes/EditCredentialsPage', () => {
    it('should render', () => {
        render(<EditCredentialsPage />);
    });
});