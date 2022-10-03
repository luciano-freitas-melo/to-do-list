const os = require('os')

setInterval(() => {
    const { freemem, totalmem } = os

    const mem = parseInt(freemem() / 1024 / 1024)
    const total = parseInt(totalmem() / 1024 / 1024)

    const percents = parseInt((mem / total) * 100)

    const stats = {
        free: `${mem} MB`,
        total: `${total} MB`,
        percents: `${percents}%`
    }

    console.clear()
    console.table(stats)

}, 1000)
