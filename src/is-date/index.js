export default function isDate (p, type) {
  let regex = null;
  if ( type === 'DD/MM/YYYY' ) {
    regex = new RegExp(/(0?[1-9]|[12][0-9]|3[01])([ \/\/])(0?[1-9]|1[012])([ \/\/])([0-9][0-9][0-9][0-9])$/);
  } else if( type === 'YYYY/MM/DD' ) {
    regex = new RegExp(/([0-9][0-9][0-9][0-9])([ \/\/])(0?[1-9]|1[012])([ \/\/])(0?[1-9]|[12][0-9]|3[01])$/);
  } else {
    return false;
  }
  return regex.test(p);
}