import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as MindfulAPIApi from '../apis/MindfulAPIApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import { parseBoolean } from '../utils';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  CircleImage,
  Icon,
  ScreenContainer,
  SimpleStyleFlatList,
  SimpleStyleScrollView,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const FriendsProfileScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [img, setImg] = React.useState(
    '{"https://v5.airtableusercontent.com/v3/u/29/29/1717228800000/Fw6RvrXgoDfdMLcIwwMxvA/xKhdhn250ypbRLzlgJ6wOrIkkL5pKV5poXIwAVmlCU7pR6g64t4A9sQmWSgAYfQDMBVs3CKOqwa10P0ZApH0l4a5w2nGnTvf6jfSEeCddWBM8cf-yuKMquOrKBoWwGWaNwlJzwhhX_z11p4Hd-prZw/UIU1TLcKmqiERadFXy1JoyJr9w0UcwvciB3CP4jAHBI"}'
  );

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
    >
      {/* Header Wrapper */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 16,
            paddingLeft: 12,
            paddingRight: 12,
            paddingTop: 16,
          },
          dimensions.width
        )}
      >
        {/* Back to my page */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              height: 48,
              justifyContent: 'space-evenly',
              marginBottom: 12,
              marginTop: 12,
              position: 'absolute',
              right: 12,
              width: 48,
            },
            dimensions.width
          )}
        >
          <View>
            <Touchable
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'queryID',
                    value: '',
                  });
                  navigation.navigate('FriendsListScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <Icon
                size={24}
                color={theme.colors['Custom Color']}
                name={'MaterialCommunityIcons/home-export-outline'}
              />
            </Touchable>
          </View>
        </View>

        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flexDirection: 'row', width: '80%' },
            dimensions.width
          )}
        >
          {/* User Profile Image - Styling */}
          <View
            style={StyleSheet.applyWidth(
              { height: 96, justifyContent: 'center', width: 96 },
              dimensions.width
            )}
          >
            <CircleImage size={96} source={{ uri: `${Constants['img']}` }} />
          </View>
          {/* User Info - Styling */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'flex-start', left: 15 },
              dimensions.width
            )}
          >
            {/* Name */}
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.peoplebitDarkEmeraldGreen,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 17,
                },
                dimensions.width
              )}
            >
              {Constants['queryID']}
            </Text>
            {/* Job */}
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.peoplebitSalmonRed,
                  fontFamily: 'Inter_400Regular',
                  fontSize: 12,
                  letterSpacing: 1.2,
                  marginTop: 6,
                  textTransform: 'uppercase',
                },
                dimensions.width
              )}
            >
              {'Student'}
            </Text>
            {/* Description */}
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.peoplebitEarthyBrown,
                  fontFamily: 'Inter_400Regular',
                  fontSize: 12,
                  marginTop: 12,
                  textAlign: 'center',
                },
                dimensions.width
              )}
            >
              {'Hello my name is '}
              {Constants['queryID']}
              {'!\n'}
            </Text>
            {/* Date of birth */}
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.medium,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 11,
                  letterSpacing: 1,
                  marginTop: 8,
                  textAlign: 'center',
                },
                dimensions.width
              )}
            >
              {'2001.01.01\n'}
            </Text>
          </View>
        </View>
      </View>
      {/* Content header */}
      <View
        style={StyleSheet.applyWidth(
          {
            borderColor: theme.colors.peoplebitLightGray,
            borderTopWidth: 2,
            flexGrow: 0,
            flexShrink: 0,
            paddingLeft: 16,
            paddingRight: 16,
          },
          dimensions.width
        )}
      >
        {/* Categories */}
        <Text
          accessible={true}
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.peoplebitSalmonRed,
              fontFamily: 'Inter_600SemiBold',
              fontSize: 14,
              letterSpacing: 1.2,
              marginBottom: 8,
              marginTop: 14,
              textTransform: 'uppercase',
            },
            dimensions.width
          )}
        >
          {'Categories'}
        </Text>
      </View>
      {/* Scroll Content Frame */}
      <SimpleStyleScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        style={StyleSheet.applyWidth(
          { paddingLeft: 16, paddingRight: 16 },
          dimensions.width
        )}
      >
        <MindfulAPIApi.FetchFetchCatGET>
          {({ loading, error, data, refetchFetchCat }) => {
            const fetchData = data?.json;
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error || data?.status < 200 || data?.status >= 300) {
              return <ActivityIndicator />;
            }

            return (
              <SimpleStyleFlatList
                data={fetchData?.records}
                inverted={false}
                keyExtractor={(listData, index) => listData}
                keyboardShouldPersistTaps={'never'}
                listKey={'Eg8aXWwb'}
                nestedScrollEnabled={false}
                numColumns={1}
                onEndReachedThreshold={0.5}
                renderItem={({ item, index }) => {
                  const listData = item;
                  return (
                    <Touchable
                      onPress={() => {
                        const handler = async () => {
                          console.log('Touchable ON_PRESS Start');
                          let error = null;
                          try {
                            console.log('Start ON_PRESS:0 IF');
                            if ('"Ideal Type"') {
                              navigation.navigate('FriendsIdealTypeScreen');
                              await refetchFetchCat();
                            } else {
                            }
                            console.log('Complete ON_PRESS:0 IF');
                          } catch (err) {
                            console.error(err);
                            error = err.message ?? err;
                          }
                          console.log(
                            'Touchable ON_PRESS Complete',
                            error ? { error } : 'no error'
                          );
                        };
                        handler();
                      }}
                    >
                      {/* Surface Elevation 10 */}
                      <Surface
                        elevation={3}
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: theme.colors.peoplebitWhite,
                            borderColor: theme.colors['Surface'],
                            borderLeftWidth: 1,
                            borderRadius: 10,
                            marginBottom: 12,
                            overflow: 'hidden',
                          },
                          dimensions.width
                        )}
                      >
                        {/* Block */}
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
                            {/* Name */}
                            <Text
                              accessible={true}
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors.peoplebitDarkEmeraldGreen,
                                  fontFamily: 'Inter_600SemiBold',
                                  fontSize: 18,
                                  marginBottom: 3,
                                  textTransform: 'capitalize',
                                },
                                dimensions.width
                              )}
                            >
                              {listData?.fields?.Category}
                            </Text>
                            {/* Details */}
                            <Text
                              accessible={true}
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors.peoplebitEarthyBrown,
                                  fontFamily: 'Inter_400Regular',
                                  fontSize: 12,
                                  marginTop: 2,
                                },
                                dimensions.width
                              )}
                            >
                              {listData?.fields?.['Short Text']}
                            </Text>
                          </View>

                          <View>
                            <Image
                              resizeMode={'cover'}
                              {...GlobalStyles.ImageStyles(theme)['Image']
                                .props}
                              source={{ uri: `${listData?.fields?.url_str}` }}
                              style={StyleSheet.applyWidth(
                                GlobalStyles.ImageStyles(theme)['Image'].style,
                                dimensions.width
                              )}
                            />
                          </View>
                        </View>
                      </Surface>
                    </Touchable>
                  );
                }}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
                horizontal={false}
                style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
              />
            );
          }}
        </MindfulAPIApi.FetchFetchCatGET>
      </SimpleStyleScrollView>
    </ScreenContainer>
  );
};

export default withTheme(FriendsProfileScreen);
