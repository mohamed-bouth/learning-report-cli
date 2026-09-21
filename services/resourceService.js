
export function countResources(resources) {
    return resources.length
}

export function getTotalDuration(resources) {
    const duration = resources.reduce((total, resource) => {
        return total += resource.durationMinutes
    }, 0)

    return duration
}

export function getAverageDuration(resources) {
    const duration = resources.reduce((total, resource) => {
        return total += resource.durationMinutes
    }, 0)

    const durationAverage = duration / resources.length

    return durationAverage
}

export function countByLevel(resources) {
    const niveaus = resources.reduce((acc, resource) => {
        if (!acc[resource.level]) {
            acc[resource.level] = [resource]
            return acc
        }
        acc[resource.level].push(resource)
        return acc

    }, {})

    return niveaus
}

export function countByCategory(resources) {
    const categories = resources.reduce((acc, resource) => {
        if (!acc[resource.category]) {
            acc[resource.category] = [resource]
            return acc
        }
        acc[resource.category].push(resource)
        return acc

    }, {})

    return categories
}

export function getMostCompletedResource(resources) {
    const MostCompleted = resources.reduce((most, resource) => {
        if (resource.completedBy.length > most.completedBy.length) {
            return resource
        }
        return most
    })

    return MostCompleted
}

export function filterByCategory(resources, category) {
    return resources.filter(resource => resource.category === category)
}