export const addStyles = () => {
	const style = document.createElement('style');
	style.innerHTML = `
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
