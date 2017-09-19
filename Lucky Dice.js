/*

==========
Lucky Dice
==========

Seorang penjudi diberi kesempatan mengocokan dadu sebanyak 4 (empat) kali.

Ia akan mendapat denda cash sebesar $10 dikalikan dengan jumlah angka
yang keluar dari dadu, apabila bukan 6.

Apabila keluar angka 6, ia akan mendapatkan cash senilai $600

Selamat mencoba

*/

function rollDice(dadu) {
var tampung = 0;

for (var i = 0; i < dadu.length; i++) {
    if (dadu[i]!==6) {
      tampung = tampung+dadu[i] * -10;
    }else {
      tampung= tampung+dadu[i] *100;
    }
  }
  return tampung
}


var name = ''; // ISI NAMA DISINI============<


var nameUp = name.toUpperCase();
if(name === ''){
  console.log('Hello Gamblers, to play this games');
  console.log('Please insert your name in var name');
  console.log('Please insert your 4(four) lucky number in console.log rollDice bellow');

}else{
  console.log('Gambler ' +nameUp+ ', today dice result');
  console.log('US Dollar');
  console.log(rollDice([5,4,4,2])); // ISI LUCKY NUMBER( 1, 2, 3, 4) TERDIRI DARI 4 ANGKA BEBAS(1-6)==========<
}

/*
PSEUDOCODE

FUNCTION ROLLDICE
yang menerima satu parameter berupa array. isi dari array pasti 4 nilai yang merupakan
nilai dari dadu.
KEMBALIKAN nilai hanya berupa angka


TULIS dan simpan nama
IF nama kosong
TAMPILKAN hello to play this games
          Please insert your name in var name
          Please insert 4 lucky number in console.log bellow
ELSE

UBAH nama di var name menjadi uppercase


HITUNG
  Shuffle dadu sebanyak 4(empat) kali
  hasil dadu = (1,2,3,4)
  cash = (dadu1 * a or b) + (dadu2 * a or b) + (dadu3 * a or b) + (dadu4 * a or b)

      IF A angka dadu keluar bukan 6,
      angka dadu yang keluar kalikan dengan $-10
      ELSE B angka dadu keluar 6,
      angka dadu 6 kalikan dengan $100

TAMPILKAN
    Gambler ' +name+ ', today dice result
    US Dollar
    Hasil cash dari shuffle dadu sebanyak 4 kali

*/
