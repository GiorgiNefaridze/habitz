//targetIndex starts from 0, so passing 0 as an argument will be first letter of the string
const upperText = (text: string, targetIndex: number): string => {
  let result = "";

  if (!text?.length) {
    return "";
  }

  for (let i = 0; i < text?.length; i++) {
    if (i === targetIndex) {
      result += text[i].toUpperCase();
    } else {
      result += text[i];
    }
  }

  return result;
};

export { upperText };
