import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as MindfulAPIApi from '../apis/MindfulAPIApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  MultiSelectPicker,
  Picker,
  ScreenContainer,
  SimpleStyleKeyboardAwareScrollView,
  Surface,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const UserIdealTypeScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [Ideal_1, setIdeal_1] = React.useState([
    { label: '연상 (+6~+10)', value: '1' },
    { label: '연상 (+1~+5)', value: '2' },
    { label: '동갑', value: '3' },
    { label: '연하 (-1~-5)', value: '4' },
    { label: '연하 (-6~-10)', value: '5' },
  ]);
  const [Ideal_2, setIdeal_2] = React.useState([
    { label: '외모', value: '외모' },
    { label: '성격', value: '성격' },
    { label: '재력', value: '재력' },
    { label: '키', value: '키' },
    { label: '몸매', value: '몸매' },
    { label: '학력', value: '학력' },
    { label: '직업', value: '직업' },
    { label: '집안', value: '집안' },
  ]);
  const [Ideal_input1, setIdeal_input1] = React.useState('');
  const [Ideal_input10, setIdeal_input10] = React.useState([]);
  const [Ideal_input2, setIdeal_input2] = React.useState('');
  const [Ideal_input3, setIdeal_input3] = React.useState('');
  const [Ideal_input4, setIdeal_input4] = React.useState('');
  const [Ideal_input5, setIdeal_input5] = React.useState('');
  const [Ideal_input6, setIdeal_input6] = React.useState('');
  const [Ideal_input7, setIdeal_input7] = React.useState('');
  const [Ideal_input8, setIdeal_input8] = React.useState('');
  const [Ideal_input9, setIdeal_input9] = React.useState('');
  const [pinInputValue, setPinInputValue] = React.useState('"hello"');
  const [styledTextFieldValue, setStyledTextFieldValue] = React.useState('');
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
  const mindfulAPISaveIdealPOST = MindfulAPIApi.useSaveIdealPOST();
  const mindfulAPIUpdateIdealPATCH = MindfulAPIApi.useUpdateIdealPATCH();
  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      navigation.navigate('Onboarding', { screen: 'UserIdealTypeScreen' });
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
    >
      <SimpleStyleKeyboardAwareScrollView
        enableAutomaticScroll={false}
        enableOnAndroid={false}
        enableResetScrollToCoords={false}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
        viewIsInsideTabBar={false}
        style={StyleSheet.applyWidth(
          { paddingLeft: 16, paddingRight: 16 },
          dimensions.width
        )}
      >
        <MindfulAPIApi.FetchListIdealGET>
          {({ loading, error, data, refetchListIdeal }) => {
            const fetchData = data?.json;
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error || data?.status < 200 || data?.status >= 300) {
              return <ActivityIndicator />;
            }

            return (
              <>
                {/* Top */}
                <View
                  style={StyleSheet.applyWidth(
                    { marginTop: 18 },
                    dimensions.width
                  )}
                >
                  {/* Header Wrapper */}
                  <View>
                    {/* Setup */}
                    <Text
                      accessible={true}
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.peoplebitDarkEmeraldGreen,
                          fontFamily: 'Merriweather_700Bold',
                          fontSize: 27,
                        },
                        dimensions.width
                      )}
                    >
                      {'Ideal Type'}
                    </Text>
                  </View>
                  {/* 1~5 */}
                  <View
                    style={StyleSheet.applyWidth(
                      { marginTop: 20 },
                      dimensions.width
                    )}
                  >
                    {/* Q1 */}
                    <Text
                      accessible={true}
                      style={StyleSheet.applyWidth(
                        {
                          alignSelf: 'flex-start',
                          color: theme.colors.peopleBitLightBrown,
                          fontFamily: 'System',
                          fontSize: 12,
                          fontWeight: '700',
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
                          fontWeight: '700',
                          marginBottom: 8,
                          textAlign: 'auto',
                        },
                        dimensions.width
                      )}
                    >
                      {'선호하는 키 및 체형'}
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
                      <TextInput
                        autoCapitalize={'none'}
                        autoCorrect={true}
                        changeTextDelay={500}
                        onChangeText={newTextInputValue => {
                          try {
                            setIdeal_input2(newTextInputValue);
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        placeholder={'Enter a value...'}
                        webShowOutline={true}
                        {...GlobalStyles.TextInputStyles(theme)['Text Input']
                          .props}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.TextInputStyles(theme)['Text Input']
                            .style,
                          dimensions.width
                        )}
                        value={Ideal_input2}
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
                          fontWeight: '700',
                          marginBottom: 8,
                          marginTop: 10,
                        },
                        dimensions.width
                      )}
                    >
                      {'선호하는 얼굴상'}
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
                        {...GlobalStyles.TextInputStyles(theme)['Text Input']
                          .props}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.TextInputStyles(theme)['Text Input']
                            .style,
                          dimensions.width
                        )}
                        value={Ideal_input3}
                      />
                    </Surface>
                    {/* Q4 */}
                    <Text
                      accessible={true}
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.peopleBitLightBrown,
                          fontFamily: 'System',
                          fontSize: 12,
                          fontWeight: '700',
                          marginBottom: 8,
                          marginTop: 10,
                        },
                        dimensions.width
                      )}
                    >
                      {'선호하는 성격\n'}
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
                        {...GlobalStyles.TextInputStyles(theme)['Text Input']
                          .props}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.TextInputStyles(theme)['Text Input']
                            .style,
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
                          fontWeight: '700',
                          marginBottom: 8,
                          marginTop: 10,
                        },
                        dimensions.width
                      )}
                    >
                      {'선호하는 옷 스타일'}
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
                            setIdeal_input5(newTextInputValue);
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        placeholder={'Enter a value...'}
                        webShowOutline={true}
                        {...GlobalStyles.TextInputStyles(theme)['Text Input']
                          .props}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.TextInputStyles(theme)['Text Input']
                            .style,
                          dimensions.width
                        )}
                        value={Ideal_input5}
                      />
                    </Surface>
                  </View>
                  {/* 6~10 */}
                  <View
                    style={StyleSheet.applyWidth(
                      { marginTop: 8 },
                      dimensions.width
                    )}
                  >
                    {/* Q6 */}
                    <Text
                      accessible={true}
                      style={StyleSheet.applyWidth(
                        {
                          alignSelf: 'flex-start',
                          color: theme.colors.peopleBitLightBrown,
                          fontFamily: 'System',
                          fontSize: 12,
                          fontWeight: '700',
                          marginBottom: 8,
                          textAlign: 'auto',
                        },
                        dimensions.width
                      )}
                    >
                      {'선호하는 MBTI\n'}
                    </Text>
                    {/* A6 */}
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
                            setIdeal_input6(newTextInputValue);
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        placeholder={'Enter a value...'}
                        webShowOutline={true}
                        {...GlobalStyles.TextInputStyles(theme)['Text Input']
                          .props}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.TextInputStyles(theme)['Text Input']
                            .style,
                          dimensions.width
                        )}
                        value={Ideal_input6}
                      />
                    </Surface>
                    {/* Q7 */}
                    <Text
                      accessible={true}
                      style={StyleSheet.applyWidth(
                        {
                          alignSelf: 'flex-start',
                          color: theme.colors.peopleBitLightBrown,
                          fontFamily: 'System',
                          fontSize: 12,
                          fontWeight: '700',
                          marginBottom: 8,
                          textAlign: 'auto',
                        },
                        dimensions.width
                      )}
                    >
                      {'선호하는 데이트'}
                    </Text>
                    {/* A7 */}
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
                            setIdeal_input7(newTextInputValue);
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        placeholder={'Enter a value...'}
                        webShowOutline={true}
                        {...GlobalStyles.TextInputStyles(theme)['Text Input']
                          .props}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.TextInputStyles(theme)['Text Input']
                            .style,
                          dimensions.width
                        )}
                        value={Ideal_input7}
                      />
                    </Surface>
                    {/* Q8 */}
                    <Text
                      accessible={true}
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.peopleBitLightBrown,
                          fontFamily: 'System',
                          fontSize: 12,
                          fontWeight: '700',
                          marginBottom: 8,
                          marginTop: 10,
                        },
                        dimensions.width
                      )}
                    >
                      {'극호감 포인트'}
                    </Text>
                    {/* A8 */}
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
                            setIdeal_input8(newTextInputValue);
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        placeholder={'Enter a value...'}
                        webShowOutline={true}
                        {...GlobalStyles.TextInputStyles(theme)['Text Input']
                          .props}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.TextInputStyles(theme)['Text Input']
                            .style,
                          dimensions.width
                        )}
                        value={Ideal_input8}
                      />
                    </Surface>
                    {/* Q9 */}
                    <Text
                      accessible={true}
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.peopleBitLightBrown,
                          fontFamily: 'System',
                          fontSize: 12,
                          fontWeight: '700',
                          marginBottom: 8,
                          marginTop: 10,
                        },
                        dimensions.width
                      )}
                    >
                      {'정뚝떨 포인트\n'}
                    </Text>
                    {/* A9 */}
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
                            setIdeal_input9(newTextInputValue);
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        placeholder={'Enter a value...'}
                        webShowOutline={true}
                        {...GlobalStyles.TextInputStyles(theme)['Text Input']
                          .props}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.TextInputStyles(theme)['Text Input']
                            .style,
                          dimensions.width
                        )}
                        value={Ideal_input9}
                      />
                    </Surface>
                    {/* Q10 */}
                    <Text
                      accessible={true}
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.peopleBitLightBrown,
                          fontFamily: 'System',
                          fontSize: 12,
                          fontWeight: '700',
                          marginBottom: 8,
                          marginTop: 10,
                        },
                        dimensions.width
                      )}
                    >
                      {'내가 중요시하는 가치 (순서대로 3개)\n'}
                    </Text>
                    {/* A10 */}
                    <Surface
                      elevation={3}
                      style={StyleSheet.applyWidth(
                        {
                          borderColor: theme.colors['Divider'],
                          borderLeftWidth: 1,
                          borderRadius: 8,
                          borderRightWidth: 1,
                          borderTopWidth: 1,
                          marginBottom: 20,
                        },
                        dimensions.width
                      )}
                    >
                      <MultiSelectPicker
                        autoDismissKeyboard={true}
                        dropDownBackgroundColor={theme.colors.background}
                        dropDownBorderColor={theme.colors.divider}
                        dropDownBorderRadius={8}
                        dropDownBorderWidth={1}
                        dropDownTextColor={theme.colors.strong}
                        iconSize={24}
                        leftIconMode={'inset'}
                        onValueChange={newMultiSelectPickerValue => {
                          try {
                            setIdeal_input10(newMultiSelectPickerValue);
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        placeholder={'Select an option'}
                        selectedIconColor={theme.colors.strong}
                        selectedIconName={'Feather/check'}
                        selectedIconSize={20}
                        type={'solid'}
                        options={Ideal_2}
                        value={Ideal_input10}
                      />
                    </Surface>
                  </View>
                </View>
              </>
            );
          }}
        </MindfulAPIApi.FetchListIdealGET>
      </SimpleStyleKeyboardAwareScrollView>
      {/* Footer Wrapper */}
      <View
        style={StyleSheet.applyWidth(
          {
            marginBottom: 24,
            paddingBottom: 20,
            paddingLeft: 16,
            paddingRight: 16,
          },
          dimensions.width
        )}
      >
        {/* Update Profile Button */}
        <Button
          iconPosition={'left'}
          onPress={() => {
            const handler = async () => {
              try {
                const response = (
                  await mindfulAPISaveIdealPOST.mutateAsync({
                    age: Ideal_input1,
                    bad: Ideal_input9,
                    body: Ideal_input2,
                    character: Ideal_input4,
                    date: Ideal_input7,
                    face: Ideal_input3,
                    fashion: Ideal_input5,
                    good: Ideal_input8,
                    img: 'https://thumbs.dreamstime.com/z/man-finger-myself-icon-element-man-pointing-icon-mobile-concept-web-apps-detailed-man-finger-myself-icon-can-be-used-128895330.jpg',
                    mbti: Ideal_input6,
                    uage: '24',
                    userid: Constants['userID'],
                    userpw: Constants['userPW'],
                    values: Ideal_input10 + '',
                  })
                )?.json;
                (
                  await mindfulAPIUpdateIdealPATCH.mutateAsync({
                    age: 'age',
                    bad: 'bad',
                    body: 'body',
                    character: 'char',
                    date: 'date',
                    face: 'face',
                    fashion: 'fash',
                    good: 'good',
                    id: 'recyFvEY92sDFn6pl',
                    mbti: 'mbti',
                    userid: 'userid',
                    userpw: 'userpw',
                    values: 'values',
                  })
                )?.json;
                console.log(response);
                navigation.navigate('UserProfileScreen');
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors.peoplebitOceanBlue,
              borderRadius: 8,
              color: theme.colors.background,
              fontFamily: 'Inter_500Medium',
              fontSize: 15,
              height: 50,
              textAlign: 'center',
            },
            dimensions.width
          )}
          title={'Update Ideal Type\n'}
        >
          {'Sign Up'}
        </Button>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(UserIdealTypeScreen);
