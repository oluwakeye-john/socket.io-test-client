const customMedia = (val: number) => `@media(max-width:${val}px)`;

const media = {
  md: customMedia(768),
};

const colors = {
  primary: "maroon",
};

const theme = {
  media,
  colors,
};

export default theme;
