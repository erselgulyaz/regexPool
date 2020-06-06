export default function isDomain (p, type) {
  let regex = null;
  if ( type === 'wwwPath' ) {
    regex = new RegExp(/^[w]{3}\.[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/);
  } else if( type === 'wwwOptionally' ) {
    regex = new RegExp(/^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/);
  } else {
    return false;
  }
  return regex.test(p);
}