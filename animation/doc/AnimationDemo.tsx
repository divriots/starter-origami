import React, { useState, useEffect } from 'react';
import { ProgressBar } from '~/progress-bar';
import { Text } from '~/typography';
import { animation } from '~/animation'

export const AnimationDemo = () => {
	const [progress, setProgress] = useState(0);
	const interval = setInterval(() => setProgress(1 - progress), 2000);
	useEffect(() => () => clearInterval(interval));

	return <>
		<Text>{`The progress bar animation speed reflects the setting ${JSON.stringify(animation)}`}</Text>
		<ProgressBar progress={progress} style={{ width: '24rem', height: '1rem', marginTop: '1rem' }} />
	</>;
};