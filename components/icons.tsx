import * as React from "react";

import { IconSvgProps } from "@/types";

export const Logo: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height="40"
    width="224"
    {...props}
  >
    
    <path fillRule="evenodd" clipRule="evenodd" d="M9.423 6.55h-.006l.006-.016v.016zm0 3.991v-3.99h1.202v4.53a5.808 5.808 0 01-1.97 1.119 7.29 7.29 0 01-2.394.39c-1.185 0-2.26-.262-3.205-.78A5.746 5.746 0 01.813 9.645C.267 8.721 0 7.691 0 6.545c0-1.147.273-2.176.813-3.1A5.785 5.785 0 013.056 1.28C4.007.762 5.082.5 6.278.5c.907 0 1.737.145 2.494.435a5.038 5.038 0 011.92 1.28l-.78.796c-.94-.93-2.131-1.392-3.578-1.392-.963 0-1.831.212-2.605.635a4.677 4.677 0 00-1.826 1.764c-.44.751-.662 1.592-.662 2.521 0 .93.223 1.765.662 2.51a4.764 4.764 0 001.815 1.765c.768.428 1.636.646 2.6.646 1.224 0 2.259-.307 3.105-.919zm13.825 1.948v-1.091h-7.146V6.985h6.144V5.916h-6.144V1.692h6.89V.606h-8.148V12.49h8.404zm12.033-1.085v1.085h-8.404V.606h8.148v1.086h-6.89v4.224h6.145v1.069h-6.145v4.413h7.146v.006zM40.174.606h-1.258V12.49h7.909v-1.085h-6.651V.606zm12.233 7.776v4.107h-1.24V8.382L46.418.606h1.34l4.075 6.674L55.908.606h1.258l-4.753 7.776h-.006zm22.442 4.107V.606h-1.242v5.299h-7.436V.606h-1.257V12.49h1.257V7.007h7.436v5.482h1.242zm6.545-.684a5.75 5.75 0 01-2.243-2.166c-.54-.918-.807-1.948-.807-3.089 0-1.14.267-2.17.807-3.089a5.788 5.788 0 012.243-2.165c.957-.528 2.02-.79 3.2-.79 1.18 0 2.238.262 3.184.78A5.794 5.794 0 0190.01 3.45c.545.924.812 1.954.812 3.1 0 1.147-.273 2.177-.812 3.1a5.795 5.795 0 01-2.232 2.166c-.946.523-2.004.779-3.184.779-1.18 0-2.243-.262-3.2-.79zm5.744-.969a4.598 4.598 0 001.78-1.764c.43-.752.646-1.592.646-2.522 0-.929-.217-1.77-.645-2.52a4.598 4.598 0 00-1.781-1.765c-.757-.423-1.609-.635-2.544-.635s-1.792.212-2.554.635a4.641 4.641 0 00-1.798 1.764c-.434.752-.651 1.592-.651 2.521 0 .93.217 1.77.65 2.522a4.641 4.641 0 001.799 1.764c.762.423 1.613.635 2.554.635.94 0 1.787-.212 2.544-.635zM95.575.606h-1.257V12.49h7.909v-1.085h-6.652V.606zm9.418 0h4.836c1.258 0 2.366.25 3.329.757a5.534 5.534 0 012.243 2.104c.534.902.796 1.926.796 3.083 0 1.158-.268 2.182-.796 3.084a5.497 5.497 0 01-2.243 2.104c-.963.506-2.071.757-3.329.757h-4.836V.606zm4.77 10.798c1.04 0 1.953-.206 2.732-.618a4.492 4.492 0 001.815-1.714c.428-.73.645-1.57.645-2.522 0-.951-.217-1.792-.645-2.52a4.493 4.493 0 00-1.815-1.715c-.779-.412-1.692-.618-2.732-.618h-3.512v9.707h3.512zM120.95.606h-1.258V12.49h1.258V.606zm14.476 0V12.49h-1.035l-7.636-9.64v9.64h-1.258V.606h1.035l7.653 9.64V.606h1.241zM148.35 6.55h-.006l.006-.016v.016zm0 3.991v-3.99h1.202v4.53a5.8 5.8 0 01-1.97 1.119 7.287 7.287 0 01-2.393.39c-1.186 0-2.26-.262-3.206-.78a5.741 5.741 0 01-2.243-2.165c-.546-.924-.813-1.954-.813-3.1 0-1.147.273-2.176.813-3.1a5.78 5.78 0 012.243-2.165c.952-.518 2.026-.78 3.222-.78.908 0 1.737.145 2.494.435a5.038 5.038 0 011.92 1.28l-.779.796c-.941-.93-2.132-1.392-3.579-1.392-.963 0-1.831.212-2.605.635a4.675 4.675 0 00-1.825 1.764c-.44.751-.663 1.592-.663 2.521 0 .93.223 1.765.663 2.51a4.759 4.759 0 001.814 1.765c.768.428 1.636.646 2.599.646 1.225 0 2.26-.307 3.106-.919zm18.918-3.99h.006v3.99c-.846.612-1.882.918-3.106.918-.963 0-1.831-.217-2.599-.645a4.768 4.768 0 01-1.815-1.764c-.439-.746-.662-1.581-.662-2.51 0-.93.223-1.77.662-2.522a4.677 4.677 0 011.826-1.764c.774-.423 1.642-.635 2.605-.635 1.447 0 2.638.462 3.578 1.392l.78-.796a5.053 5.053 0 00-1.921-1.28c-.756-.29-1.586-.435-2.493-.435-1.197 0-2.271.262-3.223.78a5.794 5.794 0 00-2.243 2.165c-.539.924-.812 1.953-.812 3.1 0 1.146.267 2.176.812 3.1a5.755 5.755 0 002.243 2.165c.947.518 2.021.78 3.206.78a7.31 7.31 0 002.394-.39 5.81 5.81 0 001.97-1.119v-4.53h-1.202v-.017l-.006.016zm10.831 2.12l2.716 3.818h1.369l-2.899-4.074c.868-.284 1.541-.746 2.009-1.386.473-.634.707-1.42.707-2.349 0-1.269-.434-2.265-1.292-2.988-.857-.724-2.048-1.086-3.562-1.086H172.7V12.49h1.258V8.721h3.189c.329 0 .646-.017.952-.05zm2.649-3.985c0 .935-.311 1.67-.935 2.187-.623.518-1.525.78-2.699.78h-3.156V1.696h3.156c1.18 0 2.076.262 2.699.774.624.517.935 1.28.935 2.215zm6.902 7.119a5.752 5.752 0 01-2.243-2.166c-.54-.918-.807-1.948-.807-3.089 0-1.14.267-2.17.807-3.089a5.79 5.79 0 012.243-2.165c.957-.528 2.02-.79 3.2-.79 1.18 0 2.238.262 3.184.78a5.8 5.8 0 012.232 2.164c.545.924.812 1.954.812 3.1 0 1.147-.272 2.177-.812 3.1a5.8 5.8 0 01-2.232 2.166c-.946.523-2.004.779-3.184.779-1.18 0-2.243-.262-3.2-.79zm5.744-.969a4.6 4.6 0 001.781-1.764c.428-.752.646-1.592.646-2.522 0-.929-.218-1.77-.646-2.52a4.6 4.6 0 00-1.781-1.765c-.757-.423-1.609-.635-2.544-.635s-1.792.212-2.554.635a4.638 4.638 0 00-1.798 1.764c-.434.752-.651 1.592-.651 2.521 0 .93.217 1.77.651 2.522a4.638 4.638 0 001.798 1.764c.762.423 1.614.635 2.554.635.941 0 1.787-.212 2.544-.635zm7.074-10.23v6.807c0 1.687.428 2.967 1.291 3.852h.006c.862.885 2.065 1.324 3.601 1.324s2.733-.44 3.59-1.324c.851-.88 1.28-2.165 1.28-3.852V.606h-1.225v6.757c0 1.38-.311 2.41-.935 3.09-.623.678-1.536 1.018-2.716 1.018-1.18 0-2.076-.34-2.699-1.019-.624-.679-.935-1.709-.935-3.089V.606h-1.258zm22.241 1.091c.857.724 1.291 1.72 1.291 2.989s-.429 2.26-1.291 2.978c-.863.718-2.048 1.08-3.562 1.08h-3.19v3.75H214.7V.607h4.447c1.514 0 2.705.362 3.562 1.086v.005zm-.902 5.17c.623-.511.935-1.24.935-2.181 0-.94-.312-1.698-.935-2.215-.623-.512-1.519-.774-2.699-.774h-3.156v5.939h3.156c1.174 0 2.076-.256 2.699-.774v.006zM152.97 25.57v8.888h-5.672l6.941 5.043h-6.718l-12.373-8.994h13.48v-4.141h-16.931V39.5h-4.347V22.413h21.278l4.342 3.156zM26.871 34.457V25.57l-4.346-3.156H1.252V39.5h4.342V26.365h16.93v4.14H9.045L21.423 39.5h6.712l-6.94-5.043h5.677zM161.308 39.5h-5.749l15.133-17.237L185.824 39.5h-5.755l-1.959-2.17h-14.844l-1.959 2.17zm9.378-10.898l-4.519 5.137h9.039l-4.52-5.137zm-102.27-6.19V39.5h21.533l4.342-3.156V25.57l-4.342-3.156H68.415zm21.533 13.136H72.761V26.36h17.187v9.19zM39.022 39.5V22.413h21.534l4.34 3.156v10.775l-4.34 3.156H39.022zm4.346-3.952h17.188V26.36H43.368v9.19zM95.375 39.5h5.755l1.954-2.17h14.844l1.953 2.17h5.755l-15.133-17.237L95.37 39.5h.005zm10.614-5.76l4.519-5.138 4.52 5.137h-9.039zM30.818 22.412h4.397V39.5h-4.397V22.413z" fill="#FFF"/>
    
    </svg>
);
export const DiscordIcon: React.FC<IconSvgProps> = ({
  size = 40,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
        fill="currentColor"
      />
    </svg>
  );
};

