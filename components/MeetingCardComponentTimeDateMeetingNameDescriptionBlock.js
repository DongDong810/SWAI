import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Surface, withTheme } from '@draftbit/ui';
import { ImageBackground, Text, View } from 'react-native';

const MeetingCardComponentTimeDateMeetingNameDescriptionBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <Surface
      elevation={3}
      style={StyleSheet.applyWidth(
        {
          backgroundColor: theme.colors.custom_rgb255_255_255,
          borderRadius: 4,
          marginBottom: 12,
        },
        dimensions.width
      )}
    >
      {/* WORKAROUND Flex row needed */}
      <View
        style={StyleSheet.applyWidth(
          { flexDirection: 'row' },
          dimensions.width
        )}
      >
        {/* Card Info Wrapper */}
        <View
          style={StyleSheet.applyWidth(
            {
              flexShrink: 1,
              paddingBottom: 8,
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 8,
              width: '100%',
            },
            dimensions.width
          )}
        >
          {/* Meeting Date Time */}
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.custom_rgb211_83_109,
                fontSize: 10,
                paddingBottom: 6,
              },
              dimensions.width
            )}
          >
            {'5:00 PM on January 5th, 2021'}
          </Text>
          {/* Meeting Name */}
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.custom_rgb20_73_92,
                fontFamily: 'System',
                fontSize: 18,
                fontWeight: '600',
                marginBottom: 3,
              },
              dimensions.width
            )}
          >
            {'Meeting Name'}
          </Text>

          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              { color: theme.colors.custom_rgb95_90_83, fontSize: 11 },
              dimensions.width
            )}
          >
            {'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum '}
          </Text>
        </View>
        {/* Card Image Asset */}
        <ImageBackground
          resizeMode={'cover'}
          source={{
            uri: 'https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3570&q=80',
          }}
          style={StyleSheet.applyWidth(
            { height: '100%', width: 100 },
            dimensions.width
          )}
        />
      </View>
    </Surface>
  );
};

export default withTheme(
  MeetingCardComponentTimeDateMeetingNameDescriptionBlock
);
