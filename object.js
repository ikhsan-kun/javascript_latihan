// const user = {};
// const products = { name: 'Sepatu', price: 230000 };
const user = { ///mengakses object
    name: 'Dicoding',
    'last name': 'Indonesia',
    age: 9,
  };
  
  console.log(user.name); 
  console.log(user['last name']); 
  ///object distrucitng
  const users = {
    id: 24,
    email: 'aras@dicoding.com',
    name: 'Arsy',
    nickname: 'Aras',
    username: 'aras123',
    password: 'secret',
  };
  
  const { id, email } = users;
  
  console.log(id, email);

// const id = user.id;   <- tanpa object distructing
// const email = user.email;

// console.log(id, email);

const account = {
    balance: 1000,
    debt: 10,
  };
  
  account.balance = 2000;
  console.log(account.balance);  ///mengubah nilai object

//   delete account.debt; //<- untuk enghapus object or delete account['debt'];