const akaneko = require('akaneko');
module.exports = {
  name: "test/lewdbomb",
  run: async(req, res) => {
    var {limit} = req.query;
    if(isNaN(limit)) return res.json({ error: "Not a number" })
    const image = await akaneko.lewdBomb(3)
    res.json({ 
      data: image  
    })
    }
}