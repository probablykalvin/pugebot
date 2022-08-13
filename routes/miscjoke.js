const pop = require('popcat-wrapper')
module.exports = {
  name: "misc/joke",
  run: async(req, res) => {
    const joke = await pop.joke()
    res.json({ 
      joke: joke,
      credit: "Powered by PugeAPI (api.pugepe.com)"
        })
  }
}