const axios = require('axios')
module.exports = {
  name: "fun/animequote",
  run: async(req, res) => {
    const Resp = await axios.get("https://animechan.vercel.app/api/random")
    let Resp_json = Resp.data
    res.json({ 
      anime: Resp_json.anime,
      character: Resp_json.character,
      quote: Resp_json.quote
    })
  }
}