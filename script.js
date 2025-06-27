document.addEventListener('DOMContentLoaded', () => {


    const getUrlParameter = (name) => {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        const results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

   const newsData = {
        'fb-where-to-find-them': {
            title: "Fantastic Beasts: Where To Find Them", // Diterjemahkan
            image: "where to find them.jpg",
            author: "Daily Prophet",
            date: "20 Juni 2025",
            category: "Film",
            content: `
                <p>Fantastic Beasts and Where to Find Them membawa kita ke era baru di Dunia Sihir J.K. Rowling, beberapa dekade sebelum Harry Potter dan setengah dunia jauhnya. Pada tahun 1926 di New York, sesuatu yang misterius meninggalkan jejak kehancuran, mengancam untuk mengungkap komunitas penyihir kepada No-Majs (sebutan Amerika untuk Muggle) fanatik yang berniat membasmi mereka. Dan penyihir gelap Gellert Grindelwald, setelah menyebabkan kekacauan di Eropa, kini tidak ditemukan di mana pun.</p>
                <p>Magizoologist Newt Scamander tiba di kota mendekati akhir ekspedisi global untuk meneliti dan menyelamatkan makhluk ajaib, beberapa di antaranya tersimpan aman di dalam koper kulitnya yang biasa saja. No-Maj yang tidak curiga, Jacob Kowalski, secara tidak sengaja melepaskan beberapa makhluk Newt di kota – sebuah pelanggaran serius terhadap Statuta Kerahasiaan yang segera ditangani oleh mantan Auror Tina Goldstein, melihat kesempatan untuk mendapatkan kembali jabatannya. Namun, hal-hal berubah menjadi mengancam ketika Percival Graves, Direktur Keamanan Sihir yang misterius, menaruh kecurigaannya pada Newt… dan Tina.</p>
                <p>Kini bersekutu, Newt dan Tina, bersama dengan saudara perempuan Tina, Queenie, dan Jacob, membentuk kelompok pahlawan tak terduga yang harus menemukan kembali makhluk Newt yang hilang. Taruhannya lebih tinggi dari yang pernah mereka bayangkan karena misi mereka menempatkan mereka dalam jalur tabrakan dengan kekuatan gelap yang dapat mendorong dunia sihir dan No-Maj ke ambang perang.</p>
            `
        },
        'casting-revealed': {
            title: "Pemeran Harry, Hermione, dan Ron Diumumkan untuk Serial Asli HBO Harry Potter",
            image: "harry hbo.jpg",
            author: "Wizarding World Publishing",
            date: "15 Juni 2025",
            category: "Film",
            content: `
                <p>Kami secara resmi memiliki trio utama kami. Kami dengan senang hati mengonfirmasi pemilihan Dominic McLaughlin sebagai Harry Potter, Arabella Stanton sebagai Hermione Granger, dan Alastair Stout sebagai Ron Weasley untuk Serial Asli HBO Harry Potter.</p>
                <p>Ini dia mereka! Harry, Hermione, dan Ron baru Anda – yang akan menjadi tiga sahabat terbaik dalam acara TV mendatang – kini telah terungkap.</p>
                <p>Francesca Gardiner (showrunner, produser eksekutif) dan Mark Mylod (sutradara beberapa episode, produser eksekutif) berbicara tentang casting setelah melihat "puluhan ribu" anak-anak mengikuti audisi untuk peran tersebut.</p>
                <p>“Setelah pencarian luar biasa yang dipimpin oleh direktur casting Lucy Bevan dan Emily Brockmann, kami sangat senang mengumumkan bahwa kami telah menemukan Harry, Hermione, dan Ron kami. Bakat ketiga aktor unik ini luar biasa untuk disaksikan, dan kami tidak sabar menunggu dunia menyaksikan keajaiban mereka bersama di layar. Kami ingin mengucapkan terima kasih kepada puluhan ribu anak-anak yang telah mengikuti audisi. Merupakan suatu kesenangan sejati untuk menemukan begitu banyak bakat muda di luar sana.”</p>
                <p>Panggilan audisi terbuka untuk trio ini dibuka pada September tahun lalu, dan pada bulan Desember, Mark Mylod mengungkapkan bahwa mereka telah melihat 30.000 aktor muda yang sedang berkembang mencoba peran yang didambakan.</p>
                <p>Ketiga aktor muda ini akan bergabung dengan banyak bintang TV dan film yang mulai membentuk pemeran lengkap serial ini. Mereka akan menggabungkan kekuatan dengan:</p>
                <ul>
                    <li>John Lithgow sebagai Profesor Dumbledore</li>
                    <li>Janet McTeer sebagai Profesor McGonagall</li>
                    <li>Paapa Essiedu sebagai Profesor Snape</li>
                    <li>Nick Frost sebagai Rubeus Hagrid</li>
                    <li>Paul Whitehouse sebagai Argus Filch</li>
                    <li>Luke Thallon sebagai Quirinus Quirrell</li>
                </ul>
                <p>Hogwarts mulai terlihat cukup penuh.</p>
                <p>Serial ini akan menjadi adaptasi setia dari seri buku “Harry Potter” tercinta oleh penulis dan produser eksekutif J.K. Rowling. Serial ini akan menampilkan pemeran baru untuk memimpin generasi penggemar baru, penuh dengan detail fantastis dan karakter-karakter yang sangat dicintai penggemar “Harry Potter” selama lebih dari dua puluh lima tahun. Setiap musim akan membawa “Harry Potter” dan petualangan luar biasa ini kepada audiens baru di seluruh dunia, sementara film-film asli, klasik, dan yang dihargai akan tetap menjadi inti waralaba dan tersedia untuk ditonton secara global.</p>
                <p>Serial ini ditulis dan diproduksi secara eksekutif oleh Francesca Gardiner. Mark Mylod akan menjadi produser eksekutif dan menyutradarai beberapa episode serial ini untuk HBO bekerja sama dengan Brontë Film and TV dan Warner Bros. Television. Serial ini diproduksi secara eksekutif oleh J.K. Rowling, Neil Blair, dan Ruth Kenley-Letts dari Brontë Film and TV, dan David Heyman dari Heyday Films.</p>
                <p>Serial TV Harry Potter akan menjadi HBO Original dan akan tayang perdana di HBO Max.</p>
            `
        },
        'Studio-Tour': {
            title: "Horntail Hungaria Menguasai London untuk Merayakan Fitur Turnamen Triwizard Baru Studio Tour - dan Segera Melakukan Tur!",
            image: "Warner_Bros_Dragon_Stunt-10.webp",
            author: "Penyelenggara Acara",
            date: "10 Maret 2025",
            category: "Acara",
            content: `
                <p>Seekor naga perkasa muncul di jalanan London minggu ini, tapi jangan khawatir. Ini semua adalah aksi spektakuler dari tim di Warner Bros. Studio Tour London, meluncurkan fitur Turnamen Triwizard – Pembuatan Juara mereka dengan gemilang.</p>
                <p>UPDATE: Hari ini kami dapat mengungkapkan bahwa Horntail Hungaria akan melakukan tur di Inggris! Cari tahu apakah Anda dapat melihat makhluk berapi ini di lokasi dekat Anda di sini.</p>
                <p>Kunjungi situs resmi Warner Bros. Studio Tour untuk detail lebih lanjut.</p>
                <ul>
                    <li>20 Mei – London (Lokasi Rahasia Akan Diungkap) | 8 pagi – 7 malam</li>
                    <li>22 Mei – Bullring & Grand Central, Birmingham | 10 pagi – 9 malam</li>
                    <li>24 Mei – Trafford Centre, Manchester | 10 pagi – 9 malam</li>
                    <li>26 Mei – Briggate, Leeds | 9 pagi – 8 malam</li>
                    <li>28 Mei – Liverpool ONE, Liverpool | 10 pagi – 9 malam</li>
                    <li>30 Mei (Hanya Sore) – Castle Street, Edinburgh | 1 siang – 9 malam</li>
                    <li>31 Mei – Castle Street, Edinburgh | 9 pagi – 8 malam</li>
                </ul>
                <p>Di mana Hagrid saat Anda membutuhkannya?!</p>
                <p>Warga London dan turis sama-sama disuguhi tampilan naga berskala penuh (belum lagi, bersisik) di ibu kota Inggris minggu ini, saat animatronik Horntail Hungaria setinggi 25 kaki terlihat melintasi Westminster Bridge, Houses of Parliament, dan Stasiun King’s Cross.</p>
                <p>Untuk merayakan ulang tahun ke-20 Harry Potter and the Goblet of Fire, Warner Bros. Studio Tour London mengantar musim panas dengan fitur baru mereka, Turnamen Triwizard – Pembuatan Juara, yang berfokus pada kompetisi bersejarah yang berlangsung di Hogwarts selama film Harry Potter keempat. Dan ya, seperti yang mungkin Anda duga, itu melibatkan tugas bertema naga tertentu.</p>
                <p>Syukurlah, tidak seperti naga yang harus dihadapi Harry dan Juara Triwizard lainnya, naga ini masih aman di dalam kotaknya. Yah, sebagian besar.</p>
                <p>Pembuat film Harry Potter dan Perancang Animatronik, Joe Scott, mendesain naga itu, mereplikasi makhluk di film, lengkap dengan kepala, mulut, dan mata yang bergerak, serta efek suara.</p>
                <p>Rekreasi Horntail Hungaria yang terampil dibuat dengan cermat selama 750 jam, menggunakan bahan-bahan termasuk 25kg fiberglass. Tim pertama kali membuat serangkaian sketsa terperinci dan maket CGI, sebelum Pemahat, Tukang Kayu, dan Seniman Pemandangan dengan teliti membangun kepala naga, yang dicetak 3D menggunakan pemindaian dari makhluk asli dari film.</p>
                <p>Sebanyak 119 duri diterapkan secara individual untuk menghias kepala dan ekor naga, memakan waktu 265 jam yang melelahkan, sementara 38 gigi setajam silet dicetak 3D dari resin untuk menciptakan gigitan di mulut animatronik makhluk itu.</p>
                <p>Kedengarannya... cukup merepotkan!</p>
                <p>Horntail Hungaria dikenal sebagai salah satu ras naga paling berbahaya di dunia sihir - dan juga kebetulan menjadi naga yang harus diatasi Harry Potter untuk tugas Turnamen Triwizard pertama. Begitulah!</p>
            `
        },
        'hogwarts-update': {
            title: "Harry Potter: Hogwarts Mystery ungkap fitur Hogwarts Harvest untuk 2025",
            image: "games.jpg",
            author: "Avalanche Software",
            date: "5 April 2025",
            category: "Game",
            content: `
				<p>Kabar gembira datang dari dunia gim seluler Harry Potter: Hogwarts Mystery! Bersiaplah menyambut semangat musim panas ini, karena gim yang mengundang Anda untuk merasakan petualangan Hogwarts Anda sendiri akan meluncurkan fitur baru yang menarik: <strong>"Hogwarts Harvest"</strong> pada tanggal 28 Mei.</p>
				<p>Bagi para calon Ahli Herbologi, ini adalah kesempatan emas! Bersiaplah untuk mengotori tangan Anda dengan tambahan terbaru Hogwarts Mystery yang menyenangkan ini. Anda diundang untuk berkebun (ya, permainan kata yang disengaja!) di rumah kaca khusus dan memelihara tanaman ajaib untuk mendapatkan beragam hadiah menarik.</p>
				<p>Fitur baru yang dapat dibuka ini tersedia untuk siswa Tahun 2 yang telah menyelesaikan Bab 1, Bagian 5. Atas permintaan Profesor Dumbledore dan Profesor Sprout, Anda akan diundang ke <strong>"Rumah Kaca Pinggiran"</strong>. Di sanalah Anda akan mengemban tugas mulia sebagai penjaga resmi rumah kaca, membantu memanen tanaman sihir dan mengumpulkan barang-barang eksklusif yang berharga.</p>
				<p>Rahasia sukses dalam berkebun sihir adalah kesabaran. Di rumah kaca khusus Anda, Anda harus rajin menyiram dan memberi pupuk tanaman secara teratur agar mereka dapat tumbuh subur. Anda akan menemukan beberapa flora sihir yang sudah tidak asing lagi dari kisah Harry Potter, seperti <strong>Mimbulus Mimbletonia</strong> dan <strong>Venomous Tentacula</strong>, di antara banyak lainnya.</p>
				<p>Nantikan terus! Akan ada lebih banyak tanaman dan opsi kustomisasi yang akan segera hadir untuk terus mengembangkan rumah kaca Anda sepanjang tahun.</p>
				<p>Bulan Juni juga akan membawa nuansa romansa musim panas yang mekar di Hogwarts. Dimulai pada 1 Juni, akan ada pembagian hadiah pakaian Pride, serta Petualangan Khusus baru yang romantis untuk dinantikan. Tak hanya itu, acara baru "Hogwarts Diary" juga menawarkan hadiah-hadiah baru yang mendebarkan untuk dibuka saat Anda berlomba menemukan harta rahasia <strong>Salazar Slytherin</strong>.</p>
				<p>Semua ini akan segera hadir untuk memperkaya pengalaman Anda di Hogwarts!</p>           `
        },
        'profil-publik-baru': {
            title: "Semua yang Perlu Anda Ketahui tentang Profil Publik Baru HarryPotter.com",
            image: "public profile.webp",
            author: "WizardingWorld.com",
            date: "1 Juni 2025",
            category: "Situs Web",
            content: `
				<p>Pernahkah Anda bertanya-tanya apa arti Patronus Anda? Butuh tempat yang praktis untuk menyimpan item yang Anda buka dari Pembuat Potret? Ingin mengunjungi profil pengguna lain? Sekarang Anda bisa dengan fitur-fitur baru yang menyenangkan ini. DAN Anda bisa membagikan profil Anda dengan orang lain untuk pertama kalinya!</p>
				<h3>Temukan Patronus Anda dan Apa Artinya</h3>
				<p>Seperti yang mungkin Anda ketahui, ketika Anda mendaftar ke HarryPotter.com, Anda dapat menemukan asrama Hogwarts, tongkat sihir, dan Patronus Anda. Untuk <strong>Patronus Experience</strong>, kami telah menyempurnakan halaman hasil Anda, sehingga Anda sekarang dapat melihat apa arti penjaga hewan perak pilihan Anda. Misalnya – memiliki Patronus Salmon dan mengalami krisis eksistensial karenanya? Tidak lagi. Salmon sebenarnya sangat berguna, seperti yang akan Anda pelajari!</p>
				<p>Langkahkan kaki ke dalam hutan dan temukan Patronus Anda sekarang.</p>
				<p><img src="patronus.webp" alt="Ilustrasi Patronus Salmon" style="width:100%; max-width:600px; height:auto; margin-bottom: 20px;"></p>
				<h3>Bagikan Profil Anda – dan Lihat Penyihir Lain</h3>
				<p>Ada ribuan bahkan jutaan penggemar Harry Potter di luar sana, dan sekarang Anda dapat melihat bagaimana mereka membuat profil mereka. Anda hanya akan dapat melihat inisial mereka – tetapi ada banyak kesenangan yang bisa didapat dengan menjelajahi sesama calon penyihir Anda dan melihat semua kombinasi Patronus/asrama Hogwarts yang menyenangkan (apakah ada Hufflepuff dengan Patronus Badger di luar sana?). Pastikan untuk membagikan profil Anda juga, agar orang lain dapat melihat dengan tepat bagaimana Anda merepresentasikan diri Anda di dunia sihir. Tidak ingin membagikan profil Anda? Itu juga tidak masalah - cukup alihkan tombol di pengaturan.</p>
				<p><img src="profile.webp" alt="Contoh Profil Pengguna HarryPotter.com" style="width:100%; max-width:600px; height:auto; margin-bottom: 20px;"></p>
				<h3>Buat Potret Ajaib Anda Sendiri – dan Kumpulkan Konten Spesial yang Dapat Dibuka</h3>
				<p>Di profil Anda, Anda dapat membuat potret gaya Hogwarts Anda sendiri, lengkap dengan ratusan ciri fisik, latar belakang, aksesori, dan banyak lagi. Tetapi kami juga terkadang mengeluarkan item rahasia ke alam semesta, yang dapat Anda buka dengan kode rahasia.</p>
				<p>Pecahkan kodenya, dan voila: item spesial Anda terungkap. Dan sekarang, Anda dapat mengumpulkan semua item yang dapat Anda buka di profil Anda, sehingga semuanya rapi dan tertata di satu tempat. Dan Anda bisa membual kepada teman-teman Anda tentang berapa banyak yang telah Anda kumpulkan.</p>
				<h3>Selesaikan Daftar Periksa Dunia Sihir Anda</h3>
				<p>Kami menyukai daftar periksa – itu membuat kami merasa lebih utuh. Di profil Anda, jika Anda melewatkan pengalaman menyenangkan kami, Anda sekarang dapat melihat apa yang telah Anda selesaikan – dan sihir apa yang masih harus ditemukan. Ini akan memberi Anda kepuasan yang luar biasa, percayalah.</p>
				<p><img src=" public profile.webp" alt="Contoh Daftar Periksa Dunia Sihir" style="width:100%; max-width:600px; height:auto; margin-bottom: 20px;"></p>
				<p>Jadi, itu semua adalah fitur baru. Tetapi jika Anda baru saja mendaftar, jangan lupa untuk melihat fitur-fitur kami yang sudah ada juga. Meskipun kami yakin Anda pernah mendengar tentang salah satunya...</p>
				<h3>Temukan Asrama Hogwarts Anda</h3>
				<p>Agak mungkin Anda telah hidup di bawah batu – atau terkena Mantra Confundus – dan tidak menyadari bahwa Anda dapat menemukan asrama Hogwarts Anda di <strong>Upacara Pemilahan Resmi</strong> kami. Tapi jangan takut. Topi Seleksi selalu menunggu Anda – dan akan membantu Anda menemukan apakah Anda termasuk Gryffindor, Ravenclaw, Hufflepuff, atau Slytherin, tergantung pada bagaimana Anda menjawab pertanyaan misterius Topi itu.</p>
				<p>Anda bahkan dapat memilih hewan peliharaan Hogwarts di sepanjang jalan (kami secara pribadi menyukai kodok pohon berkaki tiga) dan pada akhirnya, Anda akan disajikan dengan halaman asrama Hogwarts Anda, di mana Anda dapat mempelajari lebih lanjut tentang asrama Anda, mendapatkan surat khusus dari prefek asrama Anda, dan menemukan karakter Harry Potter mana yang menjadi bagian dari rumah baru Anda.</p>
				<p><img src="house.webp" alt="Topi Seleksi Hogwarts" style="width:100%; max-width:600px; height:auto; margin-bottom: 20px;"></p>
				<h3>Temukan Tongkat Sihir Anda di Upacara Tongkat Resmi</h3>
				<p>Jadi asrama Hogwarts Anda sudah selesai... tetapi apakah Anda juga tahu bahwa Anda dapat menemukan tongkat sihir Anda sendiri? Kami memiliki begitu banyak versi berbeda untuk ditemukan, dari jenis kayu tongkat sihir, panjang, dan inti yang berbeda. Kami bahkan akan memberi tahu Anda apakah tongkat sihir Anda lentur, kokoh, atau bengkok – ini semua sangat penting untuk diketahui!</p>
				<p>Seperti halnya <strong>Upacara Pemilahan</strong>, selami diri Anda dengan serangkaian petunjuk menarik untuk menemukan jenis tongkat sihir apa yang tepat untuk Anda. Tapi tentu saja, sebenarnya, Anda tidak memilih tongkat sihir – tongkat sihirlah yang memilih Anda.</p>
				<p>Temukan tongkat sihir Anda!</p>
				<p><img src="wand.webp" alt="Tongkat Sihir Harry Potter" style="width:100%; max-width:600px; height:auto; margin-bottom: 20px;"></p>
				<h3>Berlangganan Buletin Kami</h3>
				<p>Oh, apakah Anda tidak tahu kami memiliki buletin yang luar biasa, penuh dengan fakta menyenangkan, diskon, berita terbaru, dan banyak lagi? Anggap saja seperti buletin Hogwarts Anda sendiri – meskipun sayangnya ini datang ke kotak masuk Anda, bukan melalui burung hantu.</p>`
        },

    };

    const discoverData = {
        'books': {
            title: "Seri Buku Harry Potter",
            image: "books.png",
            content: `
                <p>Seri novel fantasi Harry Potter, yang ditulis oleh penulis Inggris J.K. Rowling, menceritakan kehidupan seorang penyihir muda bernama Harry Potter dan teman-temannya Hermione Granger dan Ron Weasley, yang semuanya adalah siswa di Hogwarts School of Witchcraft and Wizardry.</p>
                <p>Cerita utamanya berpusat pada upaya Harry untuk mengalahkan penyihir hitam Lord Voldemort, yang bertujuan untuk menjadi abadi, menaklukkan dunia sihir, dan menghancurkan semua orang yang menghalangi jalannya, terutama Harry.</p>
                <h3>Buku-buku dalam Seri:</h3><ul><li>Harry Potter dan Batu Bertuah (1997)</li><li>Harry Potter dan Kamar Rahasia (1998)</li><li>Harry Potter dan Tawanan Azkaban (1999)</li><li>Harry Potter dan Piala Api (2000)</li><li>Harry Potter dan Orde Phoenix (2003)</li><li>Harry Potter dan Pangeran Berdarah Campuran (2005)</li><li>Harry Potter dan Relikui Kematian (2007)</li></ul>
                <p>Seri buku ini telah menerima pujian kritis yang luas dan keberhasilan komersial yang luar biasa di seluruh dunia. Buku-buku ini telah menarik pembaca dewasa maupun anak-anak, dan sering dianggap sebagai pendorong minat pada literatur fantasi.</p>
            `
        },
        'films': {
            title: "Adaptasi Film Harry Potter",
            image: "stone.jpg",
            content: `
                <p>Saksikan dunia sihir menjadi hidup di layar lebar melalui delapan film epik yang memukau. Dari "Harry Potter dan Batu Bertuah" hingga "Harry Potter dan Relikui Kematian Bagian 2", film-film ini telah memecahkan rekor box office dan memikat jutaan penonton.</p>
                <h3>Film-film dalam Seri:</h3><ul><li>Harry Potter dan Batu Bertuah (2001)</li><li>Harry Potter dan Kamar Rahasia (2002)</li><li>Harry Potter dan Tawanan Azkaban (2004)</li><li>Harry Potter dan Piala Api (2005)</li><li>Harry Potter dan Orde Phoenix (2007)</li><li>Harry Potter dan Pangeran Berdarah Campuran (2009)</li><li>Harry Potter dan Relikui Kematian – Bagian 1 (2010)</li><li>Harry Potter dan Relikui Kematian – Bagian 2 (2011)</li></ul>
                <p>Film-film ini berhasil menangkap esensi buku-buku, dengan akting yang luar biasa dan efek visual yang revolusioner yang membawa penonton langsung ke dalam dunia sihir.</p>
            `
        },
        'fantastic-beasts': {
            title: "Seri Fantastic Beasts",
            image: "beast1.jpg",
            content: `
                <p>Selami era sebelum Harry Potter, ikuti petualangan magizoologist eksentrik Newt Scamander. Seri ini memperluas dunia sihir, mengungkapkan lebih banyak tentang sejarah dan karakter-karakter penting seperti Albus Dumbledore dan Gellert Grindelwald.</p>
                <h3>Film-film Fantastic Beasts:</h3><ul><li>Fantastic Beasts and Where to Find Them (2016)</li><li>Fantastic Beasts: The Crimes of Grindelwald (2018)</li><li>Fantastic Beasts: The Secrets of Dumbledore (2022)</li></ul>
                <p>Seri ini mengeksplorasi konflik antara dunia sihir dan Muggle, serta meningkatnya kekuasaan Grindelwald di tahun-tahun menjelang Perang Dunia Sihir.</p>
            `
        },
        'games': {
            title: "Video Game Harry Potter",
            image: "hogwarts1.jpg",
            content: `
                <p>Nikmati pengalaman imersif di Hogwarts dan dunia sihir melalui berbagai judul video game. Mulai dari adaptasi langsung buku-buku hingga petualangan orisinal seperti Hogwarts Legacy, game-game ini memungkinkan penggemar untuk hidup sebagai penyihir.</p>
                <h3>Beberapa Game Populer:</h3><ul><li>Harry Potter and the Sorcerer's Stone (Game)</li><li>Harry Potter and the Chamber of Secrets (Game)</li><li>Hogwarts Legacy (2023)</li><li>Harry Potter: Wizards Unite (Mobile)</li><li>LEGO Harry Potter Series</li></ul>
                <p>Game-game ini menawarkan cara yang unik untuk berinteraksi dengan karakter, lokasi, dan sihir dari dunia Harry Potter.</p>
            `
        },
        'lore': {
            title: "Sejarah dan Lore Dunia Sihir",
            image: "patronus.jpg",
            content: `
                <p>Pelajari lebih lanjut tentang mitos, legenda, dan sejarah yang membentuk dunia sihir yang kaya ini. Dari pendiri Hogwarts hingga keluarga darah murni, dan tradisi sihir kuno.</p>
                <p>Dunia sihir memiliki sejarah yang mendalam, mencakup perang penyihir, penemuan mantra baru, dan evolusi komunitas sihir di berbagai belahan dunia. Jelajahi detail tentang Quidditch, Kementerian Sihir, dan budaya sihir.</p>
            `
        },
        'parks-experiences': {
            title: "Taman Hiburan & Pengalaman Dunia Sihir",
            image: "studio.jpg",
            content: `
                <p>Rasakan keajaiban secara langsung di taman hiburan dan atraksi Dunia Sihir yang menakjubkan. Universal Orlando Resort dan Universal Studios Hollywood menawarkan pengunjung kesempatan untuk berjalan-jalan di Diagon Alley atau Hogsmeade.</p>
                <h3>Lokasi Utama:</h3><ul><li>The Wizarding World of Harry Potter – Hogsmeade (Universal's Islands of Adventure)</li><li>The Wizarding World of Harry Potter – Diagon Alley (Universal Studios Florida)</li><li>Warner Bros. Studio Tour London – The Making of Harry Potter</li></ul>
                <p>Pengalaman ini mencakup perjalanan yang imersif, toko-toko bertema, dan kesempatan untuk mencoba Butterbeer yang terkenal.</p>
            `
        }
    };


    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('open');
        });
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('open');
            });
        });
    }

    const accordionContainer = document.querySelector('.accordion-container');
    if (accordionContainer) {
        accordionContainer.addEventListener('click', (event) => {
            const header = event.target.closest('.accordion-header');
            if (header) {
                const content = header.nextElementSibling;
                const icon = header.querySelector('.accordion-icon');

                document.querySelectorAll('.accordion-content.active').forEach(item => {
                    if (item !== content) {
                        item.classList.remove('active');
                        item.previousElementSibling.querySelector('.accordion-icon').textContent = '+';
                    }
                });

                content.classList.toggle('active');
                icon.textContent = content.classList.contains('active') ? '-' : '+';
            }
        });

        if (window.location.hash) {
            const targetId = window.location.hash.substring(1);
            const targetContent = document.getElementById(targetId + '-content');
            if (targetContent) {
                targetContent.classList.add('active');
                targetContent.previousElementSibling.querySelector('.accordion-icon').textContent = '-';
                targetContent.previousElementSibling.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }


    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;
            const messageEl = form.querySelector('#form-submission-message, #upload-message');

            form.querySelectorAll('input[required], textarea[required], input[type="file"]').forEach(input => {
                const errorEl = document.getElementById(input.id + '-error');
                if (errorEl) errorEl.textContent = '';

                if (input.value.trim() === '' && input.type !== 'file') {
                    isValid = false;
                    if (errorEl) errorEl.textContent = 'Wajib diisi.';
                } else if (input.type === 'email' && !input.value.includes('@')) {
                    isValid = false;
                    if (errorEl) errorEl.textContent = 'Email tidak valid.';
                } else if (input.type === 'file' && (!input.files[0] || input.files[0].size > 2 * 1024 * 1024)) {
                    isValid = false;
                    if (errorEl) errorEl.textContent = 'Ukuran file terlalu besar atau tidak ada (maks 2MB).';
                }
            });

            if (messageEl) {
                if (isValid) {
                    messageEl.textContent = 'Berhasil!';
                    messageEl.style.color = 'green';
                    form.reset();
                } else {
                    messageEl.textContent = 'Harap perbaiki kesalahan.';
                    messageEl.style.color = 'red';
                }
                messageEl.classList.remove('hidden');
            }
        });
    });

    
    if (window.location.pathname.includes('news-detail.html')) {
        const articleId = getUrlParameter('id');
        const article = newsData[articleId];

        if (article) {
            document.getElementById('detail-title').textContent = article.title + " - Dunia Sihir Harry Potter";
            document.getElementById('detail-image').src = article.image;
            document.getElementById('detail-image').alt = article.title;
            document.getElementById('detail-author').textContent = "Penulis: " + article.author;
            document.getElementById('detail-date').textContent = "Tanggal: " + article.date;
            document.getElementById('detail-category').textContent = "Kategori: " + article.category;
            document.getElementById('detail-headline').textContent = article.title;
            document.getElementById('detail-content').innerHTML = article.content;
        } else {
            // Tangani kasus di mana artikel tidak ditemukan
            document.getElementById('detail-headline').textContent = "Artikel Tidak Ditemukan";
            document.getElementById('detail-content').innerHTML = "<p>Maaf, artikel yang Anda cari tidak dapat ditemukan.</p>";
            document.getElementById('detail-image').src = "castle.jpg";
        }
    } else if (window.location.pathname.includes('discover-detail.html')) {
        const sectionId = getUrlParameter('section');
        const section = discoverData[sectionId];

        if (section) {
            document.getElementById('discover-detail-title').textContent = section.title + " - Dunia Sihir Harry Potter";
            document.getElementById('discover-image').src = section.image;
            document.getElementById('discover-image').alt = section.title;
            document.getElementById('discover-headline').textContent = section.title;
            document.getElementById('discover-content').innerHTML = section.content;
        } else {

            document.getElementById('discover-headline').textContent = "Bagian Tidak Ditemukan";
            document.getElementById('discover-content').innerHTML = "<p>Maaf, bagian yang Anda cari tidak dapat ditemukan.</p>";
            document.getElementById('discover-image').src = "castle.jpg";
        }
    }
});