export const TwitterIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
        fill="currentColor"
      />
    </svg>
  );
};

export const GithubIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

export const HeartFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export const SearchIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const NextUILogo: React.FC<IconSvgProps> = (props) => {
  const { width, height = 40 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 161 32"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className="fill-black dark:fill-white"
        d="M55.6827 5V26.6275H53.7794L41.1235 8.51665H40.9563V26.6275H39V5H40.89L53.5911 23.1323H53.7555V5H55.6827ZM67.4831 26.9663C66.1109 27.0019 64.7581 26.6329 63.5903 25.9044C62.4852 25.185 61.6054 24.1633 61.0537 22.9582C60.4354 21.5961 60.1298 20.1106 60.1598 18.6126C60.132 17.1113 60.4375 15.6228 61.0537 14.2563C61.5954 13.0511 62.4525 12.0179 63.5326 11.268C64.6166 10.5379 65.8958 10.16 67.1986 10.1852C68.0611 10.1837 68.9162 10.3468 69.7187 10.666C70.5398 10.9946 71.2829 11.4948 71.8992 12.1337C72.5764 12.8435 73.0985 13.6889 73.4318 14.6152C73.8311 15.7483 74.0226 16.9455 73.9968 18.1479V19.0773H63.2262V17.4194H72.0935C72.1083 16.4456 71.8952 15.4821 71.4714 14.6072C71.083 13.803 70.4874 13.1191 69.7472 12.6272C68.9887 12.1348 68.1022 11.8812 67.2006 11.8987C66.2411 11.8807 65.3005 12.1689 64.5128 12.7223C63.7332 13.2783 63.1083 14.0275 62.6984 14.8978C62.2582 15.8199 62.0314 16.831 62.0352 17.8546V18.8476C62.009 20.0078 62.2354 21.1595 62.6984 22.2217C63.1005 23.1349 63.7564 23.9108 64.5864 24.4554C65.4554 24.9973 66.4621 25.2717 67.4831 25.2448C68.1676 25.2588 68.848 25.1368 69.4859 24.8859C70.0301 24.6666 70.5242 24.3376 70.9382 23.919C71.3183 23.5345 71.6217 23.0799 71.8322 22.5799L73.5995 23.1604C73.3388 23.8697 72.9304 24.5143 72.4019 25.0506C71.8132 25.6529 71.1086 26.1269 70.3314 26.4434C69.4258 26.8068 68.4575 26.9846 67.4831 26.9663V26.9663ZM78.8233 10.4075L82.9655 17.325L87.1076 10.4075H89.2683L84.1008 18.5175L89.2683 26.6275H87.103L82.9608 19.9317L78.8193 26.6275H76.6647L81.7711 18.5169L76.6647 10.4062L78.8233 10.4075ZM99.5142 10.4075V12.0447H91.8413V10.4075H99.5142ZM94.2427 6.52397H96.1148V22.3931C96.086 22.9446 96.2051 23.4938 96.4597 23.9827C96.6652 24.344 96.9805 24.629 97.3589 24.7955C97.7328 24.9548 98.1349 25.0357 98.5407 25.0332C98.7508 25.0359 98.9607 25.02 99.168 24.9857C99.3422 24.954 99.4956 24.9205 99.6283 24.8853L100.026 26.5853C99.8062 26.6672 99.5805 26.7327 99.3511 26.7815C99.0274 26.847 98.6977 26.8771 98.3676 26.8712C97.6854 26.871 97.0119 26.7156 96.3973 26.4166C95.7683 26.1156 95.2317 25.6485 94.8442 25.0647C94.4214 24.4018 94.2097 23.6242 94.2374 22.8363L94.2427 6.52397ZM118.398 5H120.354V19.3204C120.376 20.7052 120.022 22.0697 119.328 23.2649C118.644 24.4235 117.658 25.3698 116.477 26.0001C115.168 26.6879 113.708 27.0311 112.232 26.9978C110.759 27.029 109.302 26.6835 107.996 25.9934C106.815 25.362 105.827 24.4161 105.141 23.2582C104.447 22.0651 104.092 20.7022 104.115 19.319V5H106.08V19.1831C106.061 20.2559 106.324 21.3147 106.843 22.2511C107.349 23.1459 108.094 23.8795 108.992 24.3683C109.993 24.9011 111.111 25.1664 112.242 25.139C113.373 25.1656 114.493 24.9003 115.495 24.3683C116.395 23.8815 117.14 23.1475 117.644 22.2511C118.16 21.3136 118.421 20.2553 118.402 19.1831L118.398 5ZM128 5V26.6275H126.041V5H128Z"
      />
      <path
        className="fill-black dark:fill-white"
        d="M23.5294 0H8.47059C3.79241 0 0 3.79241 0 8.47059V23.5294C0 28.2076 3.79241 32 8.47059 32H23.5294C28.2076 32 32 28.2076 32 23.5294V8.47059C32 3.79241 28.2076 0 23.5294 0Z"
      />
      <path
        className="fill-white dark:fill-black"
        d="M17.5667 9.21729H18.8111V18.2403C18.8255 19.1128 18.6 19.9726 18.159 20.7256C17.7241 21.4555 17.0968 22.0518 16.3458 22.4491C15.5717 22.8683 14.6722 23.0779 13.6473 23.0779C12.627 23.0779 11.7286 22.8672 10.9521 22.4457C10.2007 22.0478 9.5727 21.4518 9.13602 20.7223C8.6948 19.9705 8.4692 19.1118 8.48396 18.2403V9.21729H9.72854V18.1538C9.71656 18.8298 9.88417 19.4968 10.2143 20.0868C10.5362 20.6506 11.0099 21.1129 11.5814 21.421C12.1689 21.7448 12.8576 21.9067 13.6475 21.9067C14.4374 21.9067 15.1272 21.7448 15.7169 21.421C16.2895 21.1142 16.7635 20.6516 17.0844 20.0868C17.4124 19.4961 17.5788 18.8293 17.5667 18.1538V9.21729ZM23.6753 9.21729V22.845H22.4309V9.21729H23.6753Z"
      />
    </svg>
  );
};


/* Customization Begins */

export const FacebookLogo: React.FC<IconSvgProps> = (props) => {
  const { width, height = 40 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 192 192"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path stroke="#000000" strokeLinecap="round" strokeWidth="12" d="M96 170c40.869 0 74-33.131 74-74 0-40.87-33.131-74-74-74-40.87 0-74 33.13-74 74 0 40.869 33.13 74 74 74Zm0 0v-62m30-48h-10c-11.046 0-20 8.954-20 20v28m0 0H74m22 0h22" fill="#FFF"/>
    </svg>
  );
};


export const InstagramLogo: React.FC<IconSvgProps> = (props) => {
  const { width, height = 40 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 169.063 169.063"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752
		c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407
		c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752
		c17.455,0,31.656,14.201,31.656,31.655V122.407z" fill="#000"/>
	<path d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561
		C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561
		c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z" fill="#000"/>
	<path d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78
		c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78
		C135.661,29.421,132.821,28.251,129.921,28.251z" fill="#FFF"/>
    </svg>
  );
};

export const TiktokLogo: React.FC<IconSvgProps> = (props) => {
  const { width, height = 40 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 256 256"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
    <path d="M224,80a52.059,52.059,0,0,1-52-52,4.0002,4.0002,0,0,0-4-4H128a4.0002,4.0002,0,0,0-4,4V156a24,24,0,1,1-34.28418-21.69238,3.99957,3.99957,0,0,0,2.28369-3.61279L92,89.05569a3.99948,3.99948,0,0,0-4.70117-3.938A72.00522,72.00522,0,1,0,172,156l-.00049-42.56348A99.27749,99.27749,0,0,0,224,128a4.0002,4.0002,0,0,0,4-4V84A4.0002,4.0002,0,0,0,224,80Zm-4,39.915a91.24721,91.24721,0,0,1-49.66455-17.1792,4.00019,4.00019,0,0,0-6.33594,3.24707L164,156A64,64,0,1,1,84,94.01223l-.00049,34.271A32.00156,32.00156,0,1,0,132,156V32h32.13184A60.09757,60.09757,0,0,0,220,87.86819Z" fill="#FFF"/>
    </svg>
  );
};

export const YoutubeLogo: React.FC<IconSvgProps> = (props) => {
  const { width, height = 40 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 1024 1024"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
    
    <path d="M940.736 189.696C912.992 169.728 835.68 143.2 511.728 143.2c-347.152 0-398.656 30.464-415.185 40.432C8.575 236.479.223 470.447-.544 517.887.512 580.545 10.64 789.008 96.48 840.577c16.497 9.935 67.712 40.223 415.248 40.223 324.16 0 401.376-26.4 429.008-46.288 74.976-53.935 83.6-239.68 83.808-317.439-.192-62.528-6.752-271.872-83.807-327.376zm-37.376 592.88c-11.152 8.032-75.186 34.223-391.634 34.223-305.936 0-370.128-23.744-382.256-31.056-30.88-18.528-63.472-116.88-66.031-268.032 2.528-150.816 35.568-260.912 66.097-279.216 12.16-7.344 76.591-31.28 382.19-31.28 316.192 0 380.4 26.369 391.633 34.433 27.409 19.744 56.752 123.68 57.184 275.632-.432 154.336-29.968 245.712-57.184 265.296zM720.415 486.83L432.481 310.141a32.003 32.003 0 0 0-32.257-.464 32.016 32.016 0 0 0-16.288 27.872v353.44a32.016 32.016 0 0 0 32 32 32.02 32.02 0 0 0 16.527-4.592L720.4 541.645c9.6-5.807 15.472-16.19 15.472-27.407s-5.856-21.632-15.456-27.408zM447.953 634.301V394.204l194 120.032z" fill="#FFF"/>
    </svg>
  );
};

export const LinkedInLogo: React.FC<IconSvgProps> = (props) => {
  const { width, height = 40 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 256 256"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
    
    <path d="M96,80a8,8,0,1,1-8-8A7.99993,7.99993,0,0,1,96,80Zm-8,28.001a4,4,0,0,0-4,4v64a4,4,0,1,0,8,0v-64A4,4,0,0,0,88,108.001Zm60,0a31.92463,31.92463,0,0,0-24,10.86767V112.001a4,4,0,0,0-8,0v64a4,4,0,1,0,8,0v-36a24,24,0,0,1,48,0v36a4,4,0,1,0,8,0v-36A32.03619,32.03619,0,0,0,148,108.001ZM224,44V212a12.01375,12.01375,0,0,1-12,12H44a12.01375,12.01375,0,0,1-12-12V44A12.01359,12.01359,0,0,1,44,32H212A12.01359,12.01359,0,0,1,224,44Zm-8,0a4.00458,4.00458,0,0,0-4-4H44a4.00458,4.00458,0,0,0-4,4V212a4.00458,4.00458,0,0,0,4,4H212a4.00458,4.00458,0,0,0,4-4Z" fill="#FFF"/>
    </svg>
  );
};
