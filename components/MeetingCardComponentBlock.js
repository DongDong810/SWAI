import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { withTheme } from '@draftbit/ui';
import { ImageBackground, Text, View } from 'react-native';

const MeetingCardComponentBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          backgroundColor: theme.colors.custom_rgb255_255_255,
          borderRadius: 4,
          flexGrow: 1,
          flexShrink: 0,
          height: 86,
          marginBottom: 12,
          maxHeight: 86,
          minHeight: 86,
        },
        dimensions.width
      )}
    >
      {/* Horizontal Wrapper */}
      <View
        style={StyleSheet.applyWidth(
          { flexDirection: 'row', flexGrow: 1, flexShrink: 0 },
          dimensions.width
        )}
      >
        {/* Card Info Wrapper */}
        <View
          style={StyleSheet.applyWidth(
            {
              flexGrow: 1,
              flexShrink: 0,
              flexWrap: 'wrap',
              maxWidth: '80%',
              minWidth: '80%',
              paddingLeft: 9,
              paddingRight: 9,
              paddingTop: 9,
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
          {/* Meeting Description Wrapper */}
          <View
            style={StyleSheet.applyWidth(
              { flexGrow: 0, flexShrink: 0, flexWrap: 'wrap' },
              dimensions.width
            )}
          >
            {/* Meeting Description */}
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.custom_rgb95_90_83,
                  flexGrow: 0,
                  flexShrink: 0,
                  fontSize: 11,
                },
                dimensions.width
              )}
            >
              {'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum '}
            </Text>
          </View>
        </View>
        {/* Card Image Wrapper */}
        <View
          style={StyleSheet.applyWidth(
            {
              flexGrow: 1,
              flexShrink: 0,
              maxWidth: '20%',
              minWidth: '20%',
              width: '20%',
            },
            dimensions.width
          )}
        >
          <ImageBackground
            resizeMode={'cover'}
            source={{
              uri: 'https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3570&q=80',
            }}
            style={StyleSheet.applyWidth(
              { height: '100%', width: '100%' },
              dimensions.width
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default withTheme(MeetingCardComponentBlock);
