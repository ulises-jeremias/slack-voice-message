export const createButton = (hasFormattingButton) => {
  const button = document.createElement('button');

  button.className = 'c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_medium c-texty_input__button';
	button.type = 'button';
	button.style.position = 'absolute';
	button.style.right = hasFormattingButton ? '166px' : '134px';
	button.innerHTML =
		'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mic"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>';

  return button;
};

export const createStopButton = (hasFormattingButton) => {
  const button = createButton(hasFormattingButton);
  button.className += ' recording-button';
  return button;
};