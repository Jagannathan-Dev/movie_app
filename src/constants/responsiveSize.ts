import {height, width} from './dimensions';

export const responsiveSize = (size:number) => {
  const screenWidth = width < height ? width : height;
  return Math.round(size * (screenWidth / 370));
};
