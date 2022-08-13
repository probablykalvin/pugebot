const akaneko = require('akaneko');
module.exports = {
  name: "misc/neko",
  run: async(req, res) => {
    const image = await akaneko.neko()
    res.json({ 
      url: image,  
    })
  }
}