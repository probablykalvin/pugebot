const fetch = require('node-fetch')
module.exports = {
  name: "interactions/sfw/hug",
  run: async(req, res) => {
    const r = await fetch("https://anime-api.hisoka17.repl.co/img/hug")
    const data = await r.json()
    res.json({ 
    image: data.url, 
    message: "Powered by: gud-api"
    })
  }
}