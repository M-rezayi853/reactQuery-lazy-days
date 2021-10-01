import { screen } from '@testing-library/react';

import { renderWithQueryClient } from '../../../test-utils/index';
import { Treatments } from '../Treatments';

test('renders response from query', async () => {
  // write test here
  renderWithQueryClient(<Treatments />);

  const treatmentTitiles = await screen.findAllByRole('heading', {
    name: /massage|facial|scrub/i,
  });

  expect(treatmentTitiles).toHaveLength(3);
});
