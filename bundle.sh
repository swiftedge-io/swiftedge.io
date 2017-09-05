rm -rf dist && mkdir -p dist
cp {index.html,package.json} dist/
cp -a server dist/
cp -a static dist/
cd dist && npm install --production && cd ../
tar -cvf dist.tar dist
rm -rf dist
