module.exports = {
  name: "withdraw",
  aliases: ["with"],
  dec: "Withdraw coins from your bank account.",
  cat: "Economy",
  use: "withdraw {amount | all}",
  perm: "sendmessages, readMessagehistory, embedlinks",
  code: `
$setGlobalUserVar[bank;$get[b]]
$setGlobalUserVar[coins;$get[c]]
$color[$getGlobalUserVar[color]]
$author[$userTag;$userAvatar[$clientID]]
$description[You've withdrawn $getVar[cemo]$numberSeparator[$sub[$get[arg];0]] from your bank account]
$let[b;$sub[$getGlobalUserVar[bank];$get[arg]]]
$let[c;$sum[$getGlobalUserVar[coins];$get[arg]]]
$onlyIf[$get[arg]<=$getGlobalUserVar[bank];{description: $getVar[x] You don't have that many coins to withdraw.

**Usage**
\`$commandInfo[$commandName;use]\`}{color:RED}]
$onlyIf[$isNumber[$get[arg]]==true;{description: $getVar[x] The deposit amount must be number.

**Usage**
\`$commandInfo[$commandName;use]\`}{color:RED}]
$onlyIf[$checkContains[$get[arg];.]==false;{description: $getVar[x] Your withdrawn amount must not contains \`.\` or \`-\`.

**Usage**
\`$commandInfo[$commandName;use]\`}{color:RED}]

$onlyIf[$get[arg]>0;{description: $getVar[x] Your withdrawn amount must be more than 0.

**Usage**
\`$commandInfo[$commandName;use]\`}{color:RED}]

$onlyIf[$isNumber[$get[arg]]==true;{description: $getVar[x] The deposit amount must be number.

**Usage**
\`$commandInfo[$commandName;use]\`}{color:RED}]
$let[arg;$replaceText[$toLowerCase[$message[1]];all;$getGlobalUserVar[bank]]
$onlyIf[$message[1]!=;{description:$replaceText[$getVar[no];&use;$commandInfo[$commandName;use]]}{color:RED}]
$onlyIf[$getGlobalUserVar[bank]!=0;{description: $getVar[x] You have nothing to withdraw.

**Usage**
\`$commandInfo[$commandName;use]\`}{color:RED}]
`
}