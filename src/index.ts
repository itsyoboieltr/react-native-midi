import ReactNativeMidiModule from './ReactNativeMidiModule';

export async function sendMidiMessage(message: number[]) {
  ReactNativeMidiModule.sendMidiMessage(message);
}
