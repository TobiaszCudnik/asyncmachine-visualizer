declare module "jsondiffpatch" {
    export interface IDelta {
        [index: string]: any[]
    }
    
    export interface IDiffPatchConfig {
        objectHash(obj: Object): string;
    }
    
    export interface IDiffPatch {
        reverse(delta: IDelta): IDelta;
        path(source: Object, delta: IDelta);
        diff(source1: Object, source2: Object): IDelta;
    }
    
    export function reverse(delta: IDelta): IDelta;
    export function path(source: Object, delta: IDelta);
    export function diff(source1: Object, source2: Object): IDelta;
    export function create(config: IDiffPatchConfig): IDiffPatch;
}