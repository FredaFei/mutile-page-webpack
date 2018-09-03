const chalk = require('chalk')
const glob = require('glob')
const moduleBasePath = './src/views'
const moduleList = []
const allModule = glob.sync(`${moduleBasePath}/*`) //当前执行node命令时项目目录名  process.cwd()
allModule.forEach(item=>{
  moduleList.push(item.split('/')[3])
})

exports.checkedModule = function () {
  const currentModule = process.env.MODULE_ENV
  const repeactModule = moduleList.filter((item,index)=>{
    return moduleList.indexOf(item) !== index
  })
  if(repeactModule.length>0){
    console.log(chalk.red('moduleList 重复了'))
    console.log(chalk.red(repeactModule.join()))
    return false
  }
  let illegal
  let result = true
  for(let item of currentModule.split(',')){
    if(moduleList.indexOf(item) === -1){
      result = false
      illegal = item
      break
    }
  }
  if(result === false){
    console.log(chalk.red('参数错误，允许的参数为：'))
    console.log(chalk.green(moduleList.join()))
    console.log(chalk.yellow('非法参数有：' + illegal))
  }
  return result
}

