###
 # @Descripttion: 
 # @version: 1.0.0
 # @@Company: ZZCYI
 # @Author: liu
 # @Date: 2020-09-15 15:45:18
 # @LastEditors: liu
 # @LastEditTime: 2020-09-15 16:30:47
 # @Update Descripttion: 
### 
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

git add .
git commit -m "截取订单号或者交易号中的部分替换为 '***'"

git push

cd -