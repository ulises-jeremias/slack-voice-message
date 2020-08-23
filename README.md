# slack-voice-message

Browser extension that allows to record voice messages in Slack!

<img src="./assets/example.png">

## Usage

After you install this extension, a new button with a microphone icon will be added to the message bar in Slack.

<img src="./assets/button.png" width="300">

1. Click the button with a microphone
2. Allow this extension to use your microphone (you only need to do this once)

<img src="./assets/recording.png" width="300">

3. Record your voice message
4. Drag & drop downloaded audio file into a dialog in Slack
5. Send message

Your recordings aren't sent anywhere and are only stored locally on your machine.

## Development

```sh
$ yarn
$ yarn dev
```

#### Using Chrome

After performing the steps described above,

1.  Open "chrome://extensions/" in Chrome
2.  Click "Load not packaged extension"
3.  Select any file in your add-on's root directory, `infovis/src/`

or run the following scripts,

```sh
$ yarn start:chrome # yarn start:chromium, for chromium
```

#### Using Firefox

```sh
$ yarn start:firefox # yarn start:nightly, for firefox nightly
```

## Extension build

```sh
$ yarn
$ yarn build
```
