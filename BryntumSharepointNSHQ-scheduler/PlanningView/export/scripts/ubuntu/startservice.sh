#!/bin/sh
cd /home/jaavnl/server
npm i
cd /home/jaavnl/server/src
node ./server.js -h 5000 -H 5020 -r /home/jaavnl/server/Content
