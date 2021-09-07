const breakPoint = {
  tablet1: '768px',
  tablet2: '992px',
  desktop: '1200px'
}

const device = {
  tablet1: `screen and (min-width:${breakPoint.tablet1})`,
  tablet2: `screen and (min-width:${breakPoint.tablet2})`,
  desktop: `screen and (min-width:${breakPoint.desktop})`,
}

export const theme = {
  primary: {
    main: '#00b200',
  },
  text: {
    main: '#212322',
    seconday: '#221F20',
    third: '#505050'
  },
  colors: {
    gray: {
      main: '#e7e7e7',
    },
    white: '#fff',
  },
  device,
};
