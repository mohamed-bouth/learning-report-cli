export function buildReport({
    resourceNumber,
    totalDuration,
    averageDuration,
    levels,
    categories,
    mostCompleted
}) {
    return `
            ================================
            LEARNING RESOURCES REPORT
            ================================

            Resources: ${resourceNumber}
            Beginner: ${levels.beginner.length}
            Intermediate: ${levels.intermediate.length}
            Advanced: ${levels.advanced.length}

            Total resources: ${resourceNumber}
            Total duration: ${totalDuration} min
            Average duration: ${averageDuration} min

            Resources by category:
            JavaScript: ${categories.JavaScript.length}
            Backend: ${categories.Backend.length}
            Git/GitHub: ${categories["Git/GitHub"].length}
            Database: ${categories.Database.length}

            Most completed:
            ${mostCompleted.title} - ${mostCompleted.completedBy.length} learners
            `;

}