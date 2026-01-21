// Ejercicio 142
// Simplify un dado absolute path for un file en Unix‑style.

function simplifyPath(path) {
  const parts = path.split('/');
  const stack = [];
  for (let part of parts) {
    if (part === '' || part === '.') continue;
    if (part === '..') stack.pop();
    else stack.push(part);
  }
  return '/' + stack.join('/');
}
console.log(simplifyPath('/home//foo/'));            // '/home/foo'
console.log(simplifyPath('/a/./b/../../c/'));        // '/c'
