import React from 'react';
import Copyright from '@theme-original/Footer/Copyright';
import type CopyrightType from '@theme/Footer/Copyright';
import type {WrapperProps} from '@docusaurus/types';
import Socials from '@site/src/components/SocialsIcons';

type Props = WrapperProps<typeof CopyrightType>;

export default function CopyrightWrapper(props: Props): JSX.Element {
  return (
    <>
      <div>
        <Socials />
      </div>
      <Copyright {...props} />
    </>
  );
}
