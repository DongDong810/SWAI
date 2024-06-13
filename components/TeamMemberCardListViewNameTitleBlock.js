import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { CircleImage, Icon, Surface, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const TeamMemberCardListViewNameTitleBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <Surface
      elevation={3}
      style={StyleSheet.applyWidth(
        {
          backgroundColor: theme.colors.background,
          borderRadius: 3,
          justifyContent: 'center',
          marginBottom: 6,
          minHeight: 54,
          paddingLeft: 9,
          paddingRight: 9,
        },
        dimensions.width
      )}
    >
      {/* WORK AROUND Flex row Needed */}
      <View
        style={StyleSheet.applyWidth(
          { borderRadius: 4, flexDirection: 'row' },
          dimensions.width
        )}
      >
        {/* Employee Image */}
        <CircleImage
          size={36}
          source={{
            uri: 'https://images.unsplash.com/photo-1611695434398-4f4b330623e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3456&q=80',
          }}
        />
        {/* Employee Info Wrapper */}
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
          {/* User Name ~ */}
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
          {/* Job Title ~ */}
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
        {/* WORK AROUND Flex Layout Needed */}
        <View
          style={StyleSheet.applyWidth(
            { justifyContent: 'center' },
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
    </Surface>
  );
};

export default withTheme(TeamMemberCardListViewNameTitleBlock);
