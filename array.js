const array = [1, 2]; //membuat array
console.log(typeof array);

const users = new Array(); ///<- membuat array dengan constructor
const numbers = new Array(5);


const foo = Array.from('foo');///cara lain membuat array adalah dengan array.from
console.log(foo); // Output: ['f', 'o', 'o']


const user = new Array('John', 'Jane', 'Jack', 'Jill'); ///Array.from merupakan method untuk membuat array yang diperkenalkan di ES6. Array.from juga dapat dimanfaatkan untuk menyalin array lainnya
const customer = Array.from(user);
console.log(customer); // Output: ["John", "Jane", "Jack", "Jill"]


///manipulasi nilai array
const myArray = [1, 2, 3, 4, 5];
myArray[1] = 10;
console.log(myArray); 


////Push adalah cara yang kita gunakan untuk menambahkan nilai ke dalam array pada element terakhir
myArray.push(6);


delete myArray[1]; //untuk menghapus value di array dengan melakukan indeks
const mArray = ['Android', 'Data Science', 'Web'];
mArray.splice(1, 1);
mArray.reverse(); //untuk mengembalikan nilai dengan terbalik
myArray.sort();//untuk mengurutkan array dari yang terkecil hingga yang terbesar
console.log(mArray); // Output: ['Android', 'Web']

// Method splice membutuhkan dua parameter yaitu indeks dari element yang
// ingin dihapus dan jumlah element yang ingin dihapus. Pada 
// contoh di atas, kita menghapus element indeks ke-1 dan jumlah element yang dihapus adalah 1
mArray.splice(1, 2); //output ['android']



///////////////

const introduction = ['Hello', 'Arsy']; 
const [greeting, name] = introduction; ///array destructing
console.log(greeting); // Output: Hello