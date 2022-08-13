module.exports = {
  name: "cb",
  type: "awaitedCommand",
  code: `
$if[$toLowerCase[$message[2]]==true]
$setServerVar[chatbot;$get[arg]]
$description[$getVar[y] Chatbot value has set to \`true\`. And sub value \`(channel)\` has set to <#$get[arg]> \`$get[arg]\`.]
$color[$getGlobalUserVar[color]]
$onlyIf[$hasPermsInChannel[$get[arg];$clientID;sendmessages;readmessages;viewchannel]==true;{description:$getVar[x] I don't have the require permissions use that channel. Permissions required#COLON# \`sendmessages, readmessages, viewchannel\`.

**Usage**
\`settings chatbot true #RIGHT_BRACKET#channel#LEFT_BRACKET#\`
\`settings chatbot false\`
}{color:RED}]
  $onlyIf[$channelType[$get[arg]]==text;{description:$getVar[x] The mentioned channel cannot be a voice or announcement channel.

**Usage**
\`settings chatbot true #RIGHT_BRACKET#channel#LEFT_BRACKET#\`
\`settings chatbot false\`
}{color:RED}]
  $onlyIf[$channelExists[$get[arg]]!=false;{description:$getVar[x] The mentioned channel does not exists.

**Usage**
\`settings chatbot true #RIGHT_BRACKET#channel#LEFT_BRACKET#\`
\`settings chatbot false\`
}{color:RED}]
  $let[arg;$findChannel[$message[3];no]]
$onlyIf[$message[3]!=;{description:$getVar[x] Too few arguments were given.

**Usage**
\`settings chatbot true #RIGHT_BRACKET#channel#LEFT_BRACKET#\`
\`settings chatbot false\`
}{color:RED}]
$elseIf[$toLowerCase[$message[2]]==false]
$resetServerVar[chatbot]
$description[$getVar[y] Chatbot value has set to \`false\`. And sub value \`(channel)\` has reset.]
$onlyIf[$getServerVar[chatbot]!=;{description:$getVar[x] Chatbot settings is already disabled.

**Usage**
\`settings chatbot true #RIGHT_BRACKET#channel#LEFT_BRACKET#\`
\`settings chatbot false\`
}{color:RED}]
$color[$getGlobalUserVar[color]]
$endElseIf
$else
$description[$getVar[x] Chatbot options only accept boolean value \`{true | false}\`.

**Usage**
\`settings chatbot true #RIGHT_BRACKET#channel#LEFT_BRACKET#\`
\`settings chatbot false\`]
$color[RED]
$endIf
$onlyPerms[managechannels;manageserver;managemessages;{description:$getVar[x] You don't have the require permissions to use this command. Permissions required#COLON# \`$commandInfo[settings;perm]\`

**Usage**
\`settings chatbot true #RIGHT_BRACKET#channel#LEFT_BRACKET#\`
\`settings chatbot false\`
}{color:RED}]
`
}