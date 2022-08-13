const fetch = require('node-fetch')
module.exports = {
  name: "fun/pickuplines",
  run: async(req, res) => {
    r = await fetch("https://not-an-api.gofaizen.repl.co/pickuplines")
    line = await r.json()
    res.json({ 
      response: line.response, 
      message: "Powered by gud-api" 
    })
  }
}