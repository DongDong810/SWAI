import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as MindfulAPIApi from '../apis/MindfulAPIApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  ScreenContainer,
  SimpleStyleKeyboardAwareScrollView,
  SimpleStyleMasonryFlashList,
  Surface,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const FriendsIdealTypeScreen = props => {
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
    { label: '외모', value: '1' },
    { label: '성격', value: '2' },
    { label: '재력', value: '3' },
    { label: '키', value: '4' },
    { label: '몸매', value: '5' },
    { label: '학력', value: '6' },
    { label: '직업', value: '7' },
    { label: '집안', value: '8' },
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
  const [img, setImg] = React.useState([]);
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

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
    >
      <MindfulAPIApi.FetchFetchIdealGET userid={Constants['queryID']}>
        {({ loading, error, data, refetchFetchIdeal }) => {
          const fetchData = data?.json;
          if (loading) {
            return <ActivityIndicator />;
          }

          if (error || data?.status < 200 || data?.status >= 300) {
            return <ActivityIndicator />;
          }

          return (
            <SimpleStyleMasonryFlashList
              data={fetchData?.records}
              estimatedItemSize={50}
              keyExtractor={(masonryListData, index) =>
                masonryListData?.id ?? masonryListData?.uuid ?? index.toString()
              }
              listKey={'sRMJ6lJC'}
              numColumns={1}
              onEndReachedThreshold={0.5}
              renderItem={({ item, index }) => {
                const masonryListData = item;
                return (
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
                          elevation={0}
                          style={StyleSheet.applyWidth(
                            {
                              borderBottomWidth: 1,
                              borderColor: theme.colors['Secondary'],
                              borderLeftWidth: 1,
                              borderRadius: 8,
                              borderRightWidth: 1,
                              borderStyle: 'solid',
                              borderTopWidth: 1,
                              marginBottom: 12,
                              padding: 10,
                              paddingBottom: 1,
                              paddingLeft: 7,
                              paddingRight: 1,
                              paddingTop: 1,
                            },
                            dimensions.width
                          )}
                        >
                          <Text
                            accessible={true}
                            {...GlobalStyles.TextStyles(theme)['Text'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'].style,
                                { fontFamily: 'CarterOne_400Regular' }
                              ),
                              dimensions.width
                            )}
                          >
                            {masonryListData?.fields?.A1_Age}
                          </Text>
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
                          elevation={0}
                          style={StyleSheet.applyWidth(
                            {
                              borderBottomWidth: 1,
                              borderColor: theme.colors['Secondary'],
                              borderLeftWidth: 1,
                              borderRadius: 8,
                              borderRightWidth: 1,
                              borderStyle: 'solid',
                              borderTopWidth: 1,
                              marginBottom: 12,
                              padding: 10,
                              paddingBottom: 1,
                              paddingLeft: 7,
                              paddingRight: 1,
                              paddingTop: 1,
                            },
                            dimensions.width
                          )}
                        >
                          <Text
                            accessible={true}
                            {...GlobalStyles.TextStyles(theme)['Text'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'].style,
                                { fontFamily: 'CarterOne_400Regular' }
                              ),
                              dimensions.width
                            )}
                          >
                            {masonryListData?.fields?.A2_Body}
                          </Text>
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
                          elevation={0}
                          style={StyleSheet.applyWidth(
                            {
                              borderBottomWidth: 1,
                              borderColor: theme.colors['Secondary'],
                              borderLeftWidth: 1,
                              borderRadius: 8,
                              borderRightWidth: 1,
                              borderStyle: 'solid',
                              borderTopWidth: 1,
                              marginBottom: 12,
                              padding: 10,
                              paddingBottom: 1,
                              paddingLeft: 7,
                              paddingRight: 1,
                              paddingTop: 1,
                            },
                            dimensions.width
                          )}
                        >
                          <Text
                            accessible={true}
                            {...GlobalStyles.TextStyles(theme)['Text'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'].style,
                                { fontFamily: 'CarterOne_400Regular' }
                              ),
                              dimensions.width
                            )}
                          >
                            {masonryListData?.fields?.A3_Face}
                          </Text>
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
                          elevation={0}
                          style={StyleSheet.applyWidth(
                            {
                              borderBottomWidth: 1,
                              borderColor: theme.colors['Secondary'],
                              borderLeftWidth: 1,
                              borderRadius: 8,
                              borderRightWidth: 1,
                              borderStyle: 'solid',
                              borderTopWidth: 1,
                              marginBottom: 12,
                              padding: 10,
                              paddingBottom: 1,
                              paddingLeft: 7,
                              paddingRight: 1,
                              paddingTop: 1,
                            },
                            dimensions.width
                          )}
                        >
                          <Text
                            accessible={true}
                            {...GlobalStyles.TextStyles(theme)['Text'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'].style,
                                { fontFamily: 'CarterOne_400Regular' }
                              ),
                              dimensions.width
                            )}
                          >
                            {masonryListData?.fields?.A4_Character}
                          </Text>
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
                          elevation={0}
                          style={StyleSheet.applyWidth(
                            {
                              borderBottomWidth: 1,
                              borderColor: theme.colors['Secondary'],
                              borderLeftWidth: 1,
                              borderRadius: 8,
                              borderRightWidth: 1,
                              borderStyle: 'solid',
                              borderTopWidth: 1,
                              marginBottom: 12,
                              padding: 10,
                              paddingBottom: 1,
                              paddingLeft: 7,
                              paddingRight: 1,
                              paddingTop: 1,
                            },
                            dimensions.width
                          )}
                        >
                          <Text
                            accessible={true}
                            {...GlobalStyles.TextStyles(theme)['Text'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'].style,
                                { fontFamily: 'CarterOne_400Regular' }
                              ),
                              dimensions.width
                            )}
                          >
                            {masonryListData?.fields?.A5_Fashion}
                          </Text>
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
                          elevation={0}
                          style={StyleSheet.applyWidth(
                            {
                              borderBottomWidth: 1,
                              borderColor: theme.colors['Secondary'],
                              borderLeftWidth: 1,
                              borderRadius: 8,
                              borderRightWidth: 1,
                              borderStyle: 'solid',
                              borderTopWidth: 1,
                              marginBottom: 12,
                              padding: 10,
                              paddingBottom: 1,
                              paddingLeft: 7,
                              paddingRight: 1,
                              paddingTop: 1,
                            },
                            dimensions.width
                          )}
                        >
                          <Text
                            accessible={true}
                            {...GlobalStyles.TextStyles(theme)['Text'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'].style,
                                { fontFamily: 'CarterOne_400Regular' }
                              ),
                              dimensions.width
                            )}
                          >
                            {masonryListData?.fields?.A6_MBTI}
                          </Text>
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
                          elevation={0}
                          style={StyleSheet.applyWidth(
                            {
                              borderBottomWidth: 1,
                              borderColor: theme.colors['Secondary'],
                              borderLeftWidth: 1,
                              borderRadius: 8,
                              borderRightWidth: 1,
                              borderStyle: 'solid',
                              borderTopWidth: 1,
                              marginBottom: 12,
                              padding: 10,
                              paddingBottom: 1,
                              paddingLeft: 7,
                              paddingRight: 1,
                              paddingTop: 1,
                            },
                            dimensions.width
                          )}
                        >
                          <Text
                            accessible={true}
                            {...GlobalStyles.TextStyles(theme)['Text'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'].style,
                                { fontFamily: 'CarterOne_400Regular' }
                              ),
                              dimensions.width
                            )}
                          >
                            {masonryListData?.fields?.A7_Date}
                          </Text>
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
                          elevation={0}
                          style={StyleSheet.applyWidth(
                            {
                              borderBottomWidth: 1,
                              borderColor: theme.colors['Secondary'],
                              borderLeftWidth: 1,
                              borderRadius: 8,
                              borderRightWidth: 1,
                              borderStyle: 'solid',
                              borderTopWidth: 1,
                              marginBottom: 12,
                              padding: 10,
                              paddingBottom: 1,
                              paddingLeft: 7,
                              paddingRight: 1,
                              paddingTop: 1,
                            },
                            dimensions.width
                          )}
                        >
                          <Text
                            accessible={true}
                            {...GlobalStyles.TextStyles(theme)['Text'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'].style,
                                { fontFamily: 'CarterOne_400Regular' }
                              ),
                              dimensions.width
                            )}
                          >
                            {masonryListData?.fields?.A8_Good}
                          </Text>
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
                          elevation={0}
                          style={StyleSheet.applyWidth(
                            {
                              borderBottomWidth: 1,
                              borderColor: theme.colors['Secondary'],
                              borderLeftWidth: 1,
                              borderRadius: 8,
                              borderRightWidth: 1,
                              borderStyle: 'solid',
                              borderTopWidth: 1,
                              marginBottom: 12,
                              padding: 10,
                              paddingBottom: 1,
                              paddingLeft: 7,
                              paddingRight: 1,
                              paddingTop: 1,
                            },
                            dimensions.width
                          )}
                        >
                          <Text
                            accessible={true}
                            {...GlobalStyles.TextStyles(theme)['Text'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'].style,
                                { fontFamily: 'CarterOne_400Regular' }
                              ),
                              dimensions.width
                            )}
                          >
                            {masonryListData?.fields?.A9_Bad}
                          </Text>
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
                          {'내가 중요시하는 가치 (순서대로 3개)'}
                        </Text>
                        {/* A10 */}
                        <Surface
                          elevation={0}
                          style={StyleSheet.applyWidth(
                            {
                              borderBottomWidth: 1,
                              borderColor: theme.colors['Secondary'],
                              borderLeftWidth: 1,
                              borderRadius: 8,
                              borderRightWidth: 1,
                              borderStyle: 'solid',
                              borderTopWidth: 1,
                              marginBottom: 20,
                              padding: 10,
                              paddingBottom: 1,
                              paddingLeft: 7,
                              paddingRight: 1,
                              paddingTop: 1,
                            },
                            dimensions.width
                          )}
                        >
                          <Text
                            accessible={true}
                            {...GlobalStyles.TextStyles(theme)['Text'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'].style,
                                { fontFamily: 'CarterOne_400Regular' }
                              ),
                              dimensions.width
                            )}
                          >
                            {masonryListData?.fields?.A10_Values}
                          </Text>
                        </Surface>
                      </View>
                    </View>
                  </SimpleStyleKeyboardAwareScrollView>
                );
              }}
              showsHorizontalScrollIndicator={true}
              showsVerticalScrollIndicator={true}
            />
          );
        }}
      </MindfulAPIApi.FetchFetchIdealGET>
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
            try {
              navigation.navigate('FriendsProfileScreen');
            } catch (err) {
              console.error(err);
            }
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
          title={'Back to Friends Profile\n'}
        >
          {'Sign Up'}
        </Button>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(FriendsIdealTypeScreen);
