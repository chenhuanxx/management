 
// 获取node  命令行的参数
var env = process.argv.splice(2).toString()
console.log('env ', env)

// 默认产品环境的地址
let PURCHASE_URL = '"https://www.tianqiapi.com/"'

// 如果为QA环境则替换上述地址
if (env === 'qa') {
    PURCHASE_URL = '"https://www.tianqiapi.com/"'
}

// console.log('UPLOAD_URL ', UPLOAD_URL)
module.exports = {
  NODE_ENV: env === 'qa' ? '"qa"' : '"production"',
  PREFIX_API:'""',
  PURCHASE_URL: PURCHASE_URL,
}
