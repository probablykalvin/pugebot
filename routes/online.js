const fetch = require('node-fetch')
const akaneko = require('akaneko');
const keysList = require('../assets/keys.json')
module.exports = {
  name: "pugepe/stats",
  run: async(req, res) => {
    let { key } = req.query;
    if (!key) {
      return res.json({ error: "Access denied! No API key provided."})
    };
    if (!key || !keysList.includes(key)) {
      return res.json({ error: "Access denied! invalid API key."})
    };
const r = await fetch("https://api.mcsrvstat.us/bedrock/2/play.pugepe.com")
    const x = await r.json()
    res.json({
      status_text: "OK",
      stats: x,  
      credit: "Powered by PugeAPI (api.pugepe.com)"
    })
  }
}