import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  SimpleStyleFlatList,
  SimpleStyleSectionList,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { ImageBackground, Text, View } from 'react-native';

const ListBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <SimpleStyleFlatList
      data={props.listData ?? ''}
      horizontal={false}
      inverted={false}
      keyExtractor={(listData, index) =>
        listData?.id ?? listData?.uuid ?? index.toString()
      }
      keyboardShouldPersistTaps={'never'}
      listKey={'uwMQcUgn'}
      nestedScrollEnabled={false}
      numColumns={1}
      onEndReachedThreshold={0.5}
      renderItem={({ item, index }) => {
        const listData = item;
        return (
          <>
            <Touchable>
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
                    {/* Meeting Date Time ~ */}
                    <Text
                      accessible={true}
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.peoplebitSalmonRed,
                          fontFamily: 'Inter_400Regular',
                          fontSize: 10,
                          paddingBottom: 6,
                        },
                        dimensions.width
                      )}
                    >
                      {listData?.completed_on}
                    </Text>
                    {/* Meeting Name ~ */}
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
                      {listData?.title}
                    </Text>
                    {/* Details ~ */}
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
                      {'Level of effort measurements for the new idea. '}
                    </Text>
                  </View>
                  {/* Card Image Wrapper */}
                  <View>
                    {/* Card Image Asset */}
                    <ImageBackground
                      resizeMode={'cover'}
                      source={Images.Hobby}
                      style={StyleSheet.applyWidth(
                        { height: 100, width: 100 },
                        dimensions.width
                      )}
                    />
                  </View>
                </View>
              </Surface>
            </Touchable>
            <SimpleStyleSectionList
              estimatedItemSize={50}
              horizontal={false}
              inverted={false}
              keyboardShouldPersistTaps={'never'}
              listComponent={'FlatList'}
              nestedScrollEnabled={false}
              numColumns={1}
              onEndReachedThreshold={0.5}
              showsHorizontalScrollIndicator={true}
              showsVerticalScrollIndicator={true}
              stickyHeader={false}
              stickyHeaderHiddenOnScroll={false}
            />
          </>
        );
      }}
      showsHorizontalScrollIndicator={true}
      showsVerticalScrollIndicator={true}
      style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
    />
  );
};

export default withTheme(ListBlock);
