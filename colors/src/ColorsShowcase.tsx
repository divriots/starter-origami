import React from 'react';
import { View, Text, ViewStyle, TextStyle } from 'react-native';
import { light, dark } from './index';
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
    marginBottom: '1rem',
    marginRight: '1rem',
  },
  box: {
    width: '6rem',
    height: '6rem',
    marginBottom: '.5rem',
    borderRadius: 4,
  },
  caption: {
    fontSize: 14,
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
        <View style={styles.wrapper as ViewStyle}>
          <View
            style={{ backgroundColor: color, ...styles.box } as ViewStyle}
          />
          <Text
            style={
              {
                ...styles.caption,
                color: colorScheme === 'light' ? '#000' : '#FFF',
              } as TextStyle
            }
          >
            {caption}
          </Text>
        </View>
      ))}
    </View>
  );
};

export const ThemeColorsShowcase = () => {
  const { dark } = useTheme();

  return <ColorsShowcase colorScheme={dark ? 'dark' : 'light'} />;
};
