# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

git add .
git commit -m "uniapp配网,加入广播和组播"

git push

cd -