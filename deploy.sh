scp -o StrictHostKeyChecking=no dist.tar $DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_PATH
ssh -o StrictHostKeyChecking=no $DEPLOY_USER@$DEPLOY_HOST << EOF
  tar -xf $DEPLOY_PATH/dist.tar -C $DEPLOY_PATH/
  pm2 stop $WEB_PROCESS_NAME
  pm2 start $DEPLOY_PATH/dist/server.js --name $WEB_PROCESS_NAME --node-args="--optimize_for_size --max_old_space_size=460 --gc_interval=100"
EOF
rm dist.tar
