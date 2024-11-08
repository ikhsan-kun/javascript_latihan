for (let i = 0; i < 5; i++) {
    console.log(`Angka ke-${i} adalah ${i}`);
}


// For in banyak digunakan untuk pengulangan pada object karena ia dapat melakukan iterasi ke seluruh data di dalam objek.
//  Bahkan, ia juga dapat melakukan iterasi ke properti inheritance dari object seperti length.

const person = { name: 'Fulan', origin: 'Bandung', birthYear: 2024 };

for (const property in person) {
  console.log(`${property} bernilai ${person[property]}`);
}
// name bernilai Fulan    
// origin bernilai Bandung
// birthYear bernilai 2024


// Kehadiran for of dimulai pada ECMAScript 2015 (ES6). For of berbeda dengan for in.
//  For of lebih sederhana karena kita tidak perlu memikirkan property dan key
const names = ['Bebek', 'Ayam', 'Telor', 'Tempe'];

for (const item of names) {
  console.log(item);
}



let i = 0;

while (i < 5) {
  console.log(`Angka ke-${i} adalah ${i}.`);
  i++;
}


let b = 0;

do {
  console.log(`Angka ke-${b} adalah ${b}.`);
  b++;
} while (b < 5);

for (let i = 0; i < 10; i++) {
    if (i === 5) {
      break;
    }
  
    console.log(i);
}
for (let i = 0; i < 10; i++) {
        if (i === 5) {
            continue;
        }
        console.log(i);
}