const jobs = `$randomText[Billie Eilish;Justin Bieber;Jennifer Lopez;Kanye West;Ariana Grande;Elon musk;Jeff Bezos;Ed Sheeran;Drake;Nicki Minaj;Lil Nas X;Lady Gaga;Taylor Swift;Selena Gomez;Kylie Jenner;Preap Sovath;Tena;Vannda;Mardy;Kalvin;Cat;$username[$randomUserID]]`

const amount = `$random[10;120]`

module.exports = {
  name: "beg",
  aliases: ["b"],
  dec: "Beg someone for money. ~~(imagine begging in 2021 lol)~~ dis code was written in 2021 so yeah :)",
  cat: "Economy",
  use: "beg",
  perm: "sendmessages, readMessagehistory, embedlinks",
  cd: "5 minutes (300 secs)",
  code: `
$globalCooldown[5m;You need to wait **%time%** utill you can beg again.]
$setGlobalUserVar[begs;$get[w]]
$if[$randomText[1;2;2]==2]
$setGlobalUserVar[coins;$get[c]]
$author[$userTag;$userAvatar[$clientID]]
$description[**${jobs}**: Here i got chu $getVar[cemo]${amount}. Hope you like it.]
$color[$getGlobalUserVar[color]]
$let[c;$math[$getGlobalUserVar[coins]+${amount}]]
$else
$author[$userTag;$userAvatar[$clientID]]
$description[**${jobs}**: $randomText[nah;credit card full;later;no;no money today;fuck off]]
$color[RED]
$endIf
$let[w;$math[$getGlobalUserVar[begs]+1]]
`
}