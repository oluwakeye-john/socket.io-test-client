const customMedia = (val: number) => `@media(max-width:${val}px)`;

const media = {
  md: customMedia(768),
};

const colors = {
  primary: "#1A3D5D",
  notConnected: "red",
  connected: "green",
};

const theme = {
  media,
  colors,
};

export default theme;
