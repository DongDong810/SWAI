import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Button, withTheme } from '@draftbit/ui';
import { useNavigation } from '@react-navigation/native';

const UniversalButton2Block2 = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <Button
      iconPosition={'left'}
      onPress={() => {
        try {
          navigation.navigate('Onboarding');
        } catch (err) {
          console.error(err);
        }
      }}
      title={'Get Started'}
      style={StyleSheet.applyWidth(
        {
          backgroundColor: theme.colors.background,
          borderRadius: 8,
          color: theme.colors.custom_rgb20_73_92,
          fontFamily: 'System',
          fontSize: 12,
          fontWeight: '500',
          marginBottom: 18,
          textAlign: 'center',
        },
        dimensions.width
      )}
    >
      {'Sign Up'}
    </Button>
  );
};

export default withTheme(UniversalButton2Block2);
