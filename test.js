function deepClone(obj){
  if(typeof obj !== 'object' || obj === null) return obj;
  let clone = Array.isArray(obj) ? [] : {};
  for(let key in obj){
    clone[key] = deepClone(obj[key]);
  }
  return clone;
}

