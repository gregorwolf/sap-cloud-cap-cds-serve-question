# Problem description

This project contains a custom `index.js` under `\srv\. That file contains a set of custom handlers and is also trying
 to serve the cds-backed odata service under `/odata`. Unfortunately this works locally but not in SAP Cloud Platform cloud foundry environment.
 There, it triggers an error as it cannot read the data model definition under `db`. Is there a way to make this work in CF ?