import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Button, withTheme } from '@draftbit/ui';
import { View } from 'react-native';

const ButtonSmallBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        { flexGrow: 1, flexShrink: 0, minWidth: 124, paddingLeft: 5 },
        dimensions.width
      )}
    >
      {/* Button Solid */}
      <Button
        iconPosition={'left'}
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors.custom_rgb50_159_179,
            borderRadius: 4,
            fontFamily: 'System',
            fontSize: 12,
            fontWeight: '500',
            maxHeight: 30,
            minHeight: 30,
            textAlign: 'center',
          },
          dimensions.width
        )}
        title={'Join Event'}
      >
        {'Sign Up'}
      </Button>
    </View>
  );
};

export default withTheme(ButtonSmallBlock);
