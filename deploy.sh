# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

git add .
git commit -m "vue后台高德地图组件,css文字渐变色,小程序中纯字母换行"

git push

cd -