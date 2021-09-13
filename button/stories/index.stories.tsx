import React from 'react';
import { Button } from '@divriots/starter-origami/button';
import { storyLayout } from '@divriots/starter-origami/layout';

export default storyLayout;

const styles = {
  button: {
    margin: '.25rem',
  },
};

export const text = () => (
  <>
    <Button style={styles.button}>Default</Button>
    <Button style={styles.button} icon="camera">
      Default
    </Button>
    <Button style={styles.button} loading={true}>
      Default
    </Button>
  </>
);

export const outlined = () => (
  <>
    <Button style={styles.button} mode="outlined">
      Outlined
    </Button>
    <Button style={styles.button} mode="outlined" icon="camera">
      Outlined
    </Button>
    <Button style={styles.button} mode="outlined" loading={true}>
      Outlined
    </Button>
  </>
);

export const contained = () => (
  <>
    <Button style={styles.button} mode="contained">
      Contained
    </Button>
    <Button style={styles.button} mode="contained" icon="camera">
      Contained
    </Button>
    <Button style={styles.button} mode="contained" loading={true}>
      Contained
    </Button>
  </>
);
