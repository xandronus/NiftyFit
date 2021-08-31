import * as database from "../../util/mongdb.js"

export default async (req, res) => {
  var success = false
  await database.connect();
  const apikey = req.headers.api_key;
  if (!apikey || apikey !== process.env.API_KEY) {
    res.status(401).json({success: false, message: 'Authorization failure.'});
  }
  else {
    if (req.method === 'POST') {
        console.log(`POST /synchealth => ${JSON.stringify(req.body)}`);
        await database.addOrGetAccount(req.body.devicetype, req.body.deviceid, req.body.cryptonetwork, req.body.cryptoaddr);
        await database.syncHealthData(req.body);
        success = true;  
    }        
  }

  if (success)
    res.status(200).json({success:true});
  else
    res.status(400).json({success:false});
}