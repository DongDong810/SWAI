import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Surface, withTheme } from '@draftbit/ui';
import { Text } from 'react-native';

const AnswerBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
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
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
            fontFamily: 'CarterOne_400Regular',
          }),
          dimensions.width
        )}
      >
        {props.age ?? ''}
      </Text>
    </Surface>
  );
};

export default withTheme(AnswerBlock);
