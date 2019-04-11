# Problem description

This project contains a custom `index.js` under `\srv\`. 

That file contains a set of custom handlers and is also trying
 to serve the cds-backed odata service under `/odata`. Unfortunately this works locally but not in SAP Cloud Platform cloud foundry environment.
 There, it triggers an error as it cannot read the data model definition under `db`. 
 
 Is there a way to make this work in CF ?
 
 # Expected
 
 `/odata` serves the service define by cds.
 
 # Reality
 
 `/odata` is not available. The application log shows a cds compilation error.
 
 # How to replicate
 
Clone this project in Web IDE. Select the folder, do:
 - Build CDS
 - Build
 - Select the file under `mta_archives` and deploy that to sap cloud. Open the app under `/odata`
