import React from 'react';
import { View, ViewStyle, TextStyle } from 'react-native';
import { Text, Subheading } from '~/typography';
import { light, dark } from '~/colors';
import { useTheme } from 'react-native-paper';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '1.2rem',
    marginRight: '1.2rem',
  },
  box: {
    width: '6rem',
    height: '6rem',
    marginBottom: '.5rem',
    borderRadius: 4,
  },
};

export const ColorsShowcase = ({
  colorScheme,
}: {
  colorScheme: 'light' | 'dark';
}) => {
  const colors = colorScheme === 'light' ? light : dark;

  return (
    <View style={styles.container as ViewStyle}>
      {Object.entries(colors).map(([caption, color]) => (
        <View key={caption} style={styles.wrapper as ViewStyle}>
          <View
            style={{ backgroundColor: color, ...styles.box } as ViewStyle}
          />
          <Subheading style={{ color: colors.text } as TextStyle}>
            {caption}
          </Subheading>
          <Text style={{ color: colors.backdrop } as TextStyle}>{color}</Text>
        </View>
      ))}
    </View>
  );
};

export const ThemeColorsShowcase = () => {
  const { dark } = useTheme();

  return <ColorsShowcase colorScheme={dark ? 'dark' : 'light'} />;
};
