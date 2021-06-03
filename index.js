export function isObject(item) {
  return (typeof item === 'object' && !Array.isArray(item) && item !== null);
}

export default function deepmerge(target, source, options = {}) {
  const mergeObject = options.mergeObject === undefined ? true : !!options.mergeObject;

  if (isObject(target) && isObject(source)) {
    for (const key of Object.keys(source)) {
      if (mergeObject && isObject(source[key])) {
        if (!target[key] || !isObject(target[key])) {
          target[key] = source[key];
        }

        deepmerge(target[key], source[key]);
      } else if (options.mergeArray && Array.isArray(source[key])) {
        console.log(key);
        if (Array.isArray(target[key])) {
          target[key].push(...source[key]);
        } else {
          Object.assign(target, {
            [key]: source[key]
          })
        }
      } else {
        Object.assign(target, {
          [key]: source[key]
        })
      }
    }
  }
  return target;
}