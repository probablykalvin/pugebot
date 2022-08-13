module.exports = ({
  name: "eval",
  code: `$eval[$message]
  $argsCheck[>1;]
  $onlyForIDs[$botOwnerID;]`
})