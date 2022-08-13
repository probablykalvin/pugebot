module.exports = {
  name: "avatar",
  aliases: ["av"],
  dec: "Get you or a user profile picture",
  cat: "Miscellaneous",
  use: "avatar <user>",
  perm: "sendmessages, readMessagehistory, embedlinks",
  code: `
$color[$getGlobalUserVar[color]]
$if[$message==]
$author[Avatar for $userTag;$userAvatar[$clientID]]
$description[**Link as**
[png]($get[png]) | [jpg]($get[jpg]) | [jpeg]($get[jpeg]) | [webp]($userAvatar)]
$image[$replaceText[$userAvatar;webp;png]]
$let[jpeg;$replaceText[$userAvatar;webp;jpeg]]
$let[jpg;$replaceText[$userAvatar;webp;jpg]]
$let[png;$replaceText[$userAvatar;webp;png]]
$else
$author[Avatar for $userTag[$get[user]];$userAvatar[$clientID]]
$description[**Link as**
[png]($get[png]) | [jpg]($get[jpg]) | [jpeg]($get[jpeg]) | [webp]($get[av])]
$image[$replaceText[$get[av];webp;png]]
$let[jpeg;$replaceText[$get[av];webp;jpeg]]
$let[jpg;$replaceText[$get[av];webp;jpg]]
$let[png;$replaceText[$get[av];webp;png]]

$let[av;$userAvatar[$get[user]]]
$onlyIf[$userExists[$get[user]]==true;{description: $getVar[x] Cannot find user with the provided arguments.

**Usage**
\`$commandInfo[$commandName;use]\`}{color:RED}]
$let[user;$findUser[$message;no]]
$endIf
`
}