import { Model } from './Model'

export class AssemblyIterator {
    constructor(model: Model)

    start(): void
    next(): void
    hasMore(): boolean

    name(): string
    type(): string
    nbComponents(): number
    
    gocadBuffer(): string
}
