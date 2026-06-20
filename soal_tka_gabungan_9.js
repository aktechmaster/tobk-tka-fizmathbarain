// ==================================================
// BANK SOAL TKA GABUNGAN: LITERASI & NUMERASI KELAS 9
// ==================================================
window.daftarSoal = [
  {
    id: 1,
    kategori: "LITERASI", // ✅ Kategori ditambahkan
    tipe: "PG",
    tingkatKesulitan: "Sangat Mudah",
    rentangNilai: "4 – 5",
    soal: `[ISI SOAL LITERASI NOMOR 1 DI SINI]<br><br>
    Contoh: Bacalah teks berikut dengan cermat! Berdasarkan isi teks tersebut, apa gagasan utama paragraf kedua?`,
    gambar: null,
    pilihan: [
      "A. [Pilihan A]",
      "B. [Pilihan B]",
      "C. [Pilihan C]",
      "D. [Pilihan D]"
    ],
    kunciJawaban: "A"
  },
  {
    id: 2,
    kategori: "LITERASI", // ✅ Kategori ditambahkan
    tipe: "PGK",
    tingkatKesulitan: "Sedang",
    rentangNilai: "8 – 10",
    soal: `[ISI SOAL LITERASI NOMOR 2 DI SINI]<br><br>
    <strong>Pilih semua jawaban benar!</strong>`,
    gambar: null,
    pilihan: [
      "[Pilihan 1]",
      "[Pilihan 2]",
      "[Pilihan 3]",
      "[Pilihan 4]"
    ],
    kunciJawaban: [0, 1]
  },
  {
    id: 3,
    kategori: "LITERASI", // ✅ Kategori ditambahkan
    tipe: "PGK",
    tingkatKesulitan: "Lumayan Sulit",
    rentangNilai: "11 – 13",
    soal: `[ISI SOAL LITERASI NOMOR 3 DI SINI]<br><br>
    <strong>Pilih semua jawaban benar!</strong>`,
    gambar: null,
    pilihan: [
      "[Pilihan 1]",
      "[Pilihan 2]",
      "[Pilihan 3]",
      "[Pilihan 4]"
    ],
    kunciJawaban: [1, 3]
  },
  {
    id: 4,
    kategori: "LITERASI", // ✅ Kategori ditambahkan
    tipe: "PG",
    tingkatKesulitan: "Mudah",
    rentangNilai: "6 – 7",
    soal: `[ISI SOAL LITERASI NOMOR 4 DI SINI]`,
    gambar: null,
    pilihan: [
      "A. [Pilihan A]",
      "B. [Pilihan B]",
      "C. [Pilihan C]",
      "D. [Pilihan D]"
    ],
    kunciJawaban: "C"
  },
  {
    id: 5,
    kategori: "LITERASI", // ✅ Kategori ditambahkan
    tipe: "PG",
    tingkatKesulitan: "Mudah",
    rentangNilai: "6 – 7",
    soal: `[ISI SOAL LITERASI NOMOR 5 DI SINI]`,
    gambar: null,
    pilihan: [
      "A. [Pilihan A]",
      "B. [Pilihan B]",
      "C. [Pilihan C]",
      "D. [Pilihan D]"
    ],
    kunciJawaban: "B"
  },

  {
    id: 99,
    kategori: "-", // Info tidak masuk perhitungan
    tipe: "INFO",
    tingkatKesulitan: "-",
    rentangNilai: "0 – 0",
    soal: `
    <div style="text-align:center; padding:30px 20px; background-color:#fff9c4; border:2px solid #fbc02d; border-radius:12px; color:#856404;">
      <h2 style="margin:0 0 15px 0; font-size:22px; font-weight:900;">📢 PERHATIAN</h2>
      <p style="font-size:17px; line-height:1.6; margin:0;">
        Anda telah menyelesaikan bagian <strong>TKA LITERASI</strong>.<br><br>
        Selanjutnya Anda akan mengerjakan soal bagian <strong>TKA NUMERASI (MATEMATIKA)</strong>.<br>
        Silakan tekan tombol <strong>SELANJUTNYA</strong> di bawah ini untuk melanjutkan ujian.
      </p>
    </div>
    `,
    gambar: null,
    pilihan: [],
    kunciJawaban: ""
  },

  [
  {
    id: 31,
    kategori: "NUMERASI",
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
    id: 32,
    kategori: "NUMERASI",
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
    id: 33,
    kategori: "NUMERASI",
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
    id: 34,
    kategori: "NUMERASI",
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
    id: 35,
    kategori: "NUMERASI",
    tipe: "PG",
    tingkatKesulitan: "Mudah",
    rentangNilai: "6 – 7",
    soal: `Harga setengah kilogram cabe rawit pada hari ini adalah Rp35.000,00.<br><br>
    Jika hari ini Ibu membeli cabe rawit seberat 2¼ kilogram, total harga yang harus dibayar Ibu adalah ....`,
    gambar: null,
    pilihan: [
      "A. Rp126.000,00",
      "B. Rp157.500,00",
      "C. Rp175.000,00",
      "D. Rp192.500,00"
    ],
    kunciJawaban: "B"
  },
  {
    id: 36,
    kategori: "NUMERASI",
    tipe: "PG",
    tingkatKesulitan: "Sangat Mudah",
    rentangNilai: "4 – 5",
    soal: `
    <p><strong>Proyek Renovasi Gedung</strong></p>
    <p>Proyek renovasi suatu gedung sekolah harus diselesaikan paling lambat dalam waktu 60 hari sesuai dengan kontrak kerja yang telah disepakati bersama. Manajer proyek telah menghitung kebutuhan tenaga kerja dengan asumsi setiap pegawai memiliki kemampuan dan produktivitas yang sama setiap harinya. Kemajuan proyek sangat bergantung pada jumlah pegawai; semakin banyak pegawai yang bekerja, maka waktu pengerjaan akan semakin singkat.</p>
    <p>Pekerjaan dinyatakan selesai jika seluruh beban kerja telah terpenuhi. Jika terjadi kendala pada jumlah pegawai atau waktu kerja, manajer harus melakukan penyesuaian agar total beban kerja tetap terpenuhi tepat waktu. Penyesuaian ini sangat penting dilakukan agar renovasi gedung selesai tepat 60 hari tanpa melanggar batas kontrak yang ada.</p>
    <br>
    <p><strong>Berdasarkan perencanaan awal, renovasi gedung dapat diselesaikan oleh 12 pegawai dalam waktu 60 hari. Jika manajer memutuskan untuk menambah jumlah pegawai menjadi 18 orang agar pekerjaan lebih cepat selesai, maka waktu yang diperlukan untuk menyelesaikan renovasi tersebut adalah...</strong></p>
    `,
    gambar: null,
    pilihan: [
      "A. 30 hari",
      "B. 40 hari",
      "C. 45 hari",
      "D. 90 hari"
    ],
    kunciJawaban: "B"
  },
  {
    id: 37,
    kategori: "NUMERASI",
    tipe: "BS",
    tingkatKesulitan: "Sedang",
    rentangNilai: "8 – 10",
    soal: `
    <p><strong>Proyek Renovasi Gedung</strong></p>
    <p>Proyek renovasi suatu gedung sekolah harus diselesaikan paling lambat dalam waktu 60 hari sesuai dengan kontrak kerja yang telah disepakati bersama. Manajer proyek telah menghitung kebutuhan tenaga kerja dengan asumsi setiap pegawai memiliki kemampuan dan produktivitas yang sama setiap harinya. Kemajuan proyek sangat bergantung pada jumlah pegawai; semakin banyak pegawai yang bekerja, maka waktu pengerjaan akan semakin singkat.</p>
    <p>Pekerjaan dinyatakan selesai jika seluruh beban kerja telah terpenuhi. Jika terjadi kendala pada jumlah pegawai atau waktu kerja, manajer harus melakukan penyesuaian agar total beban kerja tetap terpenuhi tepat waktu. Penyesuaian ini sangat penting dilakukan agar renovasi gedung selesai tepat 60 hari tanpa melanggar batas kontrak yang ada.</p>
    <br>
    <p><strong>Berdasarkan situasi tersebut, tentukan Benar atau Salah untuk setiap pernyataan berikut tentang penyelesaian renovasi gedung tersebut!</strong></p>
    `,
    gambar: null,
    pilihan: [
        "Sisa pekerjaan yang harus diselesaikan setelah hari ke-10 adalah setara dengan pekerjaan 800 hari penuh yang dikerjakan 1 orang.",
        "Selama 10 hari pertama, proyek mengalami ketertinggalan jadwal yang setara dengan hasil kerja 5 orang selama 10 hari.",
        "Agar renovasi tetap selesai tepat waktu manajer cukup mempekerjakan kembali 15 pegawai semula tanpa perlu menambah tenaga kerja tambahan."
    ],
    kunciJawaban: [0, 0, 1]
},
  {
    id: 38,
    kategori: "NUMERASI",
    tipe: "PGK",
    tingkatKesulitan: "Lumayan Sulit",
    rentangNilai: "11 – 13",
    soal: `
    <p><strong>Proyek Renovasi Gedung</strong></p>
    <p>Proyek renovasi suatu gedung sekolah harus diselesaikan paling lambat dalam waktu 60 hari sesuai dengan kontrak kerja yang telah disepakati bersama. Manajer proyek telah menghitung kebutuhan tenaga kerja dengan asumsi setiap pegawai memiliki kemampuan dan produktivitas yang sama setiap harinya. Kemajuan proyek sangat bergantung pada jumlah pegawai; semakin banyak pegawai yang bekerja, maka waktu pengerjaan akan semakin singkat.</p>
    <p>Pekerjaan dinyatakan selesai jika seluruh beban kerja telah terpenuhi. Jika terjadi kendala pada jumlah pegawai atau waktu kerja, manajer harus melakukan penyesuaian agar total beban kerja tetap terpenuhi tepat waktu. Penyesuaian ini sangat penting dilakukan agar renovasi gedung selesai tepat 60 hari tanpa melanggar batas kontrak yang ada.</p>
    <br>
    <p><strong>Berdasarkan situasi tersebut, berikut ini manakah pernyataan yang sesuai tentang penyelesaian renovasi gedung dalam sisa waktu yang tersedia?</strong></p>
    <strong>Pilih semua jawaban benar! Jawaban benar lebih dari satu.</strong>
    <p>• Sisa waktu efektif yang tersedia untuk menyelesaikan seluruh sisa pekerjaan adalah 24 hari.</p>
    <p>• Beban pekerjaan yang masih tersisa setara dengan hasil kerja 20 orang selama 60 hari.</p>
    <p>• Manajer proyek harus menyiapkan total 30 pegawai agar proyek selesai tepat waktu.</p>
    <p>• Manajer proyek cukup menambah 5 orang pegawai dari jumlah semula agar renovasi gedung selesai tepat waktu.</p>
    `,
    gambar: null,
    pilihan: [
      "Pernyataan 1",
      "Pernyataan 2",
      "Pernyataan 3",
      "Pernyataan 4"
    ],
    kunciJawaban: [0, 2]
  },
  {
    id: 39,
    kategori: "NUMERASI",
    tipe: "PG",
    tingkatKesulitan: "Mudah",
    rentangNilai: "6 – 7",
    soal: `
    <p><strong>Alur Pelayanan Donor Darah</strong></p>
    <p>Kegiatan donor adalah salah satu bentuk aksi kemanusiaan yang sangat bermanfaat untuk diri sendiri dan orang lain. Setetes darah yang disumbangkan dapat memberikan harapan hidup bagi orang lain yang membutuhkan, terutama mereka yang mengalami kecelakaan, setelah menjalani operasi, atau menderita penyakit yang serius. Tak hanya untuk penerima, pendonor juga bisa mendapatkan manfaat. Diantaranya bermanfaat untuk mendeteksi penyakit, meningkatkan produksi sel darah, dan menjaga kesehatan jantung. Oleh karena itu disarankan untuk melakukan donor darah tiga bulan setelah donor darah terakhir.</p>
    <p>Biasanya aksi donor darah difasilitasi oleh Palang Merah Indonesia (PMI). Berikut adalah alur kegiatan donor darah di sebuah posko PMI.</p>
    <p><em>(Lihat gambar: 9,10,11.png)</em></p>
    <p>Seorang pendonor darah mendatangi posko PMI. Kebetulan saat ini sedang tidak ada antrian sehingga orang tersebut dapat langsung dilayani.</p>
    <br>
    <p><strong>Jika tidak ada kendala pada pelayanan donor darah, apa yang sedang dilakukan pendonor tersebut setelah 25 menit berlalu?</strong></p>
    `,
    gambar: "9,10,11.png",
    pilihan: [
      "A. Tahap pemeriksaan kesehatan",
      "B. Duduk di kursi tunggu",
      "C. Proses pengambilan darah",
      "D. Istirahat di ruang pemulihan"
    ],
    kunciJawaban: "C"
  },
  {
    id: 40,
    kategori: "NUMERASI",
    tipe: "PGK",
    tingkatKesulitan: "Sedang",
    rentangNilai: "8 – 10",
    soal: `
    <p><strong>Alur Pelayanan Donor Darah</strong></p>
    <p>Kegiatan donor adalah salah satu bentuk aksi kemanusiaan yang sangat bermanfaat untuk diri sendiri dan orang lain. Setetes darah yang disumbangkan dapat memberikan harapan hidup bagi orang lain yang membutuhkan, terutama mereka yang mengalami kecelakaan, setelah menjalani operasi, atau menderita penyakit yang serius. Tak hanya untuk penerima, pendonor juga bisa mendapatkan manfaat. Diantaranya bermanfaat untuk mendeteksi penyakit, meningkatkan produksi sel darah, dan menjaga kesehatan jantung. Oleh karena itu disarankan untuk melakukan donor darah tiga bulan setelah donor darah terakhir.</p>
    <p>Biasanya aksi donor darah difasilitasi oleh Palang Merah Indonesia (PMI). Berikut adalah alur kegiatan donor darah di sebuah posko PMI.</p>
    <p><em>(Lihat gambar: 9,10,11.png)</em></p>
    <p>Pada suatu waktu, Yuda baru saja sampai di posko PMI untuk melakukan donor darah. Diketahui bahwa Rama dan Fajar juga berada di posko PMI tersebut. Rama sedang menunggu antrian untuk proses pengambilan darah, sedangkan Fajar sedang proses pengambilan darah sejak 16 menit yang lalu. Mereka tidak ada janji untuk pulang bersama ketika donor darah selesai.</p>
    <br>
    <p><strong>Berikut ini pernyataan manakah yang mungkin akan terjadi di posko PMI tersebut?</strong></p>
    <strong>Pilih semua jawaban benar! Jawaban benar lebih dari satu.</strong>
    <p>• Yuda sempat bertemu Rama di kursi tunggu.</p>
    <p>• Ketika Yuda proses pengambilan darah, Fajar telah pulang lebih dulu.</p>
    <p>• Yuda menunggu di kursi tunggu selama 30 menit.</p>
    <p>• Sejak pertama kali datang hingga pulang, Yuda menghabiskan waktu lebih dari 1,5 jam.</p>
    `,
    gambar: "9,10,11.png",
    pilihan: [
      "Pernyataan 1",
      "Pernyataan 2",
      "Pernyataan 3",
      "Pernyataan 4"
    ],
    kunciJawaban: [0, 3]
  },
  {
    id: 41,
    kategori: "NUMERASI",
    tipe: "BS", 
    tingkatKesulitan: "Sedang",
    rentangNilai: "0 – 10",
    soal: "Tentukan Benar atau Salah untuk setiap pernyataan berikut tentang situasi di lokasi donor darah pada hari tersebut!",
    gambar: null,
    pilihan: [
        "Posko PMI mulai didatangi calon pendonor sejak pukul 10.30.",
        "Ada kemungkinan terdapat 3 orang di ruang tunggu.",
        "Pada pukul 11.00 belum ada pendonor yang memasuki tahap pemulihan."
    ],
    kunciJawaban: [0, 1, 0]
},
  {
    id: 42,
    kategori: "NUMERASI",
    tipe: "PG",
    tingkatKesulitan: "Mudah",
    rentangNilai: "6 – 7",
    soal: `
    <p><strong>Perhatikan bentuk aljabar berikut.</strong></p>
    <p>$$(x + 2)(3 + y) + (x + 2)(1 - y)$$</p>
    <br>
    <p>Bentuk sederhana dari bentuk aljabar tersebut adalah ....</p>
    `,
    gambar: null,
    pilihan: [
      "A. $4(x + 2)$",
      "B. $x + 2 + 4y$",
      "C. $4(x + 8)$",
      "D. $4x + 2y$"
    ],
    kunciJawaban: "A"
  },
  {
    id: 43,
    kategori: "NUMERASI",
    tipe: "PGK",
    tingkatKesulitan: "Lumayan Sulit",
    rentangNilai: "11 – 13",
    soal: `
    <p><strong>Sebuah jasa pengantaran barang mengenakan biaya sebagai berikut:</strong></p>
    <p>• Biaya tetap pemesanan sebesar Rp12.000,00.</p>
    <p>• Biaya pengantaran Rp4.000,00 per kilometer.</p>
    <p>Seorang pelanggan memiliki anggaran tidak lebih dari Rp40.000,00 untuk satu kali pemesanan jasa antar.</p>
    <br>
    <p><strong>Berikut ini, manakah pernyataan yang benar tentang permasalahan tersebut? Pilih semua jawaban benar! Jawaban benar lebih dari satu.</strong></p>
    <p>• Apabila $x$ menyatakan jarak pengantaran (dalam km), maka permasalahan dapat dimodelkan dengan $4.000x + 12.000 \\le 40.000$.</p>
    <p>• Jarak pengantaran maksimum yang masih dapat dipilih pelanggan adalah 7 km.</p>
    <p>• Jika jarak pengantaran 8 km, maka biaya total melebihi anggaran.</p>
    <p>• Penambahan jarak antar 1 km akan menambah biaya sebesar Rp16.000,00.</p>
    `,
    gambar: null,
    pilihan: [
      "Pernyataan 1",
      "Pernyataan 2",
      "Pernyataan 3",
      "Pernyataan 4"
    ],
    kunciJawaban: [0, 1, 2]
  },
  {
    id: 44,
    kategori: "NUMERASI",
    tipe: "BS",
    tingkatKesulitan: "Sulit",
    rentangNilai: "14 – 16",
    soal: `
    <p><strong>Misalkan $a$ dan $b$ merupakan dua bilangan real sehingga sistem persamaan linear (SPL)</strong></p>
    <p>$$\\begin{cases} 2x + ay = 4, \\\\ bx - 2y = -1, \\end{cases}$$</p>
    <p><strong>mempunyai solusi $(x, y) = (5, -2)$.</strong></p>
    <br>
    <p><strong>Tentukan Benar atau Salah untuk setiap pernyataan berikut terkait dengan nilai $a$ dan $b$!</strong></p>
    <p>• $a$ merupakan bilangan prima.</p>
    <p>• $b$ merupakan bilangan ganjil.</p>
    <p>• $10a + b = 31$.</p>
    `,
    gambar: null,
    pilihan: [
      "a merupakan bilangan prima.",
      "b merupakan bilangan ganjil.",
      "10a + b = 31."
    ],
    kunciJawaban: [0, 0, 1]
  },
  {
    id: 45,
    kategori: "NUMERASI",
    tipe: "PG",
    tingkatKesulitan: "Sangat Mudah",
    rentangNilai: "4 – 5",
    soal: `
    <p><strong>Sebuah pabrik memproduksi batang logam. Fungsi $f(x) = 5x + 10$ menyatakan berat total (kg) untuk $x$ batang logam.</strong></p>
    <br>
    <p>Jika pabrik memproduksi 7 batang logam, berapa total berat logam yang dihasilkan?</p>
    `,
    gambar: null,
    pilihan: [
      "A. 35 kg.",
      "B. 45 kg.",
      "C. 50 kg.",
      "D. 70 kg."
    ],
    kunciJawaban: "B"
  },
  {
    id: 46,
    kategori: "NUMERASI",
    tipe: "PG",
    tingkatKesulitan: "Mudah",
    rentangNilai: "6 – 7",
    soal: `
    <p><strong>Perhatikan susunan titik berikut!</strong></p>
    <p>Pola ke-1<br>•</p>
    <p>Pola ke-2<br>••<br>•</p>
    <p>Pola ke-3<br>•••<br>••<br>•</p>
    <p>Pola ke-4<br>••••<br>•••<br>••<br>•</p>
    <br>
    <p>Jika pola tersebut berlanjut, maka jumlah titik pada pola ke-6 adalah ....</p>
    `,
    gambar: null,
    pilihan: [
      "A. 15",
      "B. 18",
      "C. 21",
      "D. 28"
    ],
    kunciJawaban: "C"
  },
  {
    id: 47,
    kategori: "NUMERASI",
    tipe: "BS",
    tingkatKesulitan: "Sedang",
    rentangNilai: "8 – 10",
    soal: `
    <p><strong>Seorang tukang memotong papan kayu dengan berbagai ukuran panjang. Potongan pertama panjangnya 240 cm, dan setiap potongan berikutnya lebih pendek 12 cm dari potongan sebelumnya. Tukang tersebut menghasilkan 9 potongan kayu.</strong></p>
    <br>
    <p><strong>Tentukan Benar atau Salah untuk setiap pernyataan berikut tentang potongan kayu yang dihasilkan tukang tersebut!</strong></p>
    <p>• Panjang potongan ke-5 adalah 190 cm.</p>
    <p>• Panjang potongan terakhir adalah 144 cm.</p>
    <p>• Selisih panjang antara potongan ke-2 dan potongan ke-8 adalah 72 cm.</p>
    `,
    gambar: null,
    pilihan: [
      "Panjang potongan ke-5 adalah 190 cm.",
      "Panjang potongan terakhir adalah 144 cm.",
      "Selisih panjang antara potongan ke-2 dan potongan ke-8 adalah 72 cm."
    ],
    kunciJawaban: [1, 0, 0]
  },
  {
    id: 48,
    kategori: "NUMERASI",
    tipe: "BS",
    tingkatKesulitan: "Lumayan Sulit",
    rentangNilai: "11 – 13",
    soal: `
    <p><strong>Desain jembatan yang tepat sangat penting untuk memperkuat struktur karena menentukan kestabilan, ketahanan, dan keselamatan jembatan dalam menghadapi beban dan kondisi lingkungan. Salah satu contoh desain jembatan tampak pada gambar.</strong></p>
    <p>Bagian rangka jembatan tersebut dapat digambarkan dengan sketsa garis sebagai berikut:</p>
    <p><em>(Lihat gambar: 17.png)</em></p>
    <p>Diketahui garis L1 sejajar dengan garis L2 dan garis L3 sejajar dengan garis L4.</p>
    <br>
    <p><strong>Jika besar sudut A adalah 50°, tentukan Benar atau Salah untuk setiap pernyataan berikut!</strong></p>
    <p>• Besar sudut D adalah 50°.</p>
    <p>• Besar sudut C dapat ditentukan dengan menggunakan aturan sudut berpelurus yaitu sebesar 50°.</p>
    <p>• Sudut B dan E sama besar yaitu 130°.</p>
    `,
    gambar: "17.png",
    pilihan: [
      "Besar sudut D adalah 50°.",
      "Besar sudut C dapat ditentukan dengan menggunakan aturan sudut berpelurus yaitu sebesar 50°.",
      "Sudut B dan E sama besar yaitu 130°."
    ],
    kunciJawaban: [0, 1, 0]
  },
  {
    id: 49,
    kategori: "NUMERASI",
    tipe: "BS",
    tingkatKesulitan: "Sulit",
    rentangNilai: "14 – 16",
    soal: `
    <p><strong>Perhatikan gambar berikut ini!</strong></p>
    <p><em>(Lihat gambar: 19.png)</em></p>
    <br>
    <p><strong>Tentukan Benar atau Salah untuk setiap pernyataan berikut tentang bangun segitiga pada gambar tersebut!</strong></p>
    <p>• Segitiga ABD dan segitiga CAD saling sebangun.</p>
    <p>• Panjang sisi BC adalah 15 cm.</p>
    <p>• Panjang sisi AC adalah 10 cm.</p>
    `,
    gambar: "19.png",
    pilihan: [
      "Segitiga ABD dan segitiga CAD saling sebangun.",
      "Panjang sisi BC adalah 15 cm.",
      "Panjang sisi AC adalah 10 cm."
    ],
    kunciJawaban: [0, 0, 1]
  },
  {
    id: 50,
    kategori: "NUMERASI",
    tipe: "BS",
    tingkatKesulitan: "Sangat Sulit",
    rentangNilai: "17 – 20",
    soal: `
    <p><strong>Di sebuah taman kota berbentuk persegi panjang, terdapat sebuah kolam berbentuk lingkaran yang terletak tepat di tengah-tengah taman, seperti terlihat pada gambar berikut.</strong></p>
    <p><em>(Lihat gambar: 20.png)</em></p>
    <p>Area taman lainnya (area hijau pada gambar) akan ditanami rumput.</p>
    <br>
    <p><strong>Tentukan Benar atau Salah untuk setiap pernyataan berikut tentang luas area kolam dan area yang ditanami rumput! (Gunakan $\pi = 22/7$)</strong></p>
    <p>• Selisih antara luas taman dan luas kolam lebih dari $240\text{ m}^2$.</p>
    <p>• Jika diameter kolam ditambah 1 m, luas kolam bertambah lebih dari $7\text{ m}^2$.</p>
    <p>• Luas daerah yang ditanami rumput kurang dari $240\text{ m}^2$.</p>
    `,
    gambar: "20.png",
    pilihan: [
      "Selisih antara luas taman dan luas kolam lebih dari $240\text{ m}^2$.",
      "Jika diameter kolam ditambah 1 m, luas kolam bertambah lebih dari $7\text{ m}^2$.",
      "Luas daerah yang ditanami rumput kurang dari $240\text{ m}^2$."
    ],
    kunciJawaban: [0, 0, 1]
  },
  {
    id: 51,
    kategori: "NUMERASI",
    tipe: "PG",
    tingkatKesulitan: "Sedang",
    rentangNilai: "8 – 10",
    soal: `
    <p><strong>Pak Doni mempunyai rumah dengan tampak samping kanan sebagai berikut.</strong></p>
    <p><em>(Lihat gambar: 21.png)</em></p>
    <p>Pak Doni ingin mengecat dinding samping kanan rumah tersebut. Terdapat empat merek cat di pasaran yang dapat digunakan Pak Doni seperti ditunjukkan pada tabel berikut.</p>
    <table style="border-collapse: collapse; width: 100%; text-align: center;" border="1">
      <tr>
        <th>Merek Cat</th>
        <th>1 kg Dapat Mengecat</th>
        <th>Kemasan yang Tersedia di Toko</th>
      </tr>
      <tr>
        <td>Momilex</td>
        <td>$7\text{ m}^2$</td>
        <td>5 kg-an dan 10 kg-an</td>
      </tr>
      <tr>
        <td>Josun</td>
        <td>$8\text{ m}^2$</td>
        <td>2 kg-an dan 10 kg-an</td>
      </tr>
      <tr>
        <td>Bulux</td>
        <td>$10\text{ m}^2$</td>
        <td>2 kg-an dan 5 kg-an</td>
      </tr>
      <tr>
        <td>Noppin</td>
        <td>$9\text{ m}^2$</td>
        <td>1 kg-an dan 5 kg-an</td>
      </tr>
    </table>
    <br>
    <p><strong>Pak Doni ingin membeli cat dengan merek yang sama. Supaya sisa cat yang dibeli paling sedikit, cat merek apakah yang sebaiknya dipilih?</strong></p>
    `,
    gambar: "21.png",
    pilihan: [
      "A. Momilex",
      "B. Josun",
      "C. Bulux",
      "D. Noppin"
    ],
    kunciJawaban: "C"
  },
  {
    id: 52,
    kategori: "NUMERASI",
    tipe: "PG",
    tingkatKesulitan: "Lumayan Sulit",
    rentangNilai: "11 – 13",
    soal: `
    <p><strong>Sebuah usaha rumahan akan mengemas produk makanan menggunakan kemasan berbentuk prisma segitiga yang dibuat dari karton. Setiap kemasan dibuat dari satu jaring-jaring utuh. Berikut gambar kemasan dan sketsa jaring-jaringnya.</strong></p>
    <p><em>(Lihat gambar: 22.png)</em></p>
    <p>Karton yang tersedia untuk produksi hari itu memiliki ukuran 50 cm x 100 cm. Pemotongan karton dilakukan dengan rapi dan memperhatikan tata letak. Jaring-jaring kemasan dibuat dengan kertas yang saling terhubung dan bukan menggabungkan hasil potongan lain.</p>
    <br>
    <p><strong>Banyak kemasan maksimum yang dapat dibuat adalah ....</strong></p>
    `,
    gambar: "22.png",
    pilihan: [
      "A. 4 kemasan",
      "B. 8 kemasan",
      "C. 9 kemasan",
      "D. 14 kemasan"
    ],
    kunciJawaban: "B"
  },
  {
    id: 53,
    kategori: "NUMERASI",
    tipe: "PG",
    tingkatKesulitan: "Mudah",
    rentangNilai: "6 – 7",
    soal: `
    <p><strong>Perhatikan posisi robot pembersih pada gambar berikut!</strong></p>
    <p><em>(Lihat gambar: 23.png)</em></p>
    <p>Robot tersebut kemudian akan bergerak mengikuti translasi $T(4, -2)$.</p>
    <br>
    <p><strong>Posisi robot setelah berpindah sesuai translasi tersebut adalah....</strong></p>
    `,
    gambar: "23.png",
    pilihan: [
      "A. titik A",
      "B. titik B",
      "C. titik C",
      "D. titik D"
    ],
    kunciJawaban: "C"
  },
  {
    id: 54,
    kategori: "NUMERASI",
    tipe: "PG",
    tingkatKesulitan: "Sedang",
    rentangNilai: "8 – 10",
    soal: `
    <p><strong>Perhatikan gambar berikut!</strong></p>
    <p><em>(Lihat gambar: 24.png)</em></p>
    <br>
    <p><strong>Transformasi tunggal yang paling tepat untuk mengubah posisi segitiga ABC menjadi segitiga A'B'C' adalah ....</strong></p>
    `,
    gambar: "24.png",
    pilihan: [
      "A. translasi $(-3, 1)$",
      "B. refleksi terhadap garis $y = x$",
      "C. rotasi 90° berlawanan arah jarum jam dengan pusat di titik asal",
      "D. refleksi terhadap sumbu-Y"
    ],
    kunciJawaban: "C"
  },
  {
    id: 55,
    kategori: "NUMERASI",
    tipe: "PG",
    tingkatKesulitan: "Sulit",
    rentangNilai: "14 – 16",
    soal: `
    <p><strong>Dalam pembangunan sebuah monumen peringatan, kontraktor menggunakan bata ringan berbentuk balok untuk menyusun bagian dalam monumen. Desain monumen peringatan diberikan pada gambar.</strong></p>
    <p><em>(Lihat gambar: 25.png)</em></p>
    <p>Setiap bata ringan yang digunakan berukuran 60 cm × 20 cm × 10 cm. Susunan bata ringan pada monumen tersebut dianggap tersusun rapat tanpa celah.</p>
    <br>
    <p><strong>Berapakah jumlah minimal bata ringan yang diperlukan untuk membangun monumen tersebut?</strong></p>
    `,
    gambar: "25.png",
    pilihan: [
      "A. 16.800 buah",
      "B. 18.000 buah",
      "C. 19.200 buah",
      "D. 21.600 buah"
    ],
    kunciJawaban: "B"
  },
  {
    id: 56,
    kategori: "NUMERASI",
    tipe: "PG",
    tingkatKesulitan: "Mudah",
    rentangNilai: "6 – 7",
    soal: `
    <p><strong>Petugas perpustakaan di suatu sekolah melakukan pendataan jumlah buku yang dipinjam siswa kelas IX selama 5 hari berturut-turut. Hasil pendataan disajikan dalam diagram berikut.</strong></p>
    <p><em>(Lihat gambar: 26.png)</em></p>
    <br>
    <p><strong>Pernyataan yang tepat tentang informasi pada diagram batang tersebut adalah...</strong></p>
    `,
    gambar: "26.png",
    pilihan: [
      "A. Jumlah buku yang dipinjam setiap hari selalu meningkat.",
      "B. Jumlah peminjaman buku pada Kamis lebih sedikit daripada pada Selasa.",
      "C. Selisih jumlah peminjaman buku antara Senin dan Jumat lebih dari 10 buku.",
      "D. Hari dengan jumlah peminjaman buku terbanyak adalah Rabu."
    ],
    kunciJawaban: "D"
  },
  {
    id: 57,
    kategori: "NUMERASI",
    tipe: "PGK",
    tingkatKesulitan: "Sedang",
    rentangNilai: "8 – 10",
    soal: `
    <p><strong>Sebuah koperasi sekolah ingin mengevaluasi penjualan alat tulis selama 5 bulan terakhir. Berikut disajikan data jumlah pengunjung koperasi sekolah selama 5 bulan dan data persentase alat tulis yang terjual.</strong></p>
    <p>Berdasarkan kedua data tersebut, tentukan manakah pernyataan yang benar untuk setiap pernyataan berikut?</p>
    <p><em>(Lihat gambar: 27.png, 27.1.png)</em></p>
    <br>
    <p><strong>Pilih semua jawaban benar! Jawaban benar lebih dari satu.</strong></p>
    <p>• Peningkatan jumlah pengunjung paling signifikan (paling besar) terjadi pada periode bulan April ke Mei.</p>
    <p>• Jika setiap pengunjung di bulan Mei membeli satu alat tulis, maka jumlah pulpen yang terjual adalah 64 buah.</p>
    <p>• Berdasarkan tren pada diagram garis, jumlah pengunjung koperasi selalu mengalami kenaikan secara konsisten setiap bulannya.</p>
    <p>• Pada bulan Mei, jumlah buku tulis yang terjual adalah 50 buah.</p>
    `,
    gambar: "27.png, 27.1.png",
    pilihan: [
      "Pernyataan 1",
      "Pernyataan 2",
      "Pernyataan 3",
      "Pernyataan 4"
    ],
    kunciJawaban: [0, 1]
  },
  {
    id: 58,
    kategori: "NUMERASI",
    tipe: "PG",
    tingkatKesulitan: "Lumayan Sulit",
    rentangNilai: "11 – 13",
    soal: `
    <p><strong>Berdasarkan data diketahui bahwa rata-rata berat satu butir telur kecil 45 gram, satu telur sedang 55 gram, dan satu telur besar 65 gram. Seorang karyawan toko bahan pangan sedang mengemas setiap 10 butir telur ke dalam satu kemasan dengan ketentuan bahwa rata-rata berat per telur dalam setiap kemasan tersebut adalah 55 gram.</strong></p>
    <p>Jika dalam satu kemasan sudah berisi 1 telur besar, 5 telur sedang, dan 2 telur kecil, maka dua telur tambahan yang harus dipilih supaya tetap memenuhi aturan pengemasan adalah ....</p>
    `,
    gambar: null,
    pilihan: [
      "A. 2 telur sedang",
      "B. 2 telur besar",
      "C. 1 telur besar dan 1 telur kecil",
      "D. 1 telur besar dan 1 telur sedang"
    ],
    kunciJawaban: "D"
  },
  {
    id: 59,
    kategori: "NUMERASI",
    tipe: "PG",
    tingkatKesulitan: "Sangat Mudah",
    rentangNilai: "4 – 5",
    soal: `
    <p><strong>Untuk menjaga dan meningkatkan kualitas produksi, tim bagian quality control memeriksa kualitas lampu yang diproduksi pada suatu waktu. Berdasarkan pemeriksaan yang dilakukan, diperoleh data sebagai berikut:</strong></p>
    <p>• Jumlah lampu dengan kondisi baik: 980 buah</p>
    <p>• Jumlah lampu dengan kondisi rusak: 20 buah</p>
    <p>Tim tersebut melakukan kesalahan dengan meletakkan keseluruhan lampu tersebut di dalam suatu wadah.</p>
    <p>Jika satu lampu dipilih secara acak dari wadah tersebut, peluang bahwa lampu yang terpilih adalah lampu dengan kondisi rusak adalah ...</p>
    `,
    gambar: null,
    pilihan: [
      "A. 1/50",
      "B. 1/49",
      "C. 2/49",
      "D. 49/50"
    ],
    kunciJawaban: "A"
  },
  {
    id: 60,
    kategori: "NUMERASI",
    tipe: "PGK",
    tingkatKesulitan: "Sangat Sulit",
    rentangNilai: "17 – 20",
    soal: `
    <p><strong>Sebuah sensor otomatis diuji untuk mendeteksi kendaraan yang melintas. Pengujian dilakukan dalam tiga tahap dengan hasil sebagai berikut:</strong></p>
    <table style="border-collapse: collapse; width: 100%; text-align: center;" border="1">
      <tr>
        <th>Tahap</th>
        <th>Jumlah Uji</th>
        <th>Sensor Berhasil</th>
        <th>Sensor Gagal</th>
      </tr>
      <tr>
        <td>I</td>
        <td>100</td>
        <td>91</td>
        <td>9</td>
      </tr>
      <tr>
        <td>II</td>
        <td>150</td>
        <td>132</td>
        <td>18</td>
      </tr>
      <tr>
        <td>III</td>
        <td>250</td>
        <td>215</td>
        <td>35</td>
      </tr>
    </table>
    <p>Data tersebut digunakan untuk memperkirakan peluang kegagalan sensor pada satu kali deteksi berikutnya.</p>
    <br>
    <p><strong>Berdasarkan hasil pengujian sensor pada tabel, manakah pernyataan yang benar tentang pengujian sensor tersebut?</strong></p>
    <strong>Pilih semua jawaban benar! Jawaban benar lebih dari satu.</strong>
    <p>• Frekuensi relatif atau peluang kegagalan sensor dari seluruh pengujian adalah 0,124.</p>
    <p>• Frekuensi relatif atau peluang kegagalan pada Tahap III lebih besar daripada pada Tahap I.</p>
    <p>• Jika dilakukan 1.000 pengujian tambahan, frekuensi harapan sensor tersebut akan gagal adalah sebanyak 124 kali.</p>
    <p>• Peluang sensor berhasil pada satu kali deteksi berikutnya adalah sebesar 0,91.</p>
    `,
    gambar: null,
    pilihan: [
      "Pernyataan 1",
      "Pernyataan 2",
      "Pernyataan 3",
      "Pernyataan 4"
    ],
    kunciJawaban: [0, 1, 2]
  }
  ];
