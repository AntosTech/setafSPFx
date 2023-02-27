set PrintPath=X:\export\server
cd /D %PrintPath%
call npm i
cd %PrintPath%\src
call node ./server.js -h 8080 -H 8020 -r %PrintPath%\Content
