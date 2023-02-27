# Installation for BR+ Planningview

### Feature configuration

The PlanningView has the export feature option configured in the `PlanningView.js` file like

```
        pdfExport : {
                    exportServer : configRecord ? configRecord.Value : '',
                    translateURLsToAbsolute : configRecord ? configRecord.Value : '',
                    keepPathName : false
                }
```

The configRecord is corresponding to the `PrintUrl` Name/Value pair in the `BRPlusConfigList` (https://jaav.sharepoint.com/sites/bryntum/Lists/BRPlusConfig).

To be able to reach the export server it must run on ssl. The Value for the `exportServer` and `translateURLsToAbsolute` is in this case `https://jaav.eu:5020`.


### Export server configutation

The code of the export server can be found in the `server` folder of this directory. Copy this folder to the VM where you want the server to be running. This can be any on OS. 

On the VM nodejs version 11+ (no later) must be installed. Installation instructions can be found in `server\readme.md` file.

The installation comes basically down to type `npm i` in the `server` folder. The `node build.js` step in the installation readme can be skipped. 

### Startup the server

In the `scripts` folder there are startup scripts available to run the server as a service on Ubuntu or Windows.    

If you open the startup script you will see the following lines.

```
cd /home/jaavnl/server/src
node ./server.js -h 5000 -H 5020 -r /home/jaavnl/server/Content
```

The -H option is for setting the ssl port to 5020 in this case, but it can be any port. The -r option sets the content folder for css and other resource files. 
TranslateUrlsToAbsolute will translate all links used in the sent html fragments to the host where the html is served. In this case the server gets html fragments, it opens those html files
with puppeteer (a headless Chrome browser). The browser will fetch all urls and links set in the fragments (like css and images). It needs to fetch the resources from its own server because the VM cannot reach the addin on SPO.

For this reason all files from the `PlanningView/Content` folder needs to be copied to the VM in the folder set with the -r option (/server/Content) in this case.

### ssl

To get ssl working a new folder `cert` needs to be created in `server\src\cert`. In this folder the ssl certificate keys need to be set. In this folder the https server
will look for the files `server.crt` and `server.key`.

### Test if it is reachable

As example https://jaav.eu:5020 is running. On https://jaav.sharepoint.com/sites/bryntum it can be tested in the BR+ PlanningView app. 

For a quick test you can type the url in the browser. It should respond `Cannot GET /`
