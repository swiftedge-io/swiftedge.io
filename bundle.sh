rm config.json && touch config.json
cat > config.json <<- EOL
{
  "gmailUser": "$GMAIL_USER",
  "gmailPass": "$GMAIL_PASS"
}
EOL
rm -rf dist && mkdir -p dist
cp {index.html,package.json,config.json} dist/
cp -a server dist/
cp -a static dist/
cd dist && npm install --production && cd ../
tar -cvf dist.tar dist
rm -rf dist
