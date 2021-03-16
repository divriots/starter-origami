import React from 'react';

import { Button } from './index';
import './icons.css';

export default {
  parameters: {
    layout: 'centered',
  },
};

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
      Default
    </Button>
    <Button style={styles.button} mode="outlined" icon="camera">
      Default
    </Button>
    <Button style={styles.button} mode="outlined" loading={true}>
      Default
    </Button>
  </div>
);

export const contained = () => (
  <div>
    <Button style={styles.button} mode="contained">
      Default
    </Button>
    <Button style={styles.button} mode="contained" icon="camera">
      Default
    </Button>
    <Button style={styles.button} mode="contained" loading={true}>
      Default
    </Button>
  </div>
);
