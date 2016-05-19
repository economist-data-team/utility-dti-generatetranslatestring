import isArray from 'lodash/isArray';

// tagging function for generateTranslateString
function translateCSS(strings, ...values) {
  const memo = [];
  for (const i in strings) {
    memo.push(strings[i]);
    if (values[i]) {
      memo.push(`${ values[i] }px`);
    }
  }

  return memo.join('');
}

/**
 * generates a translation string for transforms
 *
 * @param {Number|Array}  x   x-coordinate to translate to, or [x,y]
 * @param {Number|Boolean}  y   y-coordinate to translate to, or css
 * @param {Boolean} css is it a CSS transform? (adds 'px')
 *
 * @return {String}     the translate string to add to a transform
 */
export default function generateTranslateString(x, y, css = false) {
  if (isArray(x)) {
    css = y;
    [ x, y ] = x;
  }
  const translateString = `translate(${ x }, ${ y })`;
  const tagged = translateCSS`translate(${ x }, ${ y })`;
  return css ? tagged : translateString;
}
