import _s from './assets/sass/style.scss';

module.exports.styler = (classes) => {
  return classes
    .split(' ')
    .map((c) => {
      return _s[c];
    })
    .join(' ');
};
