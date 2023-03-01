export const randomStrGenerator = (length) => {
  //create random string
  let str = "";
  const strCollection =
    "qwertyuioppasdfghjklzxcvbnmQQQQWERTYUIOPASDFGHJKLZXCVBNM";

  for (let i = 0; i < length; i++) {
    const charPosition = Math.round(Math.random() * strCollection.length);

    str += strCollection[charPosition];
  }
  return str;
};
