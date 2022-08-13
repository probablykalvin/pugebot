const amount = `$random[1000;4000]`

module.exports = {
  name: "daily",
  dec: "Clam your daily Puge Coins.",
  cat: "Economy",
  use: "daily",
  perm: "sendmessages, readMessagehistory, embedlinks",
  cd: "1 day (24 hours)",
  code: `
$globalCooldown[1d;You need to wait **%time%** utill you can claim your daily Puge Coins again.]
$setGlobalUserVar[dailys;$get[w]]
$setGlobalUserVar[coins;$get[c]]
$author[$userTag;$userAvatar[$clientID]]
$description[You got $getVar[cemo]${amount} for your daily today!]
$color[$getGlobalUserVar[color]]
$let[w;$math[$getGlobalUserVar[dailys]+1]]
$let[c;$math[$getGlobalUserVar[coins]+${amount}]]
`
}