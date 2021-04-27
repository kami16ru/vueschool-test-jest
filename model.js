export default class Model {
    constructor(data = []) {
        this.$collection = []

        if(data.length)
            this.record(data)
    }

    record(data) {
        const primaryKey = 'id'
        const mappedData = data.map(entry => {
            if(!entry[primaryKey]) entry[primaryKey] = Date.now()

            return entry
        })

        this.$collection.push( ...mappedData)
    }
    all() {
        return this.$collection.map(entry => Object.assign({}, entry))
    }
    update(key, data) {
        const primaryKey = 'id'
        const entryIndex = this.$collection.findIndex(entry => entry[primaryKey] === key)

        if (entryIndex < 0) return false

        this.$collection.splice(
            entryIndex,
            1,
            Object.assign(this.$collection[entryIndex], data)
        )
    }
    find(key) {
        const primaryKey = 'id'
        const entry = this.$collection.find(entry => entry[primaryKey] === key)

        return entry ? Object.assign({}, entry) : null
    }
}
