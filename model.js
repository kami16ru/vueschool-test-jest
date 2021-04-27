export default class Model {
    constructor(options = {}) {
        const data = options.data || []

        this.$collection = []
        this.$options = Object.assign({ primaryKey: 'id' }, options)

        if(data.length)
            this.record(data)
    }

    record(data) {
        const mappedData = data.map(entry => {
            if(!entry[this.$options.primaryKey]) entry[this.$options.primaryKey] = Date.now()

            return entry
        })

        this.$collection.push( ...mappedData)
    }
    all() {
        return this.$collection.map(entry => Object.assign({}, entry))
    }
    update(key, data) {
        const entryIndex = this.$collection.findIndex(entry => entry[this.$options.primaryKey] === key)

        if (entryIndex < 0) return false

        this.$collection.splice(
            entryIndex,
            1,
            Object.assign(this.$collection[entryIndex], data)
        )
    }
    find(key) {
        const entry = this.$collection.find(entry => entry[this.$options.primaryKey] === key)

        return entry ? Object.assign({}, entry) : null
    }
}
