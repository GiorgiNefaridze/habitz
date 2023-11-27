type IsValidType = (inputs: string[]) => boolean;

export const isValid: IsValidType = (inputs) => {
  return inputs.every((text) => Boolean(text?.length));
};
