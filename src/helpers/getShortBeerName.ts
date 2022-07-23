export const getShortBeerName = (name: string): string => {
  const words = name.split(' ');
  return `${words[0]} ${words[1]}`;
};
