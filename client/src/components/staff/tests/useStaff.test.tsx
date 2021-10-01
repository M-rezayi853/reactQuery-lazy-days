import { act, renderHook } from '@testing-library/react-hooks';

import { createQueryClientWrapper } from '../../../test-utils/index';
import { useStaff } from '../hooks/useStaff';

test('filter staff', async () => {
  // the magic happens here

  const { result, waitFor } = renderHook(useStaff, {
    wrapper: createQueryClientWrapper(),
  });

  await waitFor(() => result.current.staff.length === 4);

  act(() => result.current.setFilter('facial'));

  await waitFor(() => result.current.staff.length === 3);
});
