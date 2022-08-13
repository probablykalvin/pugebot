module.exports = {
  name: "test/zeroparse",
  run: async(req,res) => {
    res.json({ ed: 0, data2: 69, data_str: "0", data2_int: "69" })
  }
}