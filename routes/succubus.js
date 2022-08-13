const akaneko = require('akaneko');
const keysList = require('../assets/keys.json')
module.exports = {
  name: "nsfw/succubus",
  run: async(req, res) => {
    let { key } = req.query;
    if (!key || !keysList.includes(key)) {
      return res.json({ error: "Access denied! No API key provided or invalid API key."})
    };
    var image = await akaneko.nsfw.succubus()
    res.json({ 
      url: image,  
    })
  }
}