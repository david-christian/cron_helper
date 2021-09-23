const cron = require("node-cron")
let task = cron.schedule('10 * * * * *', () => {
    const url = 'http://127.0.0.1:5003/reqjob'
    requestAnimationFrame({
        url
    }, (err, res, body) => {
        console.log("sucess", code)
    })
})