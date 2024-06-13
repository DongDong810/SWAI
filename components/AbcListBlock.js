import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Circle,
  SimpleStyleFlatList,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text } from 'react-native';

const AbcListBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [alphabets, setAlphabets] = React.useState([]);
  const [selctedAlphabet, setSelctedAlphabet] = React.useState('');
  const FilterList = (list, queryID) => {
    console.log(list);
    console.log(queryID);
    const newList = list.filter(item => item.fields.UserID.includes(queryID));
    return newList;
  };

  return (
    <SimpleStyleFlatList
      data={alphabets}
      inverted={false}
      keyExtractor={(listData, index) =>
        listData?.id ?? listData?.uuid ?? index.toString()
      }
      keyboardShouldPersistTaps={'never'}
      listKey={'dNzHEJTr'}
      nestedScrollEnabled={false}
      numColumns={1}
      onEndReachedThreshold={0.5}
      renderItem={({ item, index }) => {
        const listData = item;
        return (
          <Touchable
            onPress={() => {
              try {
                setSelctedAlphabet(listData);
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
          >
            {/* selected */}
            <>
              {!(selctedAlphabet === listData) ? null : (
                <Circle bgColor={theme.colors['Social Orange']} size={33}>
                  {/* alphabet */}
                  <Text
                    accessible={true}
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color_2'],
                        fontFamily: 'Poppins_500Medium',
                        fontSize: 14,
                        lineHeight: 20,
                        opacity: 1,
                      },
                      dimensions.width
                    )}
                  >
                    {listData}
                  </Text>
                </Circle>
              )}
            </>
            {/* unselected */}
            <>
              {!(selctedAlphabet !== listData) ? null : (
                <Circle size={33}>
                  {/* alphabet */}
                  <Text
                    accessible={true}
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color_30'],
                        fontFamily: 'Poppins_500Medium',
                        fontSize: 14,
                        lineHeight: 20,
                        opacity: 1,
                      },
                      dimensions.width
                    )}
                  >
                    {listData}
                  </Text>
                </Circle>
              )}
            </>
          </Touchable>
        );
      }}
      horizontal={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={StyleSheet.applyWidth(
        {
          alignItems: 'flex-end',
          alignSelf: 'auto',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          position: 'relative',
        },
        dimensions.width
      )}
    />
  );
};

export default withTheme(AbcListBlock);
