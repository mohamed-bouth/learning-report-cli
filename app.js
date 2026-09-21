const resources = require("./data/resources")
const calcul = require("./services/resourceService.js")
const report = require("./services/reportService")

console.log(resources.resource)


const result = report.buildReport({
    resourceNumber: calcul.countResources(resources),
    totalDuration: calcul.getTotalDuration(resources),
    averageDuration: calcul.getAverageDuration(resources),
    levels: calcul.countByLevel(resources),
    categories: calcul.countByCategory(resources),
    mostCompleted: calcul.getMostCompletedResource(resources)
})

console.log(result)

