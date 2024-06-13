import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { withTheme } from '@draftbit/ui';
import { ImageBackground, View } from 'react-native';

const ProfileImageComponentBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignSelf: 'center',
          flexGrow: 1,
          flexShrink: 0,
          height: 96,
          justifyContent: 'center',
          marginTop: 30,
          width: 96,
        },
        dimensions.width
      )}
    >
      {/* Image — Goes Here */}
      <ImageBackground
        resizeMode={'cover'}
        source={Images.PeoplebitProfilePlaceholder}
        style={StyleSheet.applyWidth(
          { height: '100%', width: '100%' },
          dimensions.width
        )}
      />
    </View>
  );
};

export default withTheme(ProfileImageComponentBlock);
