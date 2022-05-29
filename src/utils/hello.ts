/**
 * Provide a name, to say hello to.
 *
 * @param name
 * @returns string
 */
export const hello = (name: string) => {
  const hello = "Hello, ";
  const message = `${hello}${name}!`;
  return message;
};
