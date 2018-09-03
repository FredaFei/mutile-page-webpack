const path = require('path')
const execFileSync = require('child_process').execFileSync
const { moduleList } = require("./utils").moduleCtx
const buildFile = path.join(__dirname, 'build.js')

console.log(moduleList);
for(let module of moduleList){
  console.log('正在编译：', module)
  execFileSync("node", [buildFile, module, "separate"], {});
}
