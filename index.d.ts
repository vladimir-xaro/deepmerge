export default function deepmerge(target, source, options: {
  mergeObject:  boolean; // default: true
  mergeArray:   boolean; // default: false
}): any;
export function isObject(item: any): boolean;