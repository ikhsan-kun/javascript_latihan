// Map adalah tipe data yang mirip dengan object yaitu menyimpan data dengan key-value. Kalau sama seperti object,
//  lalu apa fungsinya map? Map berfungsi untuk menutupi kekurangan dari object. Map dapat menggunakan key dengan tipe data apa pun,
//  tidak seperti object yang hanya menerima string. Jadi perbedaan mendasarnya terletak pada key yang digunakan.
const productMap = new Map([
    ['shoes', 500],
    ['cap', 350],
    ['jeans', 250]
]);
  
console.log(productMap);

const map = new Map();
map.set('name', 'aras' ); // memasukkan key dan value
console.log(map); // Map(1) { 'name' => 'aras' }
// map.set(1, 'number one');
// console.log(map); // Map(1) { 1 => 'number one' }

// const map = new Map();
// map.set('name', 'aras'); untuk mengakses value dari map
// console.log(map.get('name')); 

// const map = new Map();
// map.set('name', 'aras');
// map.set('last name', 'opraza');
// map.delete('last name');
// console.log(map); // Map(1) { 'name' => 'aras' }