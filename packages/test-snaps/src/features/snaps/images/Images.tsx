import type { FunctionComponent } from 'react';

import { Snap } from '../../../components';
import { ShowImage, ShowQr } from './components';
import { IMAGES_SNAP_ID, IMAGES_SNAP_PORT, IMAGES_VERSION } from './constants';

export const Images: FunctionComponent = () => {
  return (
    <Snap
      name="Images Snap"
      snapId={IMAGES_SNAP_ID}
      port={IMAGES_SNAP_PORT}
      version={IMAGES_VERSION}
      testId="images"
    >
      <ShowImage />
      <ShowQr />
    </Snap>
  );
};
