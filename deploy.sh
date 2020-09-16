###
 # @Descripttion: 
 # @version: 1.0.0
 # @@Company: ZZCYI
 # @Author: liu
 # @Date: 2020-09-15 15:45:18
 # @LastEditors: 王
 # @LastEditTime: 2020-09-16 17:30:07
 # @Update Descripttion: 
### 
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

git add .
git commit -m "微信小程序 版本更新"

git push

cd -