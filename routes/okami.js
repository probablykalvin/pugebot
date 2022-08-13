const fetch = require('node-fetch')
module.exports = {
  name: "misc/okami", //okami = wolf girl
  run: async(req, res) => {
    var joe = await fetch('https://purrbot.site/api/img/sfw/okami/img')
    var candice = await joe.json()
    res.json({ url: candice.link })
  }
}