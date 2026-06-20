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

  {
    id: 31,
    kategori: "NUMERASI", // ✅ Kategori ditambahkan
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
    kategori: "NUMERASI", // ✅ Kategori ditambahkan
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
    kategori: "NUMERASI", // ✅ Kategori ditambahkan
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
    kategori: "NUMERASI", // ✅ Kategori ditambahkan
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
    kategori: "NUMERASI", // ✅ Kategori ditambahkan
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
  // ==========================================
    // SOAL NOMOR 36 (PG)
    // ==========================================
    {
        id: 36,
        kategori: "NUMERASI",
        rentangNilai: "0-20",
        tipe: "PG",
        soal: "<b>Proyek Renovasi Gedung</b><br><br>Proyek renovasi suatu gedung sekolah harus diselesaikan paling lambat dalam waktu 60 hari sesuai dengan kontrak kerja yang telah disepakati bersama. Manajer proyek telah menghitung kebutuhan tenaga kerja dengan asumsi setiap pegawai memiliki kemampuan dan produktivitas yang sama setiap harinya. Kemajuan proyek sangat bergantung pada jumlah pegawai; semakin banyak pegawai yang bekerja, maka waktu pengerjaan akan semakin singkat.<br><br>Pekerjaan dinyatakan selesai jika seluruh beban kerja telah terpenuhi. Jika terjadi kendala pada jumlah pegawai atau waktu kerja, manajer harus melakukan penyesuaian agar total beban kerja tetap terpenuhi tepat waktu. Penyesuaian ini sangat penting dilakukan agar renovasi gedung selesai tepat 60 hari tanpa melanggar batas kontrak yang ada.<br><br>Berdasarkan perencanaan awal, renovasi gedung dapat diselesaikan oleh 12 pegawai dalam waktu 60 hari. Jika manajer memutuskan untuk menambah jumlah pegawai menjadi 18 orang agar pekerjaan lebih cepat selesai, maka waktu yang diperlukan untuk menyelesaikan renovasi tersebut adalah...",
        pilihan: [
            "30 hari",
            "40 hari",
            "45 hari",
            "90 hari"
        ],
        kunciJawaban: "B"
    },

    // ==========================================
    // SOAL NOMOR 37 (BENAR-SALAH) - VERSI BERSIH
    // ==========================================
    {
        id: 37,
        kategori: "NUMERASI",
        rentangNilai: "0-20",
        tipe: "BS",
        soal: "<b>Proyek Renovasi Gedung</b><br><br>Proyek renovasi suatu gedung sekolah harus diselesaikan paling lambat dalam waktu 60 hari sesuai dengan kontrak kerja yang telah disepakati bersama. Manajer proyek telah menghitung kebutuhan tenaga kerja dengan asumsi setiap pegawai memiliki kemampuan dan produktivitas yang sama setiap harinya. Kemajuan proyek sangat bergantung pada jumlah pegawai; semakin banyak pegawai yang bekerja, maka waktu pengerjaan akan semakin singkat.<br><br>Pekerjaan dinyatakan selesai jika seluruh beban kerja telah terpenuhi. Jika terjadi kendala pada jumlah pegawai atau waktu kerja, manajer harus melakukan penyesuaian agar total beban kerja tetap terpenuhi tepat waktu. Penyesuaian ini sangat penting dilakukan agar renovasi gedung selesai tepat 60 hari tanpa melanggar batas kontrak yang ada.<br><br>Berdasarkan situasi tersebut, tentukan Benar atau Salah untuk setiap pernyataan berikut tentang penyelesaian renovasi gedung tersebut!",
        pilihan: [
            "Sisa pekerjaan yang harus diselesaikan setelah hari ke-10 adalah setara dengan pekerjaan 800 hari penuh yang dikerjakan 1 orang.",
            "Selama 10 hari pertama, proyek mengalami ketertinggalan jadwal yang setara dengan hasil kerja 5 orang selama 10 hari.",
            "Agar renovasi tetap selesai tepat waktu manajer cukup mempekerjakan kembali 15 pegawai semula tanpa perlu menambah tenaga kerja tambahan."
        ],
        kunciJawaban: ["B", "B", "S"]
    },

    // ==========================================
    // SOAL NOMOR 38 (PGK)
    // ==========================================
    {
        id: 38,
        kategori: "NUMERASI",
        rentangNilai: "0-20",
        tipe: "PGK",
        soal: "<b>Proyek Renovasi Gedung</b><br><br>Proyek renovasi suatu gedung sekolah harus diselesaikan paling lambat dalam waktu 60 hari sesuai dengan kontrak kerja yang telah disepakati bersama. Manajer proyek telah menghitung kebutuhan tenaga kerja dengan asumsi setiap pegawai memiliki kemampuan dan produktivitas yang sama setiap harinya. Kemajuan proyek sangat bergantung pada jumlah pegawai; semakin banyak pegawai yang bekerja, maka waktu pengerjaan akan semakin singkat.<br><br>Pekerjaan dinyatakan selesai jika seluruh beban kerja telah terpenuhi. Jika terjadi kendala pada jumlah pegawai atau waktu kerja, manajer harus melakukan penyesuaian agar total beban kerja tetap terpenuhi tepat waktu. Penyesuaian ini sangat penting dilakukan agar renovasi gedung selesai tepat 60 hari tanpa melanggar batas kontrak yang ada.<br><br>Berdasarkan situasi tersebut, berikut ini manakah pernyataan yang sesuai tentang penyelesaian renovasi gedung dalam sisa waktu yang tersedia?<br>Pilih semua jawaban benar! Jawaban benar lebih dari satu.",
        pilihan: [
            "Sisa waktu efektif yang tersedia untuk menyelesaikan seluruh sisa pekerjaan adalah 24 hari.",
            "Beban pekerjaan yang masih tersisa setara dengan hasil kerja 20 orang selama 60 hari.",
            "Manajer proyek harus menyiapkan total 30 pegawai agar proyek selesai tepat waktu.",
            "Manajer proyek cukup menambah 5 orang pegawai dari jumlah semula agar renovasi gedung selesai tepat waktu."
        ],
        // Kunci: Pernyataan 1 dan 3 (Indeks 0 dan 2)
        kunciJawaban: [0, 2]
    },

    // ==========================================
    // SOAL NOMOR 39 (PG)
    // ==========================================
    {
        id: 39,
        kategori: "NUMERASI",
        rentangNilai: "0-20",
        tipe: "PG",
        soal: "<b>Alur Pelayanan Donor Darah</b><br><br>Kegiatan donor adalah salah satu bentuk aksi kemanusiaan yang sangat bermanfaat untuk diri sendiri dan orang lain. Setetes darah yang disumbangkan dapat memberikan harapan hidup bagi orang lain yang membutuhkan, terutama mereka yang mengalami kecelakaan, setelah menjalani operasi, atau menderita penyakit yang serius. Tak hanya untuk penerima, pendonor juga bisa mendapatkan manfaat. Diantaranya bermanfaat untuk mendeteksi penyakit, meningkatkan produksi sel darah, dan menjaga kesehatan jantung. Oleh karena itu disarankan untuk melakukan donor darah tiga bulan setelah donor darah terakhir.<br><br>Biasanya aksi donor darah difasilitasi oleh Palang Merah Indonesia (PMI). Berikut adalah alur kegiatan donor darah di sebuah posko PMI.<br><br>Seorang pendonor darah mendatangi posko PMI. Kebetulan saat ini sedang tidak ada antrian sehingga orang tersebut dapat langsung dilayani.<br><br>Jika tidak ada kendala pada pelayanan donor darah, apa yang sedang dilakukan pendonor tersebut setelah 25 menit berlalu?",
        gambar: "9,10,11.png",
        pilihan: [
            "Tahap pemeriksaan kesehatan",
            "Duduk di kursi tunggu",
            "Proses pengambilan darah",
            "Istirahat di ruang pemulihan"
        ],
        kunciJawaban: "C"
    },

    // ==========================================
    // SOAL NOMOR 40 (PGK)
    // ==========================================
    {
        id: 40,
        kategori: "NUMERASI",
        rentangNilai: "0-20",
        tipe: "PGK",
        soal: "<b>Alur Pelayanan Donor Darah</b><br><br>Kegiatan donor adalah salah satu bentuk aksi kemanusiaan yang sangat bermanfaat untuk diri sendiri dan orang lain. Setetes darah yang disumbangkan dapat memberikan harapan hidup bagi orang lain yang membutuhkan, terutama mereka yang mengalami kecelakaan, setelah menjalani operasi, atau menderita penyakit yang serius. Tak hanya untuk penerima, pendonor juga bisa mendapatkan manfaat. Diantaranya bermanfaat untuk mendeteksi penyakit, meningkatkan produksi sel darah, dan menjaga kesehatan jantung. Oleh karena itu disarankan untuk melakukan donor darah tiga bulan setelah donor darah terakhir.<br><br>Biasanya aksi donor darah difasilitasi oleh Palang Merah Indonesia (PMI). Berikut adalah alur kegiatan donor darah di sebuah posko PMI.<br><br>Pada suatu waktu, Yuda baru saja sampai di posko PMI untuk melakukan donor darah. Diketahui bahwa Rama dan Fajar juga berada di posko PMI tersebut. Rama sedang menunggu antrian untuk proses pengambilan darah, sedangkan Fajar sedang proses pengambilan darah sejak 16 menit yang lalu. Mereka tidak ada janji untuk pulang bersama ketika donor darah selesai.<br><br>Berikut ini pernyataan manakah yang mungkin akan terjadi di posko PMI tersebut?<br>Pilih semua jawaban benar! Jawaban benar lebih dari satu.",
        gambar: "9,10,11.png",
        pilihan: [
            "Yuda sempat bertemu Rama di kursi tunggu.",
            "Ketika Yuda proses pengambilan darah, Fajar telah pulang lebih dulu.",
            "Yuda menunggu di kursi tunggu selama 30 menit.",
            "Sejak pertama kali datang hingga pulang, Yuda menghabiskan waktu lebih dari 1,5 jam."
        ],
        // Kunci: Pernyataan 1 dan 4 (Indeks 0 dan 3)
        kunciJawaban: [0, 3]
    },
  // ==========================================
    // SOAL NOMOR 41 (BENAR-SALAH)
    // ==========================================
    {
        id: 41,
        kategori: "NUMERASI",
        rentangNilai: "0-20",
        tipe: "BS",
        soal: "<b>Alur Pelayanan Donor Darah</b><br><br>Kegiatan donor adalah salah satu bentuk aksi kemanusiaan yang sangat bermanfaat untuk diri sendiri dan orang lain. Setetes darah yang disumbangkan dapat memberikan harapan hidup bagi orang lain yang membutuhkan, terutama mereka yang mengalami kecelakaan, setelah menjalani operasi, atau menderita penyakit yang serius. Tak hanya untuk penerima, pendonor juga bisa mendapatkan manfaat. Diantaranya bermanfaat untuk mendeteksi penyakit, meningkatkan produksi sel darah, dan menjaga kesehatan jantung. Oleh karena itu disarankan untuk melakukan donor darah tiga bulan setelah donor darah terakhir.<br><br>Biasanya aksi donor darah difasilitasi oleh Palang Merah Indonesia (PMI). Berikut adalah alur kegiatan donor darah di sebuah posko PMI.<br><br>Posko PMI menambahkan satu tempat lagi untuk proses pengambilan darah dan di tahap pemulihan. Sehingga dapat melayani 2 orang sekaligus pada proses pengambilan darah. Pada hari ini saat pukul 11.30 terlihat sudah ada 2 orang yang sedang berada di ruang pemulihan. Salah seorang baru saja memulai tahap pemulihan dan satu orang lainnya sudah berjalan 15 menit. Adapula 1 orang calon pendonor yang akan melakukan pendaftaran, 1 orang akan melakukan pemeriksaan kesehatan, 1 orang di kursi tunggu, 2 orang sedang proses pengambilan darah.<br><br>Tentukan Benar atau Salah untuk setiap pernyataan berikut tentang situasi di lokasi donor darah pada hari tersebut!",
        gambar: "9,10,11.png",
        pilihan: [
            "Posko PMI mulai didatangi calon pendonor sejak pukul 10.30.",
            "Ada kemungkinan terdapat 3 orang di ruang tunggu.",
            "Pada pukul 11.00 belum ada pendonor yang memasuki tahap pemulihan."
        ],
        // Kunci: Benar - Salah - Benar
        kunciJawaban: ["B", "S", "B"]
    },

    // ==========================================
    // SOAL NOMOR 42 (PG)
    // ==========================================
    {
        id: 42,
        kategori: "NUMERASI",
        rentangNilai: "0-20",
        tipe: "PG",
        soal: "Perhatikan bentuk aljabar berikut.<br><br>$$\n(x + 2)(3 + y) + (x + 2)(1 - y)\n$$<br>Bentuk sederhana dari bentuk aljabar tersebut adalah ....",
        pilihan: [
            "4(x + 2)",
            "x + 2 + 4y",
            "4(x + 8)",
            "4x + 2y"
        ],
        kunciJawaban: "A"
    },

    // ==========================================
    // SOAL NOMOR 43 (PGK)
    // ==========================================
    {
        id: 43,
        kategori: "NUMERASI",
        rentangNilai: "0-20",
        tipe: "PGK",
        soal: "Sebuah jasa pengantaran barang mengenakan biaya sebagai berikut:<br>• Biaya tetap pemesanan sebesar Rp12.000,00.<br>• Biaya pengantaran Rp4.000,00 per kilometer.<br><br>Seorang pelanggan memiliki anggaran tidak lebih dari Rp40.000,00 untuk satu kali pemesanan jasa antar.<br><br>Berikut ini, manakah pernyataan yang benar tentang permasalahan tersebut?<br>Pilih semua jawaban benar! Jawaban benar lebih dari satu.",
        pilihan: [
            "Apabila $x$ menyatakan jarak pengantaran (dalam km), maka permasalahan dapat dimodelkan dengan $4.000x + 12.000 \\le 40.000$.",
            "Jarak pengantaran maksimum yang masih dapat dipilih pelanggan adalah 7 km.",
            "Jika jarak pengantaran 8 km, maka biaya total melebihi anggaran.",
            "Penambahan jarak antar 1 km akan menambah biaya sebesar Rp16.000,00."
        ],
        // Kunci: Pernyataan 1, 2, dan 3 (Indeks 0, 1, dan 2)
        kunciJawaban: [0, 1, 2]
    },

    // ==========================================
    // SOAL NOMOR 44 (BENAR-SALAH)
    // ==========================================
    {
        id: 44,
        kategori: "NUMERASI",
        rentangNilai: "0-20",
        tipe: "BS",
        soal: "Misalkan $a$ dan $b$ merupakan dua bilangan real sehingga sistem persamaan linear (SPL)<br><br>$$\n\\begin{cases} \n2x + ay = 4, \\\\ \nbx - 2y = -1 \n\\end{cases}\n$$<br>mempunyai solusi $(x, y) = (5, -2)$.<br><br>Tentukan Benar atau Salah untuk setiap pernyataan berikut terkait dengan nilai $a$ dan $b$!",
        pilihan: [
            "$a$ merupakan bilangan prima.",
            "$b$ merupakan bilangan ganjil.",
            "$10a + b = 31$."
        ],
        // Kunci: Benar - Benar - Salah
        kunciJawaban: ["B", "B", "S"]
    },

    // ==========================================
    // SOAL NOMOR 45 (PG)
    // ==========================================
    {
        id: 45,
        kategori: "NUMERASI",
        rentangNilai: "0-20",
        tipe: "PG",
        soal: "Sebuah pabrik memproduksi batang logam. Fungsi $f(x) = 5x + 10$ menyatakan berat total (kg) untuk $x$ batang logam.<br><br>Jika pabrik memproduksi 7 batang logam, berapa total berat logam yang dihasilkan?",
        pilihan: [
            "35 kg.",
            "45 kg.",
            "50 kg.",
            "70 kg."
        ],
        kunciJawaban: "B"
    },
  // ==========================================
    // SOAL NOMOR 46 (PG)
    // ==========================================
    {
        id: 46,
        kategori: "NUMERASI",
        rentangNilai: "0-20",
        tipe: "PG",
        soal: "Perhatikan susunan titik berikut!<br><br><pre style='font-family: monospace; background-color: #f8fafc; padding: 10px; border-radius: 5px; line-height: 1.2;'>Pola ke-1\n•\n\nPola ke-2\n••\n•\n\nPola ke-3\n•••\n••\n•\n\nPola ke-4\n••••\n•••\n••\n•</pre><br>Jika pola tersebut berlanjut, maka jumlah titik pada pola ke-6 adalah ....",
        pilihan: [
            "15",
            "18",
            "21",
            "28"
        ],
        kunciJawaban: "C"
    },

    // ==========================================
    // SOAL NOMOR 47 (BENAR-SALAH)
    // ==========================================
    {
        id: 47,
        kategori: "NUMERASI",
        rentangNilai: "0-20",
        tipe: "BS",
        soal: "Seorang tukang memotong papan kayu dengan berbagai ukuran panjang. Potongan pertama panjangnya 240 cm, dan setiap potongan berikutnya lebih pendek 12 cm dari potongan sebelumnya. Tukang tersebut menghasilkan 9 potongan kayu.<br><br>Tentukan Benar atau Salah untuk setiap pernyataan berikut tentang potongan kayu yang dihasilkan tukang tersebut!",
        pilihan: [
            "Panjang potongan ke-5 adalah 190 cm.",
            "Panjang potongan terakhir adalah 144 cm.",
            "Selisih panjang antara potongan ke-2 dan potongan ke-8 adalah 72 cm."
        ],
        // Kunci: Salah - Benar - Benar
        kunciJawaban: ["S", "B", "B"]
    },

    // ==========================================
    // SOAL NOMOR 48 (BENAR-SALAH)
    // ==========================================
    {
        id: 48,
        kategori: "NUMERASI",
        rentangNilai: "0-20",
        tipe: "BS",
        soal: "Desain jembatan yang tepat sangat penting untuk memperkuat struktur karena menentukan kestabilan, ketahanan, dan keselamatan jembatan dalam menghadapi beban dan kondisi lingkungan. Salah satu contoh desain jembatan tampak pada gambar.<br><br>Bagian rangka jembatan tersebut dapat digambarkan dengan sketsa garis sebagai berikut:<br><br>Diketahui garis L1 sejajar dengan garis L2 dan garis L3 sejajar dengan garis L4.<br><br>Jika besar sudut A adalah 50°, tentukan Benar atau Salah untuk setiap pernyataan berikut!",
        gambar: "17.png",
        pilihan: [
            "Besar sudut D adalah 50°.",
            "Besar sudut C dapat ditentukan dengan menggunakan aturan sudut berpelurus yaitu sebesar 50°.",
            "Sudut B dan E sama besar yaitu 130°."
        ],
        // Kunci: Benar - Salah - Benar
        kunciJawaban: ["B", "S", "B"]
    },

    // ==========================================
    // SOAL NOMOR 49 (BENAR-SALAH)
    // ==========================================
    {
        id: 49,
        kategori: "NUMERASI",
        rentangNilai: "0-20",
        tipe: "BS",
        soal: "Perhatikan gambar jembatan/bangun berikut ini!<br><br>Tentukan Benar atau Salah untuk setiap pernyataan berikut tentang bangun segitiga pada gambar tersebut!",
        gambar: "19.png",
        pilihan: [
            "Segitiga ABD dan segitiga CAD saling sebangun.",
            "Panjang sisi BC adalah 15 cm.",
            "Panjang sisi AC adalah 10 cm."
        ],
        // Kunci: Benar - Benar - Salah
        kunciJawaban: ["B", "B", "S"]
    },

    // ==========================================
    // SOAL NOMOR 50 (BENAR-SALAH)
    // ==========================================
    {
        id: 50,
        kategori: "NUMERASI",
        rentangNilai: "0-20",
        tipe: "BS",
        soal: "Di sebuah taman kota berbentuk persegi panjang, terdapat sebuah kolam berbentuk lingkaran yang terletak tepat di tengah-tengah taman, seperti terlihat pada gambar berikut.<br><br>Area taman lainnya (area hijau pada gambar) akan ditanami rumput.<br><br>Tentukan Benar atau Salah untuk setiap pernyataan berikut tentang luas area kolam dan area yang ditanami rumput! (Gunakan $\\pi = 22/7$)",
        gambar: "20.png",
        pilihan: [
            "Selisih antara luas taman dan luas kolam lebih dari $240\\text{ m}^2$.",
            "Jika diameter kolam ditambah 1 m, luas kolam bertambah lebih dari $7\\text{ m}^2$.",
            "Luas daerah yang ditanami rumput kurang dari $240\\text{ m}^2$."
        ],
        // Kunci: Benar - Benar - Salah
        kunciJawaban: ["B", "B", "S"]
    },
  // ==========================================
    // SOAL NOMOR 51 (PG)
    // ==========================================
    {
        id: 51,
        kategori: "NUMERASI",
        rentangNilai: "0-20",
        tipe: "PG",
        soal: "<b>Pengecatan Rumah</b><br><br>Pak Doni mempunyai rumah dengan tampak samping kanan sebagai berikut.<br><br>Pak Doni ingin mengecat dinding samping kanan rumah tersebut. Terdapat empat merek cat di pasaran yang dapat digunakan Pak Doni seperti ditunjukkan pada tabel berikut.<br><br><table style='width: 100%; border-collapse: collapse; border: 1px solid #cbd5e1; font-size: 14px;'><thead><tr style='background-color: #f1f5f9; border-bottom: 2px solid #cbd5e1;'><th style='padding: 10px; border: 1px solid #cbd5e1; text-align: left;'>Merek Cat</th><th style='padding: 10px; border: 1px solid #cbd5e1; text-align: center;'>1 kg Dapat Mengecat</th><th style='padding: 10px; border: 1px solid #cbd5e1; text-align: left;'>Kemasan yang Tersedia di Toko</th></tr></thead><tbody><tr><td style='padding: 10px; border: 1px solid #cbd5e1;'>Momilex</td><td style='padding: 10px; border: 1px solid #cbd5e1; text-align: center;'>$7\\text{ m}^2$</td><td style='padding: 10px; border: 1px solid #cbd5e1;'>5 kg-an dan 10 kg-an</td></tr><tr style='background-color: #f8fafc;'><td style='padding: 10px; border: 1px solid #cbd5e1;'>Josun</td><td style='padding: 10px; border: 1px solid #cbd5e1; text-align: center;'>$8\\text{ m}^2$</td><td style='padding: 10px; border: 1px solid #cbd5e1;'>2 kg-an dan 10 kg-an</td></tr><tr><td style='padding: 10px; border: 1px solid #cbd5e1;'>Bulux</td><td style='padding: 10px; border: 1px solid #cbd5e1; text-align: center;'>$10\\text{ m}^2$</td><td style='padding: 10px; border: 1px solid #cbd5e1;'>2 kg-an dan 5 kg-an</td></tr><tr style='background-color: #f8fafc;'><td style='padding: 10px; border: 1px solid #cbd5e1;'>Noppin</td><td style='padding: 10px; border: 1px solid #cbd5e1; text-align: center;'>$9\\text{ m}^2$</td><td style='padding: 10px; border: 1px solid #cbd5e1;'>1 kg-an dan 5 kg-an</td></tr></tbody></table><br>Pak Doni ingin membeli cat dengan merek yang sama. Supaya sisa cat yang dibeli paling sedikit, cat merek apakah yang sebaiknya dipilih?",
        gambar: "21.png",
        pilihan: [
            "Momilex",
            "Josun",
            "Bulux",
            "Noppin"
        ],
        kunciJawaban: "C"
    },

    // ==========================================
    // SOAL NOMOR 52 (PG)
    // ==========================================
    {
        id: 52,
        kategori: "NUMERASI",
        rentangNilai: "0-20",
        tipe: "PG",
        soal: "Sebuah usaha rumahan akan mengemas produk makanan menggunakan kemasan berbentuk prisma segitiga yang dibuat dari karton. Setiap kemasan dibuat dari satu jaring-jaring utuh. Berikut gambar kemasan dan sketsa jaring-jaringnya.<br><br>Karton yang tersedia untuk produksi hari itu memiliki ukuran 50 cm x 100 cm. Pemotongan karton dilakukan dengan rapi dan memperhatikan tata letak. Jaring-jaring kemasan dibuat dengan kertas yang saling terhubung dan bukan menggabungkan hasil potongan lain.<br><br>Banyak kemasan maksimum yang dapat dibuat adalah ....",
        gambar: "22.png",
        pilihan: [
            "4 kemasan",
            "8 kemasan",
            "9 kemasan",
            "14 kemasan"
        ],
        kunciJawaban: "B"
    },

    // ==========================================
    // SOAL NOMOR 53 (PG)
    // ==========================================
    {
        id: 53,
        kategori: "NUMERASI",
        rentangNilai: "0-20",
        tipe: "PG",
        soal: "Perhatikan posisi robot pembersih pada gambar berikut!<br><br>Robot tersebut kemudian akan bergerak mengikuti translasi $T(4, -2)$.<br><br>Posisi robot setelah berpindah sesuai translasi tersebut adalah....",
        gambar: "23.png",
        pilihan: [
            "titik A",
            "titik B",
            "titik C",
            "titik D"
        ],
        kunciJawaban: "C"
    },

    // ==========================================
    // SOAL NOMOR 54 (PG)
    // ==========================================
    {
        id: 54,
        kategori: "NUMERASI",
        rentangNilai: "0-20",
        tipe: "PG",
        soal: "Perhatikan gambar berikut!<br><br>Transformasi tunggal yang paling tepat untuk mengubah posisi segitiga ABC menjadi segitiga A'B'C' adalah ....",
        gambar: "24.png",
        pilihan: [
            "translasi $(-3, 1)$",
            "refleksi terhadap garis $y = x$",
            "rotasi 90° berlawanan arah jarum jam dengan pusat di titik asal",
            "refleksi terhadap sumbu-Y"
        ],
        kunciJawaban: "C"
    },

    // ==========================================
    // SOAL NOMOR 55 (PG)
    // ==========================================
    {
        id: 55,
        kategori: "NUMERASI",
        rentangNilai: "0-20",
        tipe: "PG",
        soal: "Dalam pembangunan sebuah monumen peringatan, kontraktor menggunakan bata ringan berbentuk balok untuk menyusun bagian dalam monumen. Desain monumen peringatan diberikan pada gambar.<br><br>Setiap bata ringan yang digunakan berukuran 60 cm × 20 cm × 10 cm. Susunan bata ringan pada monumen tersebut dianggap tersusun rapat tanpa celah.<br><br>Berapakah jumlah minimal bata ringan yang diperlukan untuk membangun monumen tersebut?",
        gambar: "25.png",
        pilihan: [
            "16.800 buah",
            "18.000 buah",
            "19.200 buah",
            "21.600 buah"
        ],
        kunciJawaban: "B"
    },
  // ==========================================
    // SOAL NOMOR 56 (PG)
    // ==========================================
    {
        id: 56,
        kategori: "NUMERASI",
        rentangNilai: "0-20",
        tipe: "PG",
        soal: "Petugas perpustakaan di suatu sekolah melakukan pendataan jumlah buku yang dipinjam siswa kelas IX selama 5 hari berturut-turut. Hasil pendataan disajikan dalam diagram berikut.<br><br>Pernyataan yang tepat tentang informasi pada diagram batang tersebut adalah...",
        gambar: "26.png",
        pilihan: [
            "Jumlah buku yang dipinjam setiap hari selalu meningkat.",
            "Jumlah peminjaman buku pada Kamis lebih sedikit daripada pada Selasa.",
            "Selisih jumlah peminjaman buku antara Senin dan Jumat lebih dari 10 buku.",
            "Hari dengan jumlah peminjaman buku terbanyak adalah Rabu."
        ],
        kunciJawaban: "D"
    },

    // ==========================================
    // SOAL NOMOR 57 (PGK)
    // ==========================================
    {
        id: 57,
        kategori: "NUMERASI",
        rentangNilai: "0-20",
        tipe: "PGK",
        soal: "Sebuah koperasi sekolah ingin mengevaluasi penjualan alat tulis selama 5 bulan terakhir. Berikut disajikan data jumlah pengunjung koperasi sekolah selama 5 bulan dan data persentase alat tulis yang terjual.<br><br>Berdasarkan kedua data tersebut, tentukan manakah pernyataan yang benar untuk setiap pernyataan berikut?<br>Pilih semua jawaban benar! Jawaban benar lebih dari satu.",
        gambar: ["27.png", "27.1.png"],
        pilihan: [
            "Peningkatan jumlah pengunjung paling signifikan (paling besar) terjadi pada periode bulan April ke Mei.",
            "Jika setiap pengunjung di bulan Mei membeli satu alat tulis, maka jumlah pulpen yang terjual adalah 64 buah.",
            "Berdasarkan tren pada diagram garis, jumlah pengunjung koperasi selalu mengalami kenaikan secara konsisten setiap bulannya.",
            "Pada bulan Mei, jumlah buku tulis yang terjual adalah 50 buah."
        ],
        // Kunci: Pernyataan 1 dan Pernyataan 2 (Indeks 0 dan 1)
        kunciJawaban: [0, 1]
    },

    // ==========================================
    // SOAL NOMOR 58 (PG)
    // ==========================================
    {
        id: 58,
        kategori: "NUMERASI",
        rentangNilai: "0-20",
        tipe: "PG",
        soal: "Berdasarkan data diketahui bahwa rata-rata berat satu butir telur kecil 45 gram, satu telur sedang 55 gram, dan satu telur besar 65 gram. Seorang karyawan toko bahan pangan sedang mengemas setiap 10 butir telur ke dalam satu kemasan dengan ketentuan bahwa rata-rata berat per telur dalam setiap kemasan tersebut adalah 55 gram.<br><br>Jika dalam satu kemasan sudah berisi 1 telur besar, 5 telur sedang, dan 2 telur kecil, maka dua telur tambahan yang harus dipilih supaya tetap memenuhi aturan pengemasan adalah ....",
        pilihan: [
            "2 telur sedang",
            "2 telur besar",
            "1 telur besar dan 1 telur kecil",
            "1 telur besar dan 1 telur sedang"
        ],
        kunciJawaban: "D"
    },

    // ==========================================
    // SOAL NOMOR 59 (PG)
    // ==========================================
    {
        id: 59,
        kategori: "NUMERASI",
        rentangNilai: "0-20",
        tipe: "PG",
        soal: "Untuk menjaga dan meningkatkan kualitas produksi, tim bagian quality control memeriksa kualitas lampu yang diproduksi pada suatu waktu. Berdasarkan pemeriksaan yang dilakukan, diperoleh data sebagai berikut:<br>• Jumlah lampu dengan kondisi baik: 980 buah<br>• Jumlah lampu dengan kondisi rusak: 20 buah<br><br>Tim tersebut melakukan kesalahan dengan meletakkan keseluruhan lampu tersebut di dalam suatu wadah.<br><br>Jika satu lampu dipilih secara acak dari wadah tersebut, peluang bahwa lampu yang terpilih adalah lampu dengan kondisi rusak adalah ...",
        pilihan: [
            "1/50",
            "1/49",
            "2/49",
            "49/50"
        ],
        kunciJawaban: "A"
    },

    // ==========================================
    // SOAL NOMOR 60 (PGK)
    // ==========================================
    {
        id: 60,
        kategori: "NUMERASI",
        rentangNilai: "0-20",
        tipe: "PGK",
        soal: "Sebuah sensor otomatis diuji untuk mendeteksi kendaraan yang melintas. Pengujian dilakukan dalam tiga tahap dengan hasil sebagai berikut:<br><br><table style='width: 100%; border-collapse: collapse; border: 1px solid #cbd5e1; font-size: 14px;'><thead><tr style='background-color: #f1f5f9; border-bottom: 2px solid #cbd5e1;'><th style='padding: 10px; border: 1px solid #cbd5e1; text-align: center;'>Tahap</th><th style='padding: 10px; border: 1px solid #cbd5e1; text-align: center;'>Jumlah Uji</th><th style='padding: 10px; border: 1px solid #cbd5e1; text-align: center;'>Sensor Berhasil</th><th style='padding: 10px; border: 1px solid #cbd5e1; text-align: center;'>Sensor Gagal</th></tr></thead><tbody><tr><td style='padding: 10px; border: 1px solid #cbd5e1; text-align: center;'>I</td><td style='padding: 10px; border: 1px solid #cbd5e1; text-align: center;'>100</td><td style='padding: 10px; border: 1px solid #cbd5e1; text-align: center;'>91</td><td style='padding: 10px; border: 1px solid #cbd5e1; text-align: center;'>9</td></tr><tr style='background-color: #f8fafc;'><td style='padding: 10px; border: 1px solid #cbd5e1; text-align: center;'>II</td><td style='padding: 10px; border: 1px solid #cbd5e1; text-align: center;'>150</td><td style='padding: 10px; border: 1px solid #cbd5e1; text-align: center;'>132</td><td style='padding: 10px; border: 1px solid #cbd5e1; text-align: center;'>18</td></tr><tr><td style='padding: 10px; border: 1px solid #cbd5e1; text-align: center;'>III</td><td style='padding: 10px; border: 1px solid #cbd5e1; text-align: center;'>250</td><td style='padding: 10px; border: 1px solid #cbd5e1; text-align: center;'>215</td><td style='padding: 10px; border: 1px solid #cbd5e1; text-align: center;'>35</td></tr></tbody></table><br>Data tersebut digunakan untuk memperkirakan peluang kegagalan sensor pada satu kali deteksi berikutnya.<br><br>Berdasarkan hasil pengujian sensor pada tabel, manakah pernyataan yang benar tentang pengujian sensor tersebut?<br>Pilih semua jawaban benar! Jawaban benar lebih dari satu.",
        pilihan: [
            "Frekuensi relatif atau peluang kegagalan sensor dari seluruh pengujian adalah 0,124.",
            "Frekuensi relatif atau peluang kegagalan pada Tahap III lebih besar daripada pada Tahap I.",
            "Jika dilakukan 1.000 pengujian tambahan, frekuensi harapan sensor tersebut akan gagal adalah sebanyak 124 kali.",
            "Peluang sensor berhasil pada satu kali deteksi berikutnya adalah sebesar 0,91."
        ],
        // Kunci: Pernyataan 1, 2, dan 3 (Indeks 0, 1, dan 2)
        kunciJawaban: [0, 1, 2]
    }
];
