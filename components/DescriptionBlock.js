import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const DescriptionBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        { flexGrow: 1, flexShrink: 0, marginTop: 12 },
        dimensions.width
      )}
    >
      {/* Description */}
      <Text
        accessible={true}
        style={StyleSheet.applyWidth(
          {
            color: theme.colors.custom_rgb95_90_83,
            fontSize: 12,
            textAlign: 'center',
          },
          dimensions.width
        )}
      >
        {
          'Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.'
        }
      </Text>
    </View>
  );
};

export default withTheme(DescriptionBlock);
