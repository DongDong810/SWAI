import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Button, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const CustomNavTitleActionBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View>
      {/* Horizontal */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'flex-end',
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
          dimensions.width
        )}
      >
        {/* Title Header Wrapper */}
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
            {'Post Item'}
          </Text>
        </View>
        {/* Button Wrapper */}
        <View
          style={StyleSheet.applyWidth(
            { flexGrow: 0, flexShrink: 0, paddingLeft: 5 },
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
            title={'Post'}
          >
            {'Sign Up'}
          </Button>
        </View>
      </View>
    </View>
  );
};

export default withTheme(CustomNavTitleActionBlock);
