import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, Surface, Touchable, withTheme } from '@draftbit/ui';
import { View } from 'react-native';

const RowOfIconsComponentBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        { flexGrow: 1, flexShrink: 0, paddingLeft: 16, paddingRight: 16 },
        dimensions.width
      )}
    >
      {/* Horizontal Wrapper */}
      <View
        style={StyleSheet.applyWidth(
          {
            flexDirection: 'row',
            flexGrow: 1,
            flexShrink: 0,
            justifyContent: 'space-evenly',
            marginBottom: 12,
            marginTop: 12,
          },
          dimensions.width
        )}
      >
        <Touchable>
          {/* Surface 3 */}
          <Surface
            elevation={3}
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderRadius: 64,
                height: 48,
                justifyContent: 'center',
                width: 48,
              },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors.strong}
              name={'Entypo/calendar'}
              size={16}
              style={StyleSheet.applyWidth(
                { height: 32, width: 32 },
                dimensions.width
              )}
            />
          </Surface>
        </Touchable>

        <Touchable>
          {/* Surface 3 */}
          <Surface
            elevation={3}
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderRadius: 64,
                height: 48,
                justifyContent: 'center',
                width: 48,
              },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors.strong}
              name={'Entypo/calendar'}
              size={16}
              style={StyleSheet.applyWidth(
                { height: 32, width: 32 },
                dimensions.width
              )}
            />
          </Surface>
        </Touchable>

        <Touchable>
          {/* Surface 3 */}
          <Surface
            elevation={3}
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderRadius: 64,
                height: 48,
                justifyContent: 'center',
                width: 48,
              },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors.strong}
              name={'Entypo/calendar'}
              size={16}
              style={StyleSheet.applyWidth(
                { height: 32, width: 32 },
                dimensions.width
              )}
            />
          </Surface>
        </Touchable>

        <Touchable>
          {/* Surface 3 */}
          <Surface
            elevation={3}
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderRadius: 64,
                height: 48,
                justifyContent: 'center',
                width: 48,
              },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors.strong}
              name={'Entypo/calendar'}
              size={16}
              style={StyleSheet.applyWidth(
                { height: 32, width: 32 },
                dimensions.width
              )}
            />
          </Surface>
        </Touchable>
      </View>
    </View>
  );
};

export default withTheme(RowOfIconsComponentBlock);
