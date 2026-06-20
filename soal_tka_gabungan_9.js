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
    }
];
