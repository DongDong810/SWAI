import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const Heading1Block = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        { alignItems: 'center', flexGrow: 1, flexShrink: 0, marginTop: 12 },
        dimensions.width
      )}
    >
      {/* Employee Name ~  */}
      <Text
        accessible={true}
        style={StyleSheet.applyWidth(
          {
            color: theme.colors.custom_rgb20_73_92,
            fontFamily: 'System',
            fontSize: 15,
            fontWeight: '600',
          },
          dimensions.width
        )}
      >
        {null}
      </Text>
      {/* Job Title ~  */}
      <Text
        accessible={true}
        style={StyleSheet.applyWidth(
          {
            color: theme.colors.custom_rgb211_83_109,
            fontSize: 10,
            letterSpacing: 2,
            marginTop: 6,
            textTransform: 'uppercase',
          },
          dimensions.width
        )}
      >
        {null}
      </Text>
      {/* Description ~  */}
      <Text
        accessible={true}
        style={StyleSheet.applyWidth(
          {
            color: theme.colors.custom_rgb95_90_83,
            fontSize: 12,
            marginTop: 12,
            textAlign: 'center',
          },
          dimensions.width
        )}
      >
        {null}
      </Text>
      {/* Location ~  */}
      <Text
        accessible={true}
        style={StyleSheet.applyWidth(
          {
            color: theme.colors.custom_rgb138_132_125,
            fontSize: 9,
            marginTop: 6,
            textAlign: 'center',
          },
          dimensions.width
        )}
      >
        {null}
      </Text>
    </View>
  );
};

export default withTheme(Heading1Block);
