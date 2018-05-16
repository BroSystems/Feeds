Object.defineProperty(exports, "__esModule", {
    value: true
});
class Database {
    constructor() {
        this._collection = [];
    }

    insert(item) {
        this._collection.push(item);
    }

    select(whereFunction) {
        return this._collection.filter(whereFunction);
    }

    selectOne(whereFunction) {
        return this.select(whereFunction)[0] || null;
    }

    selectAll() {
        return this.select(() => true);
    }

    delete(whereFunction) {
        this._collection = this._collection.filter(x => !whereFunction(x));
    }

    empty() {
        this._collection = [];
    }
}

const database = exports.database = new Database();