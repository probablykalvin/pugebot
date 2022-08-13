module.exports = {
  name: "color",
  type: "awaitedCommand",
  code: `
$if[$toLowerCase[$message[2]]!=]
nce
$onlyIf[$isValidHex[$get[arg]]==true;{description:$getVar[x] Invalid color hex code was provided.

**Usage**
\`settings color #RIGHT_BRACKET#hex_code#LEFT_BRACKET#\`
\`settings color reset\`
}{color:RED}]
$let[arg;$message[3]]
$else
$description[$getVar[x] Color options only accept values \`{hex_code | reset}\`.

**Usage**
\`settings color #RIGHT_BRACKET#hex_code#LEFT_BRACKET#\`
\`settings color reset\`]
$color[RED]
$endIf
$onlyPerms[managechannels;manageserver;managemessages;{description:$getVar[x] You don't have the require permissions to use this command. Permissions required#COLON# \`$commandInfo[settings;perm]\`

**Usage**
\`settings color #RIGHT_BRACKET#hex_code#LEFT_BRACKET#\`
\`settings color reset\`
}{color:RED}]
`
}