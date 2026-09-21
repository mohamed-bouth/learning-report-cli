import resources from "./data/resources.js"
import * as calcul from "./services/resourceService.js"
import { buildReport } from "./services/reportService.js"


const result = buildReport({
    resourceNumber: calcul.countResources(resources),
    totalDuration: calcul.getTotalDuration(resources),
    averageDuration: calcul.getAverageDuration(resources),
    levels: calcul.countByLevel(resources),
    categories: calcul.countByCategory(resources),
    mostCompleted: calcul.getMostCompletedResource(resources)
})

console.log(result)

