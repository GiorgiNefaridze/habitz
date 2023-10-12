type isValidType = {
  (inputs: string[]): boolean;
};

export const isValid: isValidType = (inputs) => {
  return inputs.every((text) => text?.length >= 4);
};
