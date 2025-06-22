"use strict";

/* harmony export (immutable) */
export { getNewThemeColorName };
var oldTheme2newThemeMap = {
  's1': 'theme-color-ys1',
  's2': 'theme-color-ys2',
  't': 'theme-color-t',
  't7': 'theme-color-t7',
  't5': 'theme-color-t5',
  't3': 'theme-color-t3',
  'm2': 'theme-color-n2',
  'm1': 'theme-color-n1',
  'c': 'theme-color-c',
  'c-h': 'theme-color-c1',
  'c-p': 'theme-color-c2',
  'n1': 'theme-color-s1-0',
  'n1-h': 'theme-color-s1-1',
  'n1-p': 'theme-color-s1-2',
  'n2': 'theme-color-s2-0',
  'n2-h': 'theme-color-s2-1',
  'n2-p': 'theme-color-s2-2',
  '0': 'theme-color-0',
  '1': 'theme-color-1',
  '2': 'theme-color-2',
  '3': 'theme-color-3',
  '4': 'theme-color-4',
  '5': 'theme-color-5',
  '6': 'theme-color-6',
  '7': 'theme-color-7',
  '8': 'theme-color-8',
  '9': 'theme-color-9',
  '10': 'theme-color-10'
};
function getNewThemeColorName(oldColor) {
  var _oldTheme2newThemeMap;
  return (_oldTheme2newThemeMap = oldTheme2newThemeMap[oldColor]) !== null && _oldTheme2newThemeMap !== void 0 ? _oldTheme2newThemeMap : 'theme-color-0';
}

/***/