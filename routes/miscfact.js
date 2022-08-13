const pop = require('popcat-wrapper')
module.exports = {
  name: "misc/fact",
  run: async(req, res) => {
    const fact = await pop.fact()
    res.json({ 
      fact: fact,
      credit: "Powered by PugeAPI (api.pugepe.com)"
        })
  }
}