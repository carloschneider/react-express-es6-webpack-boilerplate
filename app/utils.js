import _s from './sass/style.scss';

module.exports.styler = (classes) => {
  return classes.split(' ').map((c) => {
    return _s[c];
  }).join(' ');
};
