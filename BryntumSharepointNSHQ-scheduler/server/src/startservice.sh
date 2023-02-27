#!/bin/sh
whoami
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" 
nvm use v11.14.0
node -v
cd /home/jaavnl/server
npm i
cd /home/jaavnl/server/src
node ./server.js -h 5000 -H 5020 -r /home/jaavnl/server/Content
