import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Button, withTheme } from '@draftbit/ui';

const UniversalButton2Block = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <Button
      iconPosition={'left'}
      title={'Get Started'}
      style={StyleSheet.applyWidth(
        {
          backgroundColor: theme.colors.background,
          borderRadius: 8,
          color: theme.colors.custom_rgb20_73_92,
          fontFamily: 'System',
          fontWeight: '600',
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

export default withTheme(UniversalButton2Block);
