import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Button, withTheme } from '@draftbit/ui';

const UpdatePrimaryButtonBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <Button
      iconPosition={'left'}
      title={'Get Started'}
      style={StyleSheet.applyWidth(
        {
          backgroundColor: theme.colors.custom_rgb50_159_179,
          borderRadius: 4,
          fontFamily: 'System',
          fontSize: 12,
          fontWeight: '500',
          marginTop: 12,
          maxHeight: 50,
          textAlign: 'center',
        },
        dimensions.width
      )}
    >
      {'Sign Up'}
    </Button>
  );
};

export default withTheme(UpdatePrimaryButtonBlock);
