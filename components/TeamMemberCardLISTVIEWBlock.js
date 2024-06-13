import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { CircleImage, Icon, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const TeamMemberCardLISTVIEWBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          backgroundColor: theme.colors.background,
          borderRadius: 4,
          flexDirection: 'row',
          flexGrow: 1,
          flexShrink: 0,
          marginBottom: 6,
          minHeight: 54,
          paddingLeft: 9,
          paddingRight: 9,
        },
        dimensions.width
      )}
    >
      {/* Profile Image Wrapper */}
      <View
        style={StyleSheet.applyWidth(
          { flexGrow: 0, flexShrink: 0, justifyContent: 'center' },
          dimensions.width
        )}
      >
        <CircleImage
          size={36}
          source={{
            uri: 'https://images.unsplash.com/photo-1611695434398-4f4b330623e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3456&q=80',
          }}
        />
      </View>
      {/* Card Info Wrapper */}
      <View
        style={StyleSheet.applyWidth(
          {
            flexGrow: 1,
            flexShrink: 0,
            justifyContent: 'center',
            paddingLeft: 9,
          },
          dimensions.width
        )}
      >
        {/* Info Stacked Wrapper */}
        <View>
          {/* User Name */}
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.custom_rgb20_73_92,
                fontFamily: 'System',
                fontSize: 13,
                fontWeight: '600',
              },
              dimensions.width
            )}
          >
            {'James Franco'}
          </Text>
          {/* User Title */}
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.custom_rgb138_132_125,
                fontFamily: 'System',
                fontSize: 10,
                fontWeight: '400',
              },
              dimensions.width
            )}
          >
            {'Product Designer'}
          </Text>
        </View>
      </View>
      {/* Card CTA Wrapper */}
      <View
        style={StyleSheet.applyWidth(
          { flexGrow: 1, flexShrink: 0, justifyContent: 'center' },
          dimensions.width
        )}
      >
        {/* Icon Wrapper */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'flex-end', justifyContent: 'center' },
            dimensions.width
          )}
        >
          {/* Forward Icon */}
          <Icon
            color={theme.colors.custom_rgb172_172_172}
            name={'MaterialIcons/arrow-forward-ios'}
            size={15}
          />
        </View>
      </View>
    </View>
  );
};

export default withTheme(TeamMemberCardLISTVIEWBlock);
