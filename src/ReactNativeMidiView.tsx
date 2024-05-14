import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ReactNativeMidiViewProps } from './ReactNativeMidi.types';

const NativeView: React.ComponentType<ReactNativeMidiViewProps> =
  requireNativeViewManager('ReactNativeMidi');

export default function ReactNativeMidiView(props: ReactNativeMidiViewProps) {
  return <NativeView {...props} />;
}
