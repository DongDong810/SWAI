import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const Heading3Block = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        { marginBottom: 12, marginTop: 12 },
        dimensions.width
      )}
    >
      {/* Meetings TITLE */}
      <Text
        accessible={true}
        style={StyleSheet.applyWidth(
          {
            color: theme.colors.custom_rgb211_83_109,
            fontFamily: 'System',
            fontSize: 9,
            fontWeight: '500',
            letterSpacing: 2,
            marginTop: 6,
            textTransform: 'uppercase',
          },
          dimensions.width
        )}
      >
        {'MEETINGS'}
      </Text>
    </View>
  );
};

export default withTheme(Heading3Block);
