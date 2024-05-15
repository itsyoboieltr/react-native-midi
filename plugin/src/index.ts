import { ConfigPlugin, withInfoPlist } from 'expo/config-plugins';

const withMidi: ConfigPlugin = (config) => {
  config = withInfoPlist(config, (config) => {
    config.modResults['UIBackgroundModes'] = ['audio'];
    return config;
  });
  return config;
};

export default withMidi;
