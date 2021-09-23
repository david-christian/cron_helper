const CronJob = require('cron').CronJob
const job = new CronJob('10 * * * * *', () => {
    console.log("You will see this message every second")
}, null, true, 'America/Los_Angeles')
job.start()