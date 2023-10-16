type getFontSizeType = {
  (size: number): number;
};

export const getFontSize: getFontSizeType = (size) => {
  switch (size) {
    case 1:
      return 40;
    case 2:
      return 27;
    case 3:
      return 24;
    case 4:
      return 18;
    case 5:
      return 14;
    default:
      return 14;
  }
};
