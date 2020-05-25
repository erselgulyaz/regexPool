export default function onlyLetters (p) {
  const regex = new RegExp(/^[A-Za-z]+$/);
  return regex.test(p);
}