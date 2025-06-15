
export const COLORS = {
  // myBlue: '#4F7CAC',
  myBlue: '#6B96C2',
  myGreen: '#6DCB76',
  myOrange: '#FFA69E',
  myBackground: '#0E1C36',
};
// OG blue
// #4F7CAC
// OG green
// #8AEA92



  
export const setCssVariables = (colors) => {
  const root = document.documentElement;
  Object.entries(colors).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key.toLowerCase()}`, value);
  });
};
  