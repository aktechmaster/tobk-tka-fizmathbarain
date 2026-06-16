const daftarSoal = [
  {
    no: 1,
    tingkat: "Mudah",
    bobot: 4,
    tipe: "Pilihan Ganda",
    pertanyaan: "Ani membeli 2 pulpen dan 2 pensil di sebuah toko alat tulis. Harga satuan pulpen adalah Rp12.000,00 dan harga satuan pensil adalah Rp8.000,00. Kebetulan, toko tersebut sedang memberikan promo \"Hemat Berempat\" dengan ketentuan sebagai berikut: <br><br> <i>\"Setiap pembelian 4 barang (boleh campur) akan mendapat potongan harga sebesar harga 1 barang termurah yang dibeli\".</i> <br><br> Berapa total harga yang harus dibayar Ani dari semua barang yang dibeli?",
    pilihan: [
      "Rp32.000,00.",
      "Rp36.000,00.",
      "Rp40.000,00.",
      "Rp44.000,00."
    ],
    kunci: "Rp32.000,00."
  },
  {
    no: 2,
    tingkat: "Mudah",
    bobot: 4,
    tipe: "Pilihan Ganda Kompleks",
    pertanyaan: "Sebuah toko menjual 1 kg beras seharga Rp12.750,00. Jika seseorang membeli 19,6 kg untuk jenis beras yang sama, berapa perkiraan total harga yang mungkin?",
    pilihan: [
      "Sekitar Rp240.000,00 karena 19,6 kg mendekati 20 kg dan Rp12.750,00 mendekati Rp12.000,00.",
      "Sekitar Rp250.000,00 karena 19,6 kg mendekati 20 kg dan Rp12.750,00 mendekati Rp12.500,00.",
      "Sekitar Rp260.000,00 karena 19,6 kg mendekati 20 kg dan Rp12.750,00 mendekati Rp13.000,00."
    ],
    kunci: ["Sekitar Rp240.000,00...", "Sekitar Rp250.000,00...", "Sekitar Rp260.000,00..."] // Semua pernyataan benar berdasarkan kunci dokumen
  },
  {
    no: 3,
    tingkat: "Sedang",
    bobot: 7,
    tipe: "Pilihan Ganda",
    pertanyaan: "Sebuah taman berbentuk persegi panjang dengan ukuran panjang $(2x + 4)$ meter dan lebar $(x - 1)$ meter. Jika keliling taman tersebut tidak lebih dari 36 meter, maka panjang taman ($p$) yang memenuhi adalah...",
    pilihan: [
      "$p \\le 10$",
      "$p \\le 12$",
      "$4 < p \\le 12$",
      "$4 < p \\le 14$"
    ],
    kunci: "$4 < p \\le 14$"
  },
  {
    no: 4,
    tingkat: "Mudah",
    bobot: 4,
    tipe: "Pilihan Ganda",
    pertanyaan: "Nilai dari $\\sqrt{48} - 2\\sqrt{27} + \\sqrt{75}$ adalah...",
    pilihan: [
      "$\\sqrt{3}$",
      "$2\\sqrt{3}$",
      "$3\\sqrt{3}$",
      "$4\\sqrt{3}$"
    ],
    kunci: "$3\\sqrt{3}$"
  },
  {
    no: 5,
    tingkat: "Sedang",
    bobot: 7,
    tipe: "Pilihan Ganda Kompleks (Benar/Salah)",
    pertanyaan: "Diketahui barisan aritmetika dengan suku ke-3 adalah 11 dan suku ke-8 adalah 31. Tentukan Benar atau Salah untuk setiap pernyataan berikut!",
    pernyataan: [
      { teks: "Suku pertama barisan tersebut adalah 3.", jawaban: "Benar" },
      { teks: "Beda dari barisan tersebut adalah 4.", jawaban: "Benar" },
      { teks: "Suku ke-10 barisan tersebut adalah 39.", jawaban: "Benar" }
    ]
  },
  {
    no: 6,
    tingkat: "Sedang",
    bobot: 7,
    tipe: "Pilihan Ganda",
    pertanyaan: "Sebuah tangga yang panjangnya 5 meter disandarkan pada dinding rumah. Jika jarak kaki tangga dengan dinding adalah 3 meter, maka tinggi dinding yang dapat dicapai oleh tangga tersebut adalah...",
    pilihan: [
      "3,5 meter",
      "4,0 meter",
      "4,5 meter",
      "4,8 meter"
    ],
    kunci: "4,0 meter"
  },
  {
    no: 7,
    tingkat: "Sedang",
    bobot: 7,
    tipe: "Pilihan Ganda",
    pertanyaan: "Diberikan dua buah lingkaran dengan pusat $A$ dan $B$ berjarak 26 cm. Jika panjang jari-jari lingkaran $A$ adalah 12 cm dan panjang garis singgung persekutuan luar kedua lingkaran adalah 24 cm, maka panjang jari-jari lingkaran $B$ yang mungkin adalah...",
    pilihan: [
      "2 cm",
      "4 cm",
      "6 cm",
      "10 cm"
    ],
    kunci: "2 cm"
  },
  {
    no: 8,
    tingkat: "Sulit",
    bobot: 10,
    tipe: "Pilihan Ganda",
    pertanyaan: "Sebuah wadah berbentuk kerucut penuh berisi air. Jari-jari alas kerucut adalah 7 cm dan tingginya 12 cm. Seluruh air tersebut dituangkan ke dalam wadah berbentuk tabung yang memiliki jari-jari alas sama dengan jari-jari kerucut. Tinggi air pada wadah tabung adalah...",
    pilihan: [
      "2 cm",
      "4 cm",
      "6 cm",
      "8 cm"
    ],
    kunci: "4 cm"
  },
  {
    no: 9,
    tingkat: "Sulit",
    bobot: 10,
    tipe: "Pilihan Ganda Kompleks",
    pertanyaan: "Data nilai ulangan matematika sekelompok siswa adalah sebagai berikut: 60, 70, 85, 70, 90, 80, 75, 80, 85, 70. Berdasarkan data tersebut, manakah pernyataan yang benar? (Pilih semua yang benar)",
    pilihan: [
      "Modus dari data tersebut adalah 70.",
      "Median dari data tersebut adalah 77,5.",
      "Rata-rata (mean) dari data tersebut adalah 76,5."
    ],
    kunci: ["Modus dari data tersebut adalah 70.", "Median dari data tersebut adalah 77,5.", "Rata-rata (mean) dari data tersebut adalah 76,5."]
  },
  {
    no: 10,
    tingkat: "Sulit",
    bobot: 10,
    tipe: "Pilihan Ganda",
    pertanyaan: "Dalam sebuah kantong terdapat 5 bola merah, 3 bola kuning, dan 2 bola hijau. Jika diambil satu bola secara acak, peluang terambilnya bola bukan berrwarna hijau adalah...",
    pilihan: [
      "$\\frac{1}{5}$",
      "$\\frac{2}{5}$",
      "$\\frac{3}{5}$",
      "$\\frac{4}{5}$"
    ],
    kunci: "$\\frac{4}{5}$"
  },
  {
    no: 11,
    tingkat: "Mudah",
    bobot: 4,
    tipe: "Pilihan Ganda",
    pertanyaan: "Hasil dari $(-4) + 10 \\times 2 - (-6) \\div 2$ adalah...",
    pilihan: [
      "13",
      "19",
      "21",
      "25"
    ],
    kunci: "19"
  },
  {
    no: 12,
    tingkat: "Mudah",
    bobot: 4,
    tipe: "Pilihan Ganda",
    pertanyaan: "Suatu peta dibuat dengan skala $1 : 250.000$. Jika jarak dua kota pada peta adalah 8 cm, maka jarak sebenarnya kedua kota tersebut adalah...",
    pilihan: [
      "20 km",
      "50 km",
      "200 km",
      "500 km"
    ],
    kunci: "20 km"
  },
  {
    no: 13,
    tingkat: "Sedang",
    bobot: 7,
    tipe: "Pilihan Ganda",
    pertanyaan: "Harga 3 buku dan 2 pensil adalah Rp17.500,00, sedangkan harga 2 buku dan 5 pensil adalah Rp22.500,00. Harga 1 buku dan 1 pensil adalah...",
    pilihan: [
      "Rp5.000,00",
      "Rp5.500,00",
      "Rp6.000,00",
      "Rp6.500,00"
    ],
    kunci: "Rp6.000,00"
  },
  {
    no: 14,
    tingkat: "Sulit",
    bobot: 10,
    tipe: "Pilihan Ganda Kompleks (Benar/Salah)",
    pertanyaan: "Sistem persamaan linear dua variabel berikut: <br> $ax + by = 16$ <br> $2x - 2y = -1$ <br> Mempunyai solusi $(x, y) = (5, -2)$. Tentukan Benar atau Salah untuk pernyataan mengenai nilai $a$ dan $b$!",
    pernyataan: [
      { teks: "$a$ merupakan bilangan prima.", jawaban: "Benar" },
      { teks: "$b$ merupakan bilangan ganjil.", jawaban: "Benar" },
      { teks: "$10a + b = 31$", jawaban: "Salah" }
    ]
  },
  {
    no: 15,
    tingkat: "Mudah",
    bobot: 4,
    tipe: "Pilihan Ganda",
    pertanyaan: "Sebuah pabrik memproduksi batang logam. Fungsi $f(x) = 5x + 10$ menyatakan berat total (kg) untuk $x$ batang logam. Jika pabrik memproduksi 7 batang logam, berapa total berat logam yang dihasilkan?",
    pilihan: [
      "35 kg.",
      "45 kg.",
      "50 kg.",
      "70 kg."
    ],
    kunci: "45 kg."
  },

  {
    no: 16,
    tingkat: "Sedang",
    bobot: 7,
    tipe: "Pilihan Ganda",
    pertanyaan: "<b>Proyek Renovasi Gedung</b><br>Proyek renovasi suatu gedung sekolah harus diselesaikan paling lambat dalam waktu 60 hari sesuai dengan kontrak kerja yang telah disepakati bersama. Manajer proyek telah menghitung kebutuhan tenaga kerja dengan asumsi setiap pegawai memiliki kemampuan dan produktivitas yang sama setiap harinya. Kemajuan proyek sangat bergantung pada jumlah pegawai; semakin banyak pegawai yang bekerja, maka waktu pengerjaan akan semakin singkat.<br><br>Berdasarkan perencanaan awal, renovasi gedung dapat diselesaikan oleh 12 pegawai dalam waktu 60 hari. Jika manajer memutuskan untuk menambah jumlah pegawai menjadi 18 orang agar pekerjaan lebih cepat selesai, maka waktu yang diperlukan untuk menyelesaikan renovasi tersebut adalah...",
    pilihan: [
      "30 hari",
      "40 hari",
      "45 hari",
      "90 hari"
    ],
    kunci: "40 hari"
  },
  {
    no: 17,
    tingkat: "Sedang",
    bobot: 7,
    tipe: "Pilihan Ganda Kompleks (Benar/Salah)",
    pertanyaan: "<b>Proyek Renovasi Gedung</b><br>Rencana awal, renovasi gedung dilakukan oleh 15 pegawai. Namun, pada 10 hari pertama, hanya 10 pegawai yang bekerja karena sebagian lainnya harus beristirahat. Setelah hari ke-10, seluruh pegawai (15 orang) kembali bekerja.<br><br>Berdasarkan situasi tersebut, tentukan Benar atau Salah untuk setiap pernyataan berikut tentang penyelesaiaan renovasi gedung tersebut!",
    pernyataan: [
      { teks: "Sisa pekerjaan yang harus diselesaikan setelah hari ke-10 adalah setara dengan pekerjaan 800 hari penuh yang dikerjakan 1 orang.", jawaban: "Benar" },
      { teks: "Selama 10 hari pertama, proyek mengalami ketertinggalan jadwal yang setara dengan hasil kerja 5 orang selama 10 hari.", jawaban: "Benar" },
      { teks: "Agar renovasi tetap selesai tepat waktu manajer cukup mempekerjakan kembali 15 pegawai semula tanpa perlu menambah tenaga kerja tambahan.", jawaban: "Salah" }
    ]
  },
  {
    no: 18,
    tingkat: "Sulit",
    bobot: 10,
    tipe: "Pilihan Ganda Kompleks",
    pertanyaan: "<b>Proyek Renovasi Gedung</b><br>Rencana awal renovasi gedung diproyeksikan untuk 20 pegawai. Namun setelah pekerjaan berjalan 24 hari, pekerjaan berhenti total selama 12 hari (tidak ada pegawai yang bekerja) karena kendala cuaca. Manajer proyek melakukan analisis untuk menentukan langkah penyesuaian jumlah pegawai.<br><br>Berdasarkan situasi tersebut, berikut ini manakah pernyataan yang sesuai tentang penyelesaian renovasi gedung dalam sisa waktu yang tersedia? (Pilih semua jawaban benar!)",
    pilihan: [
      "Sisa waktu efektif yang tersedia untuk menyelesaikan seluruh sisa pekerjaan adalah 24 hari.",
      "Beban pekerjaan yang masih tersisa setara dengan hasil kerja 20 orang selama 60 hari.",
      "Manajer proyek harus menyiapkan total 30 pegawai agar proyek selesai tepat waktu.",
      "Manajer proyek cukup menambah 5 orang pegawai dari jumlah semula agar renovasi gedung selesai tepat waktu."
    ],
    kunci: [
      "Sisa waktu efektif yang tersedia untuk menyelesaikan seluruh sisa pekerjaan adalah 24 hari.",
      "Manajer proyek harus menyiapkan total 30 pegawai agar proyek selesai tepat waktu."
    ]
  },
  {
    no: 19,
    tingkat: "Sulit",
    bobot: 10,
    tipe: "Pilihan Ganda",
    pertanyaan: "<b>Alur Pelayanan Donor Darah</b><br>Berikut adalah alur kegiatan donor darah di sebuah posko PMI:<br>1. Pendaftaran & pengisian formulir: 5 menit.<br>2. Pemeriksaan kesehatan (tensi, Hb, gol. darah): 10 menit.<br>3. Menunggu di kursi tunggu (tersedia 10 kursi).<br>4. Proses pengambilan darah: 30 menit.<br>5. Tahap pemulihan & istirahat: 30 menit.<br><br>Seorang pendonor darah mendatangi posko PMI. Kebetulan saat ini sedang tidak ada antrean sehingga orang tersebut dapat langsung dilayani. Jika tidak ada kendala pada pelayanan donor darah, apa yang sedang dilakukan pendonor tersebut setelah 25 menit berlalu?",
    pilihan: [
      "Tahap pemeriksaan kesehatan",
      "Duduk di kursi tunggu",
      "Proses pengambilan darah",
      "Istirahat di ruang pemulihan"
    ],
    kunci: "Proses pengambilan darah"
  },
  {
    no: 20,
    tingkat: "Sulit",
    bobot: 10,
    tipe: "Pilihan Ganda Kompleks",
    pertanyaan: "<b>Alur Pelayanan Donor Darah</b><br>Pada suatu waktu, Yuda baru saja sampai di posko PMI untuk melakukan donor darah. Diketahui bahwa Rama dan Fajar juga berada di posko PMI tersebut. Rama sedang menunggu antrean untuk proses pengambilan darah, sedangkan Fajar sedang proses pengambilan darah sejak 16 menit yang lalu. Mereka tidak ada janji untuk pulang bersama ketika donor darah selesai.<br><br>Berikut ini pernyataan manakah yang mungkin akan terjadi di posko PMI tersebut? (Pilih semua jawaban benar!)",
    pilihan: [
      "Yuda sempat bertemu Rama di kursi tunggu.",
      "Ketika Yuda proses pengambilan darah, Fajar telah pulang lebih dulu.",
      "Yuda menunggu di kursi tunggu selama 30 menit.",
      "Sejak pertama kali datang hingga pulang, Yuda menghabiskan waktu lebih dari 1,5 jam."
    ],
    kunci: [
      "Yuda sempat bertemu Rama di kursi tunggu.",
      "Sejak pertama kali datang hingga pulang, Yuda menghabiskan waktu lebih dari 1,5 jam."
    ]
  },
  {
    no: 21,
    tingkat: "Mudah",
    bobot: 4,
    tipe: "Pilihan Ganda Kompleks (Benar/Salah)",
    pertanyaan: "<b>Alur Pelayanan Donor Darah</b><br>Posko PMI menambahkan satu tempat lagi untuk proses pengambilan darah dan di tahap pemulihan, sehingga dapat melayani 2 orang sekaligus pada proses pengambilan darah. Pada hari ini saat pukul 11.30 terlihat sudah ada 2 orang yang sedang berada di ruang pemulihan. Salah seorang baru saja memulai tahap pemulihan dan satu orang lainnya sudah berjalan 15 menit. Ada pula 1 orang calon pendonor yang akan melakukan pendaftaran, 1 orang akan melakukan pemeriksaan kesehatan, 1 orang di kursi tunggu, dan 2 orang sedang proses pengambilan darah.<br><br>Tentukan Benar atau Salah untuk setiap pernyataan berikut tentang situasi di lokasi donor darah pada hari tersebut!",
    pernyataan: [
      { teks: "Posko PMI mulai didatangi calon pendonor sejak pukul 10.30.", jawaban: "Benar" },
      { teks: "Ada kemungkinan terdapat 3 orang di ruang tunggu.", jawaban: "Salah" },
      { teks: "Pada pukul 11.00 belum ada pendonor yang memasuki tahap pemulihan.", jawaban: "Benar" }
    ]
  },
  {
    no: 22,
    tingkat: "Mudah",
    bobot: 4,
    tipe: "Pilihan Ganda",
    pertanyaan: "Perhatikan bentuk aljabar berikut:<br>$(x+2)(3+y)+(x+2)(1-y)$<br><br>Bentuk sederhana dari bentuk aljabar tersebut adalah...",
    pilihan: [
      "$4(x+2)$",
      "$x+2+4y$",
      "$4(x+8)$",
      "$4x+2y$"
    ],
    kunci: "$4(x+2)$"
  },
  {
    no: 23,
    tingkat: "Sedang",
    bobot: 7,
    tipe: "Pilihan Ganda Kompleks",
    pertanyaan: "Sebuah jasa pengantaran barang mengenakan biaya sebagai berikut:<br>- Biaya tetap pemesanan sebesar Rp12.000,00.<br>- Biaya pengantaran Rp4.000,00 per kilometer.<br><br>Seorang pelanggan memiliki anggaran tidak lebih dari Rp40.000,00 untuk satu kali pemesanan jasa antar. Berikut ini, manakah pernyataan yang benar tentang permasalahan tersebut? (Pilih semua jawaban benar!)",
    pilihan: [
      "Apabila $x$ menyatakan jarak pengantaran (dalam km), maka permasalahan dapat dimodelkan dengan $4.000x + 12.000 \\le 40.000$.",
      "Jarak pengantaran maksimum yang masih dapat dipilih pelanggan adalah 7 km.",
      "Jika jarak pengantaran 8 km, maka biaya total melebihi anggaran.",
      "Penambahan jarak antar 1 km akan menambah biaya sebesar Rp16.000,00."
    ],
    kunci: [
      "Apabila $x$ menyatakan jarak pengantaran (dalam km), maka permasalahan dapat dimodelkan dengan $4.000x + 12.000 \\le 40.000$.",
      "Jarak pengantaran maksimum yang masih dapat dipilih pelanggan adalah 7 km.",
      "Jika jarak pengantaran 8 km, maka biaya total melebihi anggaran."
    ]
  },
  {
    no: 24,
    tingkat: "Sedang",
    bobot: 7,
    tipe: "Pilihan Ganda Kompleks (Benar/Salah)",
    pertanyaan: "Misalkan $a$ dan $b$ merupakan dua bilangan real sehingga sistem persamaan linear (SPL):<br>$\\begin{cases} 2x + ay = 4 \\\\ bx - 2y = -1 \\end{cases}$<br>mempunyai solusi $(x,y) = (5,-2)$.<br><br>Tentukan Benar atau Salah untuk setiap pernyataan berikut terkait dengan nilai $a$ dan $b$!",
    pernyataan: [
      { teks: "$a$ merupakan bilangan prima.", jawaban: "Benar" },
      { teks: "$b$ merupakan bilangan ganjil.", jawaban: "Benar" },
      { teks: "$10a+b=31$", jawaban: "Salah" }
    ]
  },
  {
    no: 25,
    tingkat: "Mudah",
    bobot: 4,
    tipe: "Pilihan Ganda",
    pertanyaan: "Sebuah pabrik memproduksi batang logam. Fungsi $f(x) = 5x + 10$ menyatakan berat total (kg) untuk $x$ batang logam. Jika pabrik memproduksi 7 batang logam, berapa total berat logam yang dihasilkan?",
    pilihan: [
      "35 kg.",
      "45 kg.",
      "50 kg.",
      "70 kg."
    ],
    kunci: "45 kg."
  },
  // Sub-soal tambahan / variasi konsep numerik TKA untuk menggenapkan menjadi 30 butir
  {
    no: 26,
    tingkat: "Mudah",
    bobot: 4,
    tipe: "Pilihan Ganda",
    pertanyaan: "Jika nilai dari fungsi produksi logam pada pabrik di nomor sebelumnya menghasilkan berat total sebesar $85$ kg, berapa banyak batang logam $x$ yang diproduksi?",
    pilihan: [
      "13 batang",
      "15 batang",
      "17 batang",
      "20 batang"
    ],
    kunci: "15 batang"
  },
  {
    no: 27,
    tingkat: "Sedang",
    bobot: 7,
    tipe: "Pilihan Ganda",
    pertanyaan: "Dari persamaan linear pada nomor 24, nilai dari variabel sistem $a$ dan $b$ berturut-turut yang memenuhi solusi $(5, -2)$ adalah...",
    pilihan: [
      "$a = 3$ dan $b = 1$",
      "$a = 3$ dan $b = -1$",
      "$a = 2$ dan $b = 3$",
      "$a = 1$ dan $b = 3$"
    ],
    kunci: "$a = 3$ dan $b = -1$"
  },
  {
    no: 28,
    tingkat: "Mudah",
    bobot: 4,
    tipe: "Pilihan Ganda",
    pertanyaan: "Bentuk lain yang ekuivalen dari model pengantaran barang $4.000x + 12.000 \\le 40.000$ setelah disederhanakan dengan membagi kedua ruas dengan $4.000$ adalah...",
    pilihan: [
      "$x + 3 \\le 10$",
      "$x + 3 \\le 40$",
      "$4x + 12 \\le 40$",
      "$x + 12 \\le 10$"
    ],
    kunci: "$x + 3 \\le 10$"
  },
  {
    no: 29,
    tingkat: "Sedang",
    bobot: 7,
    tipe: "Pilihan Ganda",
    pertanyaan: "Berdasarkan alur pelayanan donor darah PMI pada nomor 19, berapa total waktu minimal (dalam menit) yang dihabiskan oleh seorang pendonor dari proses pendaftaran hingga tahap pemulihan selesai jika tidak ada antrean sama sekali?",
    pilihan: [
      "45 menit",
      "65 menit",
      "75 menit",
      "85 menit"
    ],
    kunci: "75 menit"
  },
  {
    no: 30,
    tingkat: "Mudah",
    bobot: 4,
    tipe: "Pilihan Ganda",
    pertanyaan: "Pada Proyek Renovasi Gedung (nomor 16), jika hubungan antara jumlah pekerja dan waktu penyelesaian adalah perbandingan berbalik nilai, berapakah nilai konstanta total beban kerja (pekerja $\\times$ hari) proyek tersebut?",
    pilihan: [
      "600",
      "720",
      "840",
      "900"
    ],
    kunci: "720"
  }
];

