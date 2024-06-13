import React from 'react';
import * as MindfulAPIApi from '../apis/MindfulAPIApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Circle,
  Icon,
  ScreenContainer,
  SimpleStyleFlatList,
  SimpleStyleScrollView,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const Temp2Screen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [alphabets, setAlphabets] = React.useState([
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ]);
  const [selctedAlphabet, setSelctedAlphabet] = React.useState('A');
  const [switchValue, setSwitchValue] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');
  const FilterList = (list, queryID) => {
    console.log(list);
    console.log(queryID);
    const newList = list.filter(item => item.fields.UserID.includes(queryID));
    return newList;
  };

  return (
    <ScreenContainer
      hasSafeArea={true}
      hasTopSafeArea={false}
      scrollable={true}
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors['Background'], height: '100%' },
        dimensions.width
      )}
    >
      {/* Header Wrapper */}
      <View
        style={StyleSheet.applyWidth(
          {
            marginBottom: 12,
            marginTop: 18,
            paddingLeft: 12,
            paddingRight: 12,
          },
          dimensions.width
        )}
      >
        {/* Friends */}
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
          {'Friends'}
        </Text>
      </View>
      {/* Search Bar */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            backgroundColor: theme.colors['Custom #329fb3'],
            borderRadius: 24,
            flexDirection: 'row',
            height: 45,
            justifyContent: 'space-between',
            marginBottom: 12,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 5,
            paddingLeft: 20,
            paddingRight: 12,
          },
          dimensions.width
        )}
      >
        <Icon
          color={theme.colors['Border Color']}
          name={'AntDesign/search1'}
          size={20}
        />
        <View
          style={StyleSheet.applyWidth(
            { flex: 1, justifyContent: 'center' },
            dimensions.width
          )}
        >
          <TextInput
            autoCapitalize={'none'}
            autoCorrect={true}
            changeTextDelay={500}
            onChangeText={newTextInputValue => {
              try {
                setGlobalVariableValue({
                  key: 'queryID',
                  value: newTextInputValue,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            webShowOutline={true}
            editable={true}
            placeholder={'Search...'}
            placeholderTextColor={theme.colors['Border Color']}
            style={StyleSheet.applyWidth(
              {
                borderRadius: 8,
                color: theme.colors['Background'],
                fontFamily: 'Poppins_400Regular',
                fontSize: 12,
                marginLeft: 8,
                paddingBottom: 8,
                paddingLeft: 8,
                paddingRight: 8,
                paddingTop: 8,
              },
              dimensions.width
            )}
            value={Constants['queryID']}
          />
        </View>
      </View>

      <SimpleStyleScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
      >
        {/* Friends List */}
        <View
          style={StyleSheet.applyWidth(
            {
              flex: 1,
              flexDirection: 'row',
              paddingLeft: 20,
              paddingRight: 10,
            },
            dimensions.width
          )}
        >
          <MindfulAPIApi.FetchGetFriendsGET>
            {({ loading, error, data, refetchGetFriends }) => {
              const fetchData = data?.json;
              if (loading) {
                return <ActivityIndicator />;
              }

              if (error || data?.status < 200 || data?.status >= 300) {
                return <ActivityIndicator />;
              }

              return (
                <SimpleStyleFlatList
                  data={FilterList(fetchData?.records, Constants['queryID'])}
                  horizontal={false}
                  inverted={false}
                  keyExtractor={(listData, index) =>
                    listData?.id ?? listData?.uuid ?? index.toString()
                  }
                  keyboardShouldPersistTaps={'never'}
                  listKey={'XN0FRGVa'}
                  nestedScrollEnabled={false}
                  onEndReachedThreshold={0.5}
                  renderItem={({ item, index }) => {
                    const listData = item;
                    return (
                      <Touchable
                        onPress={() => {
                          try {
                            setGlobalVariableValue({
                              key: 'queryID',
                              value: listData?.fields?.UserID,
                            });
                            setGlobalVariableValue({
                              key: 'img',
                              value: listData?.fields?.Url,
                            });
                            navigation.navigate('FriendsProfileScreen');
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={StyleSheet.applyWidth(
                          { marginRight: 20 },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              paddingBottom: 14,
                              paddingTop: 14,
                              width: 132,
                            },
                            dimensions.width
                          )}
                        >
                          <View>
                            <Image
                              resizeMode={'cover'}
                              source={{ uri: `${listData?.fields?.Url}` }}
                              style={StyleSheet.applyWidth(
                                { borderRadius: 5, height: 130, width: 132 },
                                dimensions.width
                              )}
                            />
                          </View>

                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                flex: 1,
                                marginLeft: 14,
                                marginRight: 20,
                              },
                              dimensions.width
                            )}
                          >
                            {/* Name */}
                            <Text
                              accessible={true}
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors['Custom Color_2'],
                                  fontFamily: 'Poppins_500Medium',
                                  fontSize: 14,
                                  lineHeight: 20,
                                  marginTop: 8,
                                  opacity: 1,
                                },
                                dimensions.width
                              )}
                            >
                              {listData?.fields?.UserID}
                            </Text>
                            {/* Age */}
                            <Text
                              accessible={true}
                              numberOfLines={1}
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors['Custom Color_2'],
                                  fontFamily: 'Poppins_400Regular',
                                  fontSize: 12,
                                  lineHeight: 20,
                                  marginTop: 2,
                                  opacity: 0.5,
                                },
                                dimensions.width
                              )}
                            >
                              {listData?.fields?.Age}
                            </Text>
                          </View>
                        </View>
                      </Touchable>
                    );
                  }}
                  numColumns={2}
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}
                  style={StyleSheet.applyWidth(
                    { marginRight: 10 },
                    dimensions.width
                  )}
                />
              );
            }}
          </MindfulAPIApi.FetchGetFriendsGET>
        </View>
      </SimpleStyleScrollView>
      {/* Tabbar */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            backgroundColor: theme.colors['NFT_TIME_Light_Gray'],
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            flexDirection: 'row',
            height: 80,
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
              color={theme.colors['Medium']}
              name={'Feather/home'}
            />
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Medium'],
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
              color={theme.colors['Medium']}
              name={'Ionicons/chatbox-ellipses-outline'}
            />
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Medium'],
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
              color={theme.colors['Medium']}
              name={'Feather/users'}
            />
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Medium'],
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
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('UserProfileScreen');
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center' },
              dimensions.width
            )}
          >
            <Icon
              size={24}
              color={theme.colors['Medium']}
              name={'AntDesign/user'}
            />
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Medium'],
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
    </ScreenContainer>
  );
};

export default withTheme(Temp2Screen);
