const router = require('express').Router()
const hook = new (require('discord.js').WebhookClient)("")
router.post('/', (req, res, next) => {
  console.log("Hook received.")
  if (res.headers.Authorization == process.env.dblwhtok) {
    // SOON
  }
})

router.listen(process.env.PORT || 5000, () => {
  console.log("Listening on port 5000.")
})
