export default function onlyNumbers (p) {
  const regex = new RegExp(/^[0-9]+$/);
  return regex.test(p);
}