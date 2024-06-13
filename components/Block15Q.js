import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  MultiSelectPicker,
  Picker,
  Surface,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';

const Block15Q = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [Ideal_1, setIdeal_1] = React.useState('');
  const [Ideal_2, setIdeal_2] = React.useState('');
  const [Ideal_input1, setIdeal_input1] = React.useState('');
  const [Ideal_input3, setIdeal_input3] = React.useState('');
  const [Ideal_input4, setIdeal_input4] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState(undefined);
  const troubleShooting = () => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules

    console.log(variable);
  };

  // testing
  const myFunctionName = authToken => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules

    console.log(authToken);
  };

  return (
    <View style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}>
      {/* Q1 */}
      <Text
        accessible={true}
        style={StyleSheet.applyWidth(
          {
            alignSelf: 'flex-start',
            color: theme.colors.peopleBitLightBrown,
            fontFamily: 'System',
            fontSize: 12,
            fontWeight: '500',
            marginBottom: 8,
            textAlign: 'auto',
          },
          dimensions.width
        )}
      >
        {'선호하는 나이대\n'}
      </Text>
      {/* A1 */}
      <Surface
        elevation={3}
        style={StyleSheet.applyWidth(
          {
            borderColor: theme.colors['Divider'],
            borderLeftWidth: 1,
            borderRadius: 8,
            borderRightWidth: 1,
            borderTopWidth: 1,
            marginBottom: 12,
          },
          dimensions.width
        )}
      >
        <Picker
          dropDownBackgroundColor={theme.colors.background}
          dropDownBorderColor={theme.colors.divider}
          dropDownBorderRadius={8}
          dropDownBorderWidth={1}
          dropDownTextColor={theme.colors.strong}
          iconSize={24}
          leftIconMode={'inset'}
          onValueChange={newPickerValue => {
            try {
              setIdeal_input1(newPickerValue);
            } catch (err) {
              console.error(err);
            }
          }}
          selectedIconColor={theme.colors.strong}
          selectedIconSize={20}
          type={'solid'}
          assistiveText={''}
          autoDismissKeyboard={true}
          mode={'native'}
          options={Ideal_1}
          placeholder={'Select an option'}
          selectedIconName={'AntDesign/checkcircleo'}
          value={Ideal_input1}
        />
      </Surface>
      {/* Q2 */}
      <Text
        accessible={true}
        style={StyleSheet.applyWidth(
          {
            alignSelf: 'flex-start',
            color: theme.colors.peopleBitLightBrown,
            fontFamily: 'System',
            fontSize: 12,
            fontWeight: '500',
            marginBottom: 8,
            textAlign: 'auto',
          },
          dimensions.width
        )}
      >
        {'내가 중요시하는 가치 3개만 고르기!'}
      </Text>
      {/* A2 */}
      <Surface
        elevation={3}
        style={StyleSheet.applyWidth(
          {
            borderColor: theme.colors['Divider'],
            borderLeftWidth: 1,
            borderRadius: 8,
            borderRightWidth: 1,
            borderTopWidth: 1,
            marginBottom: 12,
          },
          dimensions.width
        )}
      >
        <MultiSelectPicker
          dropDownBackgroundColor={theme.colors.background}
          dropDownBorderColor={theme.colors.divider}
          dropDownBorderRadius={8}
          dropDownBorderWidth={1}
          dropDownTextColor={theme.colors.strong}
          iconSize={24}
          leftIconMode={'inset'}
          onValueChange={newMultiSelectPickerValue => {
            const pickerValue = newMultiSelectPickerValue;
            try {
              setPickerValue(pickerValue);
            } catch (err) {
              console.error(err);
            }
          }}
          placeholder={'Select an option'}
          selectedIconColor={theme.colors.strong}
          selectedIconName={'Feather/check'}
          selectedIconSize={20}
          autoDismissKeyboard={false}
          options={Ideal_2}
          type={'underline'}
          value={pickerValue}
        />
      </Surface>
      {/* Q3 */}
      <Text
        accessible={true}
        style={StyleSheet.applyWidth(
          {
            color: theme.colors.peopleBitLightBrown,
            fontFamily: 'System',
            fontSize: 12,
            fontWeight: '500',
            marginBottom: 8,
            marginTop: 10,
          },
          dimensions.width
        )}
      >
        {'Must'}
      </Text>
      {/* A3 */}
      <Surface
        elevation={3}
        style={StyleSheet.applyWidth(
          {
            borderColor: theme.colors['Divider'],
            borderLeftWidth: 1,
            borderRadius: 8,
            borderRightWidth: 1,
            borderTopWidth: 1,
            marginBottom: 12,
          },
          dimensions.width
        )}
      >
        <TextInput
          autoCapitalize={'none'}
          autoCorrect={true}
          changeTextDelay={500}
          onChangeText={newTextInputValue => {
            try {
              setIdeal_input3(newTextInputValue);
            } catch (err) {
              console.error(err);
            }
          }}
          placeholder={'Enter a value...'}
          webShowOutline={true}
          {...GlobalStyles.TextInputStyles(theme)['Text Input'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.TextInputStyles(theme)['Text Input'].style,
            dimensions.width
          )}
          value={Ideal_input3}
        />
      </Surface>
      {/* A4 */}
      <Text
        accessible={true}
        style={StyleSheet.applyWidth(
          {
            color: theme.colors.peopleBitLightBrown,
            fontFamily: 'System',
            fontSize: 12,
            fontWeight: '500',
            marginBottom: 8,
            marginTop: 10,
          },
          dimensions.width
        )}
      >
        {'MustNot\n'}
      </Text>
      {/* A4 */}
      <Surface
        elevation={3}
        style={StyleSheet.applyWidth(
          {
            borderColor: theme.colors['Divider'],
            borderLeftWidth: 1,
            borderRadius: 8,
            borderRightWidth: 1,
            borderTopWidth: 1,
            marginBottom: 12,
          },
          dimensions.width
        )}
      >
        <TextInput
          autoCapitalize={'none'}
          autoCorrect={true}
          changeTextDelay={500}
          onChangeText={newTextInputValue => {
            try {
              setIdeal_input4(newTextInputValue);
            } catch (err) {
              console.error(err);
            }
          }}
          placeholder={'Enter a value...'}
          webShowOutline={true}
          {...GlobalStyles.TextInputStyles(theme)['Text Input'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.TextInputStyles(theme)['Text Input'].style,
            dimensions.width
          )}
          value={Ideal_input4}
        />
      </Surface>
      {/* Q5 */}
      <Text
        accessible={true}
        style={StyleSheet.applyWidth(
          {
            color: theme.colors.peopleBitLightBrown,
            fontFamily: 'System',
            fontSize: 12,
            fontWeight: '500',
            marginBottom: 8,
            marginTop: 10,
          },
          dimensions.width
        )}
      >
        {'MustNot\n'}
      </Text>
      {/* A5 */}
      <Surface
        elevation={3}
        style={StyleSheet.applyWidth(
          {
            borderColor: theme.colors['Divider'],
            borderLeftWidth: 1,
            borderRadius: 8,
            borderRightWidth: 1,
            borderTopWidth: 1,
            marginBottom: 12,
          },
          dimensions.width
        )}
      >
        <TextInput
          autoCapitalize={'none'}
          autoCorrect={true}
          changeTextDelay={500}
          onChangeText={newTextInputValue => {
            try {
              setIdeal_input4(newTextInputValue);
            } catch (err) {
              console.error(err);
            }
          }}
          placeholder={'Enter a value...'}
          webShowOutline={true}
          {...GlobalStyles.TextInputStyles(theme)['Text Input'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.TextInputStyles(theme)['Text Input'].style,
            dimensions.width
          )}
          value={Ideal_input4}
        />
      </Surface>
    </View>
  );
};

export default withTheme(Block15Q);
