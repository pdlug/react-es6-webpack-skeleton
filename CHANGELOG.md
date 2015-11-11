# react-es6-webpack-skeleton ChangeLog

## 2015-11-11
### Changed
* Upgraded to Babel 6
* Use `module.exports` instead of `export default` in `webpack.config.babel.js`
  for now (see [webpack #1578](https://github.com/webpack/webpack/pull/1578)).
* Relax lint rule for "react/prop-types" to a warning instead of an error
* Remove presets from query section of babel-loader configuration in 
  `webpack.config.babel.js`, seems to cause problems, using `.babelrc` is fine.

## 2015-10-14
### Added
* Initial release
