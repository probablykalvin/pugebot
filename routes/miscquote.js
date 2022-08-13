const fetch = require('node-fetch')
module.exports = {
  name: "misc/quote",
  run: async(req, res) => {
    const r = await fetch("https://api.popcat.xyz/quote")
    const x = await r.json()
    res.json({ 
      joke: x.quote, 
      credit: "Powered by PugeAPI (api.pugepe.com)" 
    })
  }
}