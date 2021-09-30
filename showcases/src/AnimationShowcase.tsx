import React from 'react';
import { ProgressBar } from '~/progress-bar';
import { Text } from '~/typography';
import { animation } from '~/animation';
import { TouchableRipple } from '~/touchable-ripple';

export const AnimationShowcase = () => {
  const [progress, setProgress] = React.useState(0);

  return (
    <>
      <Text>{`The components' animation speed reflects the animation scale: ${animation.scale}.`}</Text>
      <TouchableRipple
        onPress={() => setProgress(1 - progress)}
        rippleColor="rgba(0, 0, 0, .32)"
        style={{
          width: '100%',
          height: '4rem',
          marginTop: '1rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Press to trigger</Text>
      </TouchableRipple>
      <ProgressBar
        progress={progress}
        style={{ width: '100%', height: '1rem', marginTop: '1rem' }}
      />
    </>
  );
};
