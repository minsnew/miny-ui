import { render } from '@testing-library/react';

import MinyUi from './miny-ui';

describe('MinyUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MinyUi />);
    expect(baseElement).toBeTruthy();
  });
});
