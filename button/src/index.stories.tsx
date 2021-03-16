import React from 'react';

import { Button } from './index';
import './icons.css';

export default {
  parameters: {
    layout: "centered",
  },
}

export const text = () => (
  <div>
    <Button>Default</Button>
    <Button icon="camera-alt">Default</Button>
    <Button loading={true}>Default</Button>
    <span className="fas fa-camera"></span>
    <i className="fas fa-camera"></i>
  </div>
);

export const outlined = () => <Button mode="outlined">Default</Button>;

export const contained = () => <Button mode="contained">Contained</Button>;

