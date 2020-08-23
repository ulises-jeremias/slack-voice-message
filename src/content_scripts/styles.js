export const addStyles = () => {
	const style = document.createElement('style');
	style.innerHTML = `
		@keyframes slack-voice-popup-show-keyframes {
			0% {
				transform: translateY(8px) scale(0.96);
				opacity: 0;
			}

			100% {
				transform: translateY(0) scale(1);
				opacity: 1;
			}
		}

		@keyframes slack-voice-popup-hide-keyframes {
			0% {
				transform: translateY(0) scale(1);
				opacity: 1;
			}

			100% {
				transform: translateY(8px) scale(0.96);
				opacity: 0;
			}
		}

		@keyframes slack-voice-pulse-keyframes {
			0% {
				opacity: 1;
			}

			50% {
				opacity: 0.5;
			}

			100% {
				opacity: 1;
			}
		}

		.slack-voice-popup-show {
			animation: slack-voice-popup-show-keyframes 200ms cubic-bezier(0.645, 0.045, 0.355, 1);
		}

		.slack-voice-popup-hide {
			animation: slack-voice-popup-hide-keyframes 200ms cubic-bezier(0.645, 0.045, 0.355, 1);
		}

		.slack-voice-pulse {
			animation: slack-voice-pulse-keyframes 1.4s linear alternate infinite;
    }

    .recording-button {
      color: red;
      border-radius: 25px;
      animation-name: pulse;
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }

    @keyframes pulse {
      0%{
        box-shadow: 0px 0px 5px 0px rgba(173,0,0,.3);
      }
      65%{
        box-shadow: 0px 0px 5px 13px rgba(173,0,0,.3);
      }
      90%{
        box-shadow: 0px 0px 5px 13px rgba(173,0,0,0);
      }
    }
	`;

	document.head.append(style);
};
