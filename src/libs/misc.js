import uniqueId from 'lodash/uniqueId';

const makeText = (length) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const generateItems = (count) => {
  if (!count && count <= 0) return null;
  return [...Array(count).keys()].map((item) => ({
    id: +uniqueId(),
    title: makeText(10),
    desc: makeText(300),
  }));
};
