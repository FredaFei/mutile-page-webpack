'use strict'
const path = require('path')
const config = require('../config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const packageConfig = require('../package.json')
const glob = require('glob')
const baseViewPath = path.resolve(__dirname, '../src/views')
const packageViews = process.env.MODULE_ENV || ''

/**
 * 读取入口文件和模板文件
 * @param basePath {string}
 * @param type {string}
 * @return {object}
*/
function getEntryAndTemplate() {
  let ctx = { entries: {}, template: {}, moduleList: [] }
  // 对所有项目模块打包
  if (!packageViews) {
    ctx.entries = packageAllFiles(baseViewPath, 'js')
    ctx.template = packageAllFiles(baseViewPath, 'html')
  } else {
    //针对指定的项目模块打包
    ctx.entries[packageViews] = `${baseViewPath}/${packageViews}/main.js`
    ctx.template[packageViews] = `${baseViewPath}/${packageViews}/template.html`
  }
  ctx.moduleList = Object.keys(ctx.entries)
  return ctx
}

/**
 * 读取指定目錄下的指定文件類型
 * @param basePath {string}
 * @param type {string}
 * @return {object}
 */
function packageAllFiles(basePath, type) {
  let temp = glob.sync(`${basePath}/\*/\*.${type}`)
  let map = {}
  temp.forEach(pathItem => {
    let arr = pathItem.split('/')
    let _filename = arr[arr.length - 2]
    map[_filename] = pathItem
  })
  return map
}
const moduleCtx = getEntryAndTemplate()
exports.moduleCtx = moduleCtx

// 多入口配置
exports.entries = moduleCtx.entries

exports.assetsPath = function(_path) {
  const assetsSubDirectory =
    process.env.NODE_ENV === 'production'
      ? config.build.assetsSubDirectory
      : config.dev.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function(options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }
  function resolveResouce(name) {
    return path.resolve(__dirname, '../src/modules/style/' + name)
  }
  // generate loader string to be used with extract text plugin
  function generateLoaders(loader, loaderOptions) {
    const loaders = options.usePostCSS
      ? [cssLoader, postcssLoader]
      : [cssLoader]

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }
    if (loader === 'sass') {
      loaders.push({
        loader: 'sass-resources-loader',
        options: {
          // 文件路径
          resources: resolveResouce('_mixins.scss')
        }
      })
    }
    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function(options) {
  const output = []
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}
