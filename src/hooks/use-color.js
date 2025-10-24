export const useColor = () => {
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 256);
  };

  const generateRadomRgbColor = () => {
    const red = generateRandomNumber();
    const green = generateRandomNumber();
    const blue = generateRandomNumber();
    return `rgb(${red},${green},${blue})`;
  };

  const generateColors = (count) => {
    return new Array(count).fill(0).map(() => {
      return generateRadomRgbColor();
    });
  };

  return {
    generateRandomNumber,
    generateRadomRgbColor,
    generateColors,
  };
};
