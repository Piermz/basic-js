// Deklarasi variabel
// let & const
// nilai let bisa diubah
// nilai const tidak bisa diubah



let x = 10;        // Variabel numerik
let y = 15;        // Variabel numerik
let z = 20*(x + y);// Variabel numerik hasil perhitungan: 20 * (10 + 15) = 500
let isAdmin = false;    // Variabel boolean
let isLoggedIn = true;  // Variabel boolean
age = 25;        // Variabel numerik
// Operator Logical (Logika)
// Operator AND (&&): true jika kedua operand true
// console.log(isAdmin && isLoggedIn);  // Output: false (karena isAdmin false)

// Operator OR (||): true jika salah satu operand true
// console.log(isAdmin || isLoggedIn);  // Output: true (karena isLoggedIn true)

// Operator NOT (!): membalikkan nilai boolean
// console.log(!isAdmin);  // Output: true (kebalikan dari false)

// Operator Arithmetic (Aritmetika)
// Berikut adalah contoh-contoh operator aritmetika (dikomentari)
// console.log(x + y);  // Penjumlahan: 10 + 15 = 25
// console.log(x - y);  // Pengurangan: 10 - 15 = -5
// console.log(x * y);  // Perkalian: 10 * 15 = 150
// console.log(x / y);  // Pembagian: 10 / 15 ≈ 0.6667
// console.log(x % y);  // Modulus (sisa bagi): 10 % 15 = 10
// console.log(++x);    // Increment: x menjadi 11, lalu ditampilkan
// console.log(--x);    // Decrement: x menjadi 10 lagi, lalu ditampilkan
// console.log(z);      // Menampilkan nilai z (500)

// Operator Perbandingan
// Berikut adalah contoh-contoh operator perbandingan (dikomentari)
// console.log(x == null);  // Sama dengan (dengan konversi tipe): false
// console.log(x === y);    // Sama dengan ketat (tanpa konversi tipe): false
// console.log(x !== y);    // Tidak sama dengan ketat: true
// console.log(x > y);      // Lebih besar dari: false (10 tidak lebih besar dari 15)

if(age >= 18) {
    console.log('Anda sudah dewasa');
} else {
    console.log('Anda masih anak-anak');
}