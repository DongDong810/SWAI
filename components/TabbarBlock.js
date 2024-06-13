import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const TabbarBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          backgroundColor: theme.colors['Custom Color_20'],
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          flexDirection: 'row',
          height: 100,
          justifyContent: 'space-around',
        },
        dimensions.width
      )}
    >
      {/* Feed */}
      <Touchable>
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center' },
            dimensions.width
          )}
        >
          <Icon
            size={24}
            color={theme.colors['Custom Color_27']}
            name={'Feather/home'}
          />
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom Color_26'],
                fontFamily: 'Poppins_400Regular',
                fontSize: 12,
                marginTop: 8,
              },
              dimensions.width
            )}
          >
            {'Feed'}
          </Text>
        </View>
      </Touchable>
      {/* Messages */}
      <Touchable>
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center' },
            dimensions.width
          )}
        >
          <Icon
            size={24}
            color={theme.colors['Custom Color_27']}
            name={'Ionicons/chatbox-ellipses-outline'}
          />
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom Color_26'],
                fontFamily: 'Poppins_400Regular',
                fontSize: 12,
                marginTop: 8,
              },
              dimensions.width
            )}
          >
            {'Messages'}
          </Text>
        </View>
      </Touchable>
      {/* Friends */}
      <Touchable>
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center' },
            dimensions.width
          )}
        >
          <Icon
            size={24}
            color={theme.colors['Social Orange']}
            name={'Feather/users'}
          />
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Social Orange'],
                fontFamily: 'Poppins_400Regular',
                fontSize: 12,
                marginTop: 8,
              },
              dimensions.width
            )}
          >
            {'Friends'}
          </Text>
        </View>
      </Touchable>
      {/* Profile */}
      <Touchable>
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center' },
            dimensions.width
          )}
        >
          <Icon
            size={24}
            color={theme.colors['Custom Color_27']}
            name={'AntDesign/user'}
          />
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom Color_26'],
                fontFamily: 'Poppins_400Regular',
                fontSize: 12,
                marginTop: 8,
              },
              dimensions.width
            )}
          >
            {'Profile'}
          </Text>
        </View>
      </Touchable>
    </View>
  );
};

export default withTheme(TabbarBlock);
