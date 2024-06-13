import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { withTheme } from '@draftbit/ui';
import { View } from 'react-native';

const SetupScreenBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        { flexGrow: 1, flexShrink: 0 },
        dimensions.width
      )}
    >
      {/* Header Wrapper */}
      <View />
      {/* Content Wrapper */}
      <View />
      {/* Footer Wrapper */}
      <View />
    </View>
  );
};

export default withTheme(SetupScreenBlock);
