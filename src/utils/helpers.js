export const formatDate = (date) => new Date(date).toLocaleDateString();
export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
export const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};