const fetch = require('node-fetch')
module.exports = {
  name: "fun/dadjoke",
  run: async(req, res) => {
    const r = await fetch("https://luminabot.xyz/api/json/dadjoke")
    const x = await r.json()
    res.json({ 
      joke: x.joke, 
      message: "Powered by: gud-api" 
    })
  }
}