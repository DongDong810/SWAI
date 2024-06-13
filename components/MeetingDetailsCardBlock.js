import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const MeetingDetailsCardBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          backgroundColor: theme.colors.background,
          borderRadius: 4,
          flexGrow: 1,
          flexShrink: 0,
          maxHeight: 72,
          minHeight: 72,
        },
        dimensions.width
      )}
    >
      {/* Details Line Item Wrapper */}
      <View
        style={StyleSheet.applyWidth(
          {
            flexGrow: 1,
            flexShrink: 0,
            justifyContent: 'space-around',
            paddingBottom: 6,
            paddingLeft: 12,
            paddingRight: 12,
            paddingTop: 6,
          },
          dimensions.width
        )}
      >
        {/* Horizontal Wrapper */}
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row', flexGrow: 0, flexShrink: 0 },
            dimensions.width
          )}
        >
          {/* Front Wrapper */}
          <View
            style={StyleSheet.applyWidth(
              { flexGrow: 0, flexShrink: 0 },
              dimensions.width
            )}
          >
            {/* Icon Wrapper */}
            <View>
              <Icon
                color={theme.colors.strong}
                name={'Entypo/calendar'}
                size={12}
              />
            </View>
          </View>
          {/* Back Wrapper */}
          <View
            style={StyleSheet.applyWidth(
              { flexGrow: 1, flexShrink: 0, paddingLeft: 9 },
              dimensions.width
            )}
          >
            {/* Meeting Time */}
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.custom_rgb95_90_83,
                  fontFamily: 'System',
                  fontSize: 11,
                  fontWeight: '500',
                },
                dimensions.width
              )}
            >
              {'7:00 PM - 9:00 PM CT'}
            </Text>
          </View>
        </View>
        {/* Horizontal Wrapper */}
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row', flexGrow: 0, flexShrink: 0 },
            dimensions.width
          )}
        >
          {/* Front Wrapper */}
          <View
            style={StyleSheet.applyWidth(
              { flexGrow: 0, flexShrink: 0 },
              dimensions.width
            )}
          >
            {/* Icon Wrapper */}
            <View>
              <Icon
                color={theme.colors.strong}
                name={'Entypo/calendar'}
                size={12}
              />
            </View>
          </View>
          {/* Back Wrapper */}
          <View
            style={StyleSheet.applyWidth(
              { flexGrow: 1, flexShrink: 0, paddingLeft: 9 },
              dimensions.width
            )}
          >
            {/* Meeting Date */}
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.custom_rgb95_90_83,
                  fontFamily: 'System',
                  fontSize: 11,
                  fontWeight: '500',
                },
                dimensions.width
              )}
            >
              {'Saturday, January 14th 2021'}
            </Text>
          </View>
        </View>
        {/* Horizontal Wrapper */}
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row', flexGrow: 0, flexShrink: 0 },
            dimensions.width
          )}
        >
          {/* Front Wrapper */}
          <View
            style={StyleSheet.applyWidth(
              { flexGrow: 0, flexShrink: 0 },
              dimensions.width
            )}
          >
            {/* Icon Wrapper */}
            <View>
              <Icon
                color={theme.colors.strong}
                name={'Entypo/calendar'}
                size={12}
              />
            </View>
          </View>
          {/* Back Wrapper */}
          <View
            style={StyleSheet.applyWidth(
              { flexGrow: 1, flexShrink: 0, paddingLeft: 9 },
              dimensions.width
            )}
          >
            {/* Meeting Platform */}
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.custom_rgb95_90_83,
                  fontFamily: 'System',
                  fontSize: 11,
                  fontWeight: '500',
                },
                dimensions.width
              )}
            >
              {'Zoom'}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default withTheme(MeetingDetailsCardBlock);
