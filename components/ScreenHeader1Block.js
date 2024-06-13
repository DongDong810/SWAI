import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const ScreenHeader1Block = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        { flexGrow: 0, flexShrink: 0, marginTop: 12 },
        dimensions.width
      )}
    >
      {/* Title */}
      <Text
        accessible={true}
        style={StyleSheet.applyWidth(
          {
            color: theme.colors.custom_rgb20_73_92,
            fontFamily: 'Merriweather_700Bold',
            fontSize: 27,
          },
          dimensions.width
        )}
      >
        {'Schedule'}
      </Text>
    </View>
  );
};

export default withTheme(ScreenHeader1Block);
