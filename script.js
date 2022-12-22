'use strict'

function resolveAfter(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 1000)
  });
}

async function add(x) {
  const a = await resolveAfter(20);
  const b = await resolveAfter(30);
  return x + a + b;
}

add(10).then(v => {
  console.log(v);     //Напечатает "60" через 2 секунды
});