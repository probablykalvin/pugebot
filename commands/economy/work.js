const jobs = `$randomText[You work as a flatulence smell reduction underwear maker and earn;You work at Grandma's restaurant as a cook and earn;You work as a professional smuggler and earn;You work as a pumpkin painter and earn;You work as a engineer and earn;You work as a meerkat behaviour consultant and earn;Your job as a fart collector is very interesting and earns you;You work as a penguinologist and earn;You work as a ear cleaner and earn;You develop games and earn;You work as a personal shopper and earn;You work as a dog surfing instructor and earn;You work as a beefeater and earn;You work as a comedian and earn;You work as the head of elephants and earn;You work as an elementary school teacher and earn;You worked as a voice actor for Spongebob and managed to gain;You had a fruitful day at the office today and earned;You actually finished the plate of vegetables that your parents made you eat! You were awarded;You work as child birth educator and earn;You work as a body pillow factory salesman on the Internet for real weebs;the weebs gave you;You work as a vibration consultant and earn;Work at the icecream shop of your childhood dreams and earn;You work as a professional minecraft hacker. You manage to rake in;You dabbed so hard that even your mother is proud! You make;You work as a professional cleaner. After hiding the body;you're handed;You got cloned for sciene. You earned;You work as a police officer and earn;You work as a bush pruner for Donald Trump and earn;You work as a paper towel sniffer and earn;You work as a water slide tester and earn;You milk a cow for]`

const amount = `$random[20;300]`

module.exports = {
  name: "work",
  aliases: ["w"],
  dec: "Work as or for someone to earn Puge Coins.",
  cat: "Economy",
  use: "work",
  perm: "sendmessages, readMessagehistory, embedlinks",
  cd: "1 hour (60 mins)",
  code: `
$globalCooldown[1h;You need to wait **%time%** utill you can work again.]
$setGlobalUserVar[works;$get[w]]
$setGlobalUserVar[coins;$get[c]]
$author[$userTag;$userAvatar[$clientID]]
$description[${jobs} $getVar[cemo]${amount}]
$color[$getGlobalUserVar[color]]
$let[w;$math[$getGlobalUserVar[works]+1]]
$let[c;$math[$getGlobalUserVar[coins]+${amount}]]
`
}