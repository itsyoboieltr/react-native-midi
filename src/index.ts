import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ReactNativeMidi.web.ts
// and on native platforms to ReactNativeMidi.ts
import ReactNativeMidiModule from './ReactNativeMidiModule';
import ReactNativeMidiView from './ReactNativeMidiView';
import { ChangeEventPayload, ReactNativeMidiViewProps } from './ReactNativeMidi.types';

// Get the native constant value.
export const PI = ReactNativeMidiModule.PI;

export function hello(): string {
  return ReactNativeMidiModule.hello();
}

export async function setValueAsync(value: string) {
  return await ReactNativeMidiModule.setValueAsync(value);
}

const emitter = new EventEmitter(ReactNativeMidiModule ?? NativeModulesProxy.ReactNativeMidi);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ReactNativeMidiView, ReactNativeMidiViewProps, ChangeEventPayload };
