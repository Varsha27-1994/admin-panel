export const formatDate = (date: string | Date): string => {
  return new Date(date).toLocaleDateString();
};

export const capitalize = (str: string): string => {
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const cn = (
  ...classes: Array<string | undefined | null | boolean>
): string => {
  return classes.filter(Boolean).join(" ");
};
