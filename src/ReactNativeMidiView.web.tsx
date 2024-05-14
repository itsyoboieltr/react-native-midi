import * as React from 'react';

import { ReactNativeMidiViewProps } from './ReactNativeMidi.types';

export default function ReactNativeMidiView(props: ReactNativeMidiViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
