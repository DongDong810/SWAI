import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  ScreenContainer,
  Surface,
  TextField,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';

const Screen2Login = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [styledTextAreaValue, setStyledTextAreaValue] = React.useState('');
  const [styledTextAreaValue2, setStyledTextAreaValue2] = React.useState('');
  const [styledTextFieldValue, setStyledTextFieldValue] = React.useState('');
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');
  const [textInputValue3, setTextInputValue3] = React.useState('');
  // testing
  const myFunctionName = authToken => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules

    console.log(authToken);
  };

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
    >
      {/* Header Wrapper */}
      <View
        style={StyleSheet.applyWidth(
          { marginTop: 18, paddingLeft: 20, paddingRight: 20 },
          dimensions.width
        )}
      >
        {/* Welcome Text */}
        <Text
          accessible={true}
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.peoplebitDarkEmeraldGreen,
              fontFamily: 'Inter_700Bold',
              fontSize: 32,
              marginBottom: 25,
            },
            dimensions.width
          )}
        >
          {'Welcome!'}
        </Text>
      </View>
      {/* Content Wrapper */}
      <View
        style={StyleSheet.applyWidth(
          { paddingLeft: 20, paddingRight: 20 },
          dimensions.width
        )}
      >
        {/* ID */}
        <Text
          accessible={true}
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.peopleBitLightBrown,
              fontFamily: 'Inter_500Medium',
              fontSize: 12,
              marginBottom: 6,
              paddingTop: 12,
            },
            dimensions.width
          )}
        >
          {'What is your ID?\n'}
        </Text>
        {/* Surface 8 Elevation */}
        <Surface
          elevation={3}
          style={StyleSheet.applyWidth(
            {
              borderColor: theme.colors['Divider'],
              borderRadius: 8,
              borderTopWidth: 1,
              marginBottom: 12,
            },
            dimensions.width
          )}
        >
          {/* userID */}
          <TextField
            activeBorderColor={theme.colors.primary}
            autoCapitalize={'none'}
            autoCorrect={true}
            changeTextDelay={500}
            onChangeText={newUserIDValue => {
              try {
                setGlobalVariableValue({
                  key: 'userID',
                  value: newUserIDValue,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            underlineColor={theme.colors.light}
            webShowOutline={true}
            assistiveText={''}
            placeholder={'ID'}
            type={'solid'}
            value={Constants['userID'].toString()}
          />
        </Surface>
        {/* Password */}
        <Text
          accessible={true}
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.peopleBitLightBrown,
              fontFamily: 'Inter_500Medium',
              fontSize: 12,
              marginBottom: 6,
              paddingTop: 12,
            },
            dimensions.width
          )}
        >
          {'What is your password?'}
        </Text>
        {/* Surface 8 Elevation */}
        <Surface
          elevation={3}
          style={StyleSheet.applyWidth(
            {
              borderColor: theme.colors['Divider'],
              borderRadius: 8,
              borderTopWidth: 1,
              marginBottom: 12,
            },
            dimensions.width
          )}
        >
          {/* userPW */}
          <TextField
            activeBorderColor={theme.colors.primary}
            autoCapitalize={'none'}
            autoCorrect={true}
            changeTextDelay={500}
            onChangeText={newUserPWValue => {
              try {
                setGlobalVariableValue({
                  key: 'userPW',
                  value: newUserPWValue,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            underlineColor={theme.colors.light}
            webShowOutline={true}
            assistiveText={''}
            placeholder={'Password'}
            secureTextEntry={true}
            type={'solid'}
            value={Constants['userPW'].toString()}
          />
        </Surface>
        {/* Error Message */}
        <Text
          accessible={true}
          style={StyleSheet.applyWidth(
            { color: theme.colors.error, marginBottom: 18 },
            dimensions.width
          )}
        >
          {null}
        </Text>
      </View>
      {/* Footer Wrapper */}
      <View
        style={StyleSheet.applyWidth(
          {
            flexGrow: 1,
            flexShrink: 0,
            justifyContent: 'flex-end',
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
          },
          dimensions.width
        )}
      >
        {/* Login Button */}
        <Button
          iconPosition={'left'}
          onPress={() => {
            try {
              navigation.navigate('UserProfileScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors.peoplebitOceanBlue,
              borderRadius: 8,
              fontFamily: 'Inter_500Medium',
              fontSize: 15,
              height: 50,
              marginBottom: 24,
              marginTop: 12,
              maxHeight: 50,
              textAlign: 'center',
            },
            dimensions.width
          )}
          title={'Login'}
        >
          {'Sign Up'}
        </Button>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(Screen2Login);
