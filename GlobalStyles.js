import * as StyleSheet from './utils/StyleSheet';

import Breakpoints from './utils/Breakpoints';

export const CheckboxRowStyles = theme =>
  StyleSheet.create({
    'Checkbox Row': { style: { minHeight: 50 }, props: {} },
  });

export const ImageBackgroundStyles = theme =>
  StyleSheet.create({ 'Image Background': { style: { flex: 1 }, props: {} } });

export const AccordionGroupStyles = theme =>
  StyleSheet.create({
    Accordion: {
      style: {
        fontSize: 16,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 8,
      },
      props: {},
    },
  });

export const TextInputStyles = theme =>
  StyleSheet.create({
    'Text Area': {
      style: {
        borderBottomWidth: 1,
        borderColor: theme.colors.divider,
        borderLeftWidth: 1,
        borderRadius: 8,
        borderRightWidth: 1,
        borderTopWidth: 1,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 8,
      },
      props: {},
    },
    'Text Input': {
      style: {
        borderBottomWidth: 1,
        borderColor: theme.colors.divider,
        borderLeftWidth: 1,
        borderRadius: 8,
        borderRightWidth: 1,
        borderTopWidth: 1,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 8,
      },
      props: {},
    },
  });

export const TableStyles = theme =>
  StyleSheet.create({ Table: { style: { flex: 1 }, props: {} } });

export const TableCellStyles = theme =>
  StyleSheet.create({
    'Table Cell': { style: { flex: 1, flexDirection: 'row' }, props: {} },
  });

export const SurfaceStyles = theme =>
  StyleSheet.create({ Surface: { style: { minHeight: 40 }, props: {} } });

export const TextStyles = theme =>
  StyleSheet.create({
    'Hello!': { style: {}, props: {} },
    'Mindful Mate': {
      style: {
        color: theme.colors.peoplebitDarkBlue,
        fontFamily: 'PTSerif_700Bold',
        fontSize: 32,
      },
      props: {},
    },
    Text: { style: { color: theme.colors.strong }, props: {} },
    dff: {
      style: {
        color: theme.colors.background,
        fontFamily: 'PTSerif_700Bold',
        fontSize: 28,
        lineHeight: 50,
        marginTop: 15,
        textAlign: 'center',
      },
      props: {},
    },
  });

export const NumberInputStyles = theme =>
  StyleSheet.create({
    'Number Input': {
      style: {
        borderBottomWidth: 1,
        borderColor: theme.colors.divider,
        borderLeftWidth: 1,
        borderRadius: 8,
        borderRightWidth: 1,
        borderTopWidth: 1,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 8,
      },
      props: {},
    },
  });

export const ImageStyles = theme =>
  StyleSheet.create({
    Image: { style: { height: 100, width: 100 }, props: {} },
  });

export const SVGStyles = theme =>
  StyleSheet.create({ SVG: { style: { height: 100, width: 100 }, props: {} } });

export const PinInputStyles = theme =>
  StyleSheet.create({
    'Pin Input': {
      style: {
        alignItems: 'center',
        borderColor: theme.colors.medium,
        borderRadius: 5,
        borderWidth: 1,
        color: theme.colors.strong,
        flex: 1,
        fontSize: 25,
        justifyContent: 'center',
        marginLeft: 5,
        marginRight: 5,
        maxHeight: 70,
        maxWidth: 70,
        padding: 5,
      },
      props: {},
    },
  });

export const FetchStyles = theme =>
  StyleSheet.create({ Fetch: { style: { minHeight: 40 }, props: {} } });

export const ActionSheetItemStyles = theme =>
  StyleSheet.create({
    'Action Sheet Item': { style: { textAlign: 'center' }, props: {} },
  });

export const SliderStyles = theme =>
  StyleSheet.create({
    Slider: { style: { marginLeft: 12, marginRight: 12 }, props: {} },
  });
