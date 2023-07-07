import { Immutable } from './node_modules/immutable/dist/immutable.d.ts';
const map1: Immutable.map<string, number>;
map1 = Immutable.Map({ a: 1, b: 2, c: 3 });
const map1 = new Map({ a: 1, b: 2, c: 3 });
const map2 = map1.set('b', 50);
map1.get('b') + ' vs. ' + map2.get('b'); // 2 vs. 50
