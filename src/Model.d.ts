import { FlatVectors, MessageCallback } from './types'

/** 
 * A Cassini model
 */
export class Model {

    onMessage(msg: MessageCallback): void
    onWarning(msg: MessageCallback): void
    onError(msg: MessageCallback): void

    beginConstruction(): void
    newObject(name: string, id: number): void
    newComponent(name, id: number, vertices: FlatVectors, tetras: FlatVectors): void
    addBorder(type: string, name: string, id: number, triangleIndices: FlatVectors, polarity: boolean): void
    endConstruction(): void

    isValid(): boolean
    surfaceExist(name: string): boolean
    surfaceNames(): string[]

    /**
     * @param surfaceType Can be either "voi" (or "boundary"), "fault", "horizon", "erosion", "baselap", "discontinuity" or "unknown"
     */
    surfaceNamesOfType(surfaceType: string): string[]
    info(): string
    surfaceAsGocad(name: string): string

    /**
     * Gett the voi shell as a Gocad TSurf buffer
     */
    voiShell(): string

    /**
     * 
     * @param surfaceName 
     * @param ui 
     * @param direction Either "x", "y" or "z"
     */
    setDirichlet(surfaceName: string, ui: number, direction: string): boolean

    /**
     * @see setDirichlet
     */
    setHomogenousNeumann(surfaceName: string, ui: number, di: string): boolean

    /**
     * 
     * @param surfaceName 
     * @param altitude 
     * @param incrementalMethod Either "verticalFlow" or "normalflow"
     */
    setRestoration(surfaceName: string, altitude: number, incrementalMethod: string): boolean
    setSoftRestoration(surfaceName: string, altitude: number): boolean
    setFreeIsoAltitude(surfaceName: string): boolean
    setBilateralContact(surfaceName: string): boolean
    setBilateralContactOn(surfaceName: string): boolean
    setUnfault(surfaceName: string): boolean
    setBeddingSlip(surfaceName: string): boolean
    setLocked(surfaceName: string): boolean
    setStickyLines(surfaceName: string): boolean
    setAllStickyLines(): boolean

    run()
    release(): void
}
