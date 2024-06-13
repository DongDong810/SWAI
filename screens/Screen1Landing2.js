import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const Screen1Landing2 = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasBottomSafeArea={false}
      hasTopSafeArea={true}
    >
      {/* Header Wrapper */}
      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center', height: 120, justifyContent: 'flex-end' },
          dimensions.width
        )}
      >
        {/* App Name  */}
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Mindful Mate'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.TextStyles(theme)['Mindful Mate'].style,
              {
                alignSelf: 'center',
                fontFamily: 'Pacifico_400Regular',
                fontSize: 60,
                textAlign: 'center',
              }
            ),
            dimensions.width
          )}
        >
          {'mindfulmate\n'}
        </Text>
      </View>
      {/* Content Wrapper */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexGrow: 0,
            flexShrink: 0,
            height: 360,
            paddingLeft: 12,
            paddingRight: 12,
            paddingTop: 40,
          },
          dimensions.width
        )}
      >
        <Image
          resizeMode={'contain'}
          source={Images.Landing}
          style={StyleSheet.applyWidth(
            { height: 270, width: 270 },
            dimensions.width
          )}
        />
      </View>
      {/* Footer Wrapper */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'stretch',
            backgroundColor: theme.colors.peoplebitOceanBlue,
            flex: 1,
            flexWrap: 'nowrap',
            gap: 0,
            justifyContent: 'space-between',
            paddingBottom: 20,
            paddingLeft: 12,
            paddingRight: 12,
          },
          dimensions.width
        )}
      >
        {/* Title */}
        <Text
          accessible={true}
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.background,
              fontFamily: 'PTSerif_700Bold',
              fontSize: 28,
              lineHeight: 50,
              marginTop: 10,
              paddingTop: 20,
              textAlign: 'center',
            },
            dimensions.width
          )}
        >
          {'Make your profile\n and \nshare!\n'}
        </Text>
        {/* Bottom Wrapper */}
        <View>
          {/* Button Solid */}
          <Button
            iconPosition={'left'}
            onPress={() => {
              try {
                navigation.navigate('Auth');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors.background,
                borderRadius: 8,
                color: theme.colors.peoplebitDarkEmeraldGreen,
                fontFamily: 'Inter_500Medium',
                fontSize: 16,
                height: 50,
                marginBottom: 18,
                textAlign: 'center',
              },
              dimensions.width
            )}
            title={'Login'}
          >
            {'Sign Up'}
          </Button>
          {/* Button Solid */}
          <Button
            iconPosition={'left'}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors.background,
                borderRadius: 8,
                color: theme.colors.peoplebitDarkEmeraldGreen,
                fontFamily: 'Inter_500Medium',
                fontSize: 16,
                height: 50,
                marginBottom: 18,
                textAlign: 'center',
              },
              dimensions.width
            )}
            title={'Sign Up'}
          >
            {'Sign Up'}
          </Button>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(Screen1Landing2);
