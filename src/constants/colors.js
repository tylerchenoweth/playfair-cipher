
export const COLORS = {
    myBlue: '#4F7CAC',
    myGreen: '#6DCB76',
    myOrange: '#FFA69E',
    myBackground: '#0E1C36',
  };
  
  
  export const setCssVariables = (colors) => {
    const root = document.documentElement;
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key.toLowerCase()}`, value);
    });
  };
  