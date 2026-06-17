// Bank Soal TKA Numerikal Kelas 9
window.daftarSoal = [ // Langsung masukkan ke window, TIDAK pakai const/let/var
  {
    id: 1,
    tipe: "PG",
    tingkatKesulitan: "Sangat Mudah",
    rentangNilai: "4 – 5",
    soal: `Ani membeli 2 pulpen dan 2 pensil di sebuah toko alat tulis. Harga satuan pulpen adalah Rp12.000,00 dan harga satuan pensil adalah Rp8.000,00. Kebetulan, toko tersebut sedang memberikan promo "Hemat Berempat" dengan ketentuan sebagai berikut:<br><br>
    <em>"Setiap pembelian 4 barang (boleh campur) akan mendapat potongan harga sebesar harga 1 barang termurah yang dibeli".</em><br><br>
    Berapa total harga yang harus dibayar Ani dari semua barang yang dibeli?`,
    gambar: null,
    pilihan: [
      "A. Rp32.000,00",
      "B. Rp36.000,00",
      "C. Rp40.000,00",
      "D. Rp44.000,00"
    ],
    kunciJawaban: "A"
  },
  {
    id: 2,
    tipe: "PGK",
    tingkatKesulitan: "Sedang",
    rentangNilai: "8 – 10",
    soal: `Sebuah toko menjual 1 kg beras seharga Rp12.750,00. Jika seseorang membeli 19,6 kg untuk jenis beras yang sama, berapa perkiraan total harga yang mungkin?<br>
    <strong>Pilih semua jawaban benar!</strong>`,
    gambar: null,
    pilihan: [
      "Kurang dari Rp260.000,00",
      "Lebih besar dari Rp240.000,00",
      "Dapat diperkirakan dengan 20 × 12.500,00",
      "Mendekati Rp230.000,00"
    ],
    kunciJawaban: [0, 1, 2]
  },
  {
    id: 3,
    tipe: "PGK",
    tingkatKesulitan: "Lumayan Sulit",
    rentangNilai: "11 – 13",
    soal: `Terdapat tiga bilangan yang dinyatakan dengan (33² − 3²), (8² + 296), dan (36 × 35).<br>
    Bilangan apa saja yang merupakan faktor persekutuan ketiga bilangan tersebut?<br>
    <strong>Pilih semua jawaban benar!</strong>`,
    gambar: null,
    pilihan: [
      "2³ × 3³ × 7",
      "2² × 3² × 7",
      "2² × 3² × 5",
      "2 × 3² × 5"
    ],
    kunciJawaban: [2, 3]
  },
  {
    id: 4,
    tipe: "PG",
    tingkatKesulitan: "Mudah",
    rentangNilai: "6 – 7",
    soal: `Untuk membuat larutan desinfektan atau larutan pembasmi kuman, dibutuhkan cairan A dan B dengan perbandingan A : B = 3 : 5.<br><br>
    Jika tersedia 2,5 liter cairan B, maka volume maksimum larutan yang dapat dibuat adalah ....`,
    gambar: null,
    pilihan: [
      "A. 3,6 liter",
      "B. 4,0 liter",
      "C. 4,8 liter",
      "D. 6,4 liter"
    ],
    kunciJawaban: "B"
  },
  {
    id: 5,
    tipe: "PG",
    tingkatKesulitan: "Mudah",
    rentangNilai: "6 – 7",
    soal: `Harga setengah kilogram cabe rawit pada hari ini adalah Rp35.000,00.<br><br>
    Jika hari ini Ibu membeli cabe rawit seberat 2¼ kilogram, total harga yang harus dibayar Ibu adalah ....`,
    gambar: null,
    pilihan: [
      "A. Rp175.000,00",
      "B. Rp157.500,00",
      "C. Rp140.000,00",
      "D. Rp87.500,00"
    ],
    kunciJawaban: "B"
  }
];

// HAPUS baris ini karena sudah langsung masuk ke window di atas
// if (typeof window !== 'undefined') {
//     window.daftarSoal = daftarSoal;
// }
