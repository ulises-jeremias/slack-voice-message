import download from 'downloadjs';
import format from 'date-fns/format';
import MicRecorder from 'mic-recorder-to-mp3';

import { addStyles } from './styles';
import { createButton, createStopButton } from './elem';

const run = () => {
	addStyles();

	const buttons = document.querySelector('.ql-buttons');

	if (!buttons) {
		return;
	}

	const hasFormattingButton = buttons.querySelectorAll('button').length === 5;

  const recordButton = createButton(hasFormattingButton);
  const stopButton = createStopButton(hasFormattingButton);

  let recorder;

	recordButton.addEventListener('click', async () => {
		try {
			const stream = await navigator.mediaDevices.getUserMedia({
				audio: true,
				video: false
			});


			recorder = new MicRecorder({
        bitRate: 128
      });

      await recorder.start();

      buttons.append(stopButton);
      buttons.removeChild(recordButton);
		} catch (error) {
			console.error(error);
		}
  });

  stopButton.addEventListener('click', async () => {
    try {
      recorder.stop();

      const [buffer, blob] = await recorder.getMp3();
      const timestamp = format(new Date(), "yyyy-MM-dd 'at' HH.mm.ss");
      const name = `Voice Recording ${timestamp}.mp3`;

      download(blob, name, 'audio/mp3');

      buttons.append(recordButton);
      buttons.removeChild(stopButton);
    } catch (error) {
      console.log(error);
    }
  })

  buttons.append(recordButton);
};

window.addEventListener('load', () => {
	// Slack inserts formatting button async after load, so we'll need to wait for that
	setTimeout(run, 1000);
});
