import React from 'react';
import '~/mdx-layout/dist/icons.css'
import { Button } from '../index';
import { storyLayout } from '~/layout';

export default storyLayout;

const styles = {
  button: {
    margin: '.25rem',
  },
};

export const text = () => (
  <div>
    <Button style={styles.button}>Default</Button>
    <Button style={styles.button} icon="camera">
      Default
    </Button>
    <Button style={styles.button} loading={true}>
      Default
    </Button>
  </div>
);

export const outlined = () => (
  <div>
    <Button style={styles.button} mode="outlined">
      Outlined
    </Button>
    <Button style={styles.button} mode="outlined" icon="camera">
      Outlined
    </Button>
    <Button style={styles.button} mode="outlined" loading={true}>
      Outlined
    </Button>
  </div>
);

export const contained = () => (
  <div>
    <Button style={styles.button} mode="contained">
      Contained
    </Button>
    <Button style={styles.button} mode="contained" icon="camera">
      Contained
    </Button>
    <Button style={styles.button} mode="contained" loading={true}>
      Contained
    </Button>
  </div>
);
