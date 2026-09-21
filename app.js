const resources = require("./data/resources")
const calcul = require("./services/resourceService.js")
const report = require("./services/reportService")


const result = report.buildReport({
    resourceNumber: calcul.countResources(resources),
    totalDuration: calcul.getTotalDuration(resources),
    averageDuration: calcul.getAverageDuration(resources),
    levels: calcul.countByLevel(resources),
    categories: calcul.countByCategory(resources),
    mostCompleted: calcul.getMostCompletedResource(resources)
})

require("./firstModule.js")
require("./secondModule.js")

