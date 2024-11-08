// Terakhir, struktur data yang kita bahas adalah set. Set adalah struktur data 
// yang spesial dibandingkan dengan map, array, dan object. Kenapa dikatakan spesial?

// Jawabannya adalah karena set tidak memiliki key dan indeks ketika menyimpan data. Sel

// ain itu, data yang disimpan di dalam set akan bernilai unik artinya tidak 
// akan ada data yang duplikat. Spesial, bukan?

const mySet = new Set([1, 2, 3]);

console.log(mySet);


const sets = new Set();
sets.add(1);
sets.add('Apple');
sets.add(1); ///tidak akan bisa di input 
sets.add('Apple');

console.log(sets); // Output: Set { 1, 'Apple' }

const set = new Set(); 
set.add(1);
set.add('san');
// set.delete(1); untuk menghapus value di dalam set

for (const number of set) {///untuk mengakses nilai di set 
  console.log(number); // Output: 1, san
}

set.forEach((value) => console.log(value)); //atau bisa juga menggunakan for each