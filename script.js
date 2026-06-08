let tokohAktif = "yudhistira";

const dataTokoh = {
  yudhistira: {
    nama: "Yudhistira",
    deskripsi:
      "Yudhistira adalah putra tertua Pandawa yang dikenal sebagai tokoh bijaksana, sabar, jujur, dan adil. Dalam pewayangan Jawa, Yudhistira digambarkan sebagai pemimpin yang mengutamakan kebenaran dan ketenangan dalam mengambil keputusan. Ia tidak mudah terbawa emosi serta selalu berusaha menyelesaikan masalah dengan cara yang damai.",
    filosofi:
      "Yudhistira melambangkan kejujuran, tanggung jawab, kesabaran, dan kepemimpinan yang adil. Tokoh ini mengajarkan bahwa seorang pemimpin harus mampu menjaga ucapan, menahan diri, serta mengambil keputusan berdasarkan kebenaran, bukan berdasarkan keinginan pribadi.",
    senjataNama: "Jamus Kalimasada",
    senjataDeskripsi:
      "Jamus Kalimasada adalah pusaka yang melekat dengan Yudhistira. Pusaka ini melambangkan kesucian, kebenaran, dan pegangan hidup yang kuat. Dalam pewayangan, Jamus Kalimasada sering dimaknai sebagai simbol keimanan, kebijaksanaan, dan kekuatan moral seorang pemimpin.",
    warna: "#4169E1",

    modelTokoh: "../assets/puntadewa.glb",
    modelSenjata: "../assets/jamuskalimasada.glb"
  },

  bima: {
    nama: "Bima / Werkudara",
    deskripsi:
      "Bima atau Werkudara adalah tokoh Pandawa kedua yang memiliki tubuh besar, kekuatan luar biasa, dan keberanian tinggi. Ia dikenal sebagai tokoh yang tegas, jujur, tidak suka basa-basi, dan selalu berani membela kebenaran. Walaupun terlihat keras, Bima memiliki hati yang tulus serta sangat setia kepada keluarga dan saudara-saudaranya.",
    filosofi:
      "Bima melambangkan keberanian, kekuatan, kejujuran, dan ketegasan. Tokoh ini mengajarkan bahwa kebenaran harus diperjuangkan dengan keberanian, tetapi tetap dilandasi niat yang baik dan ketulusan hati.",
    senjataNama: "Gada Rujakpolo",
    senjataDeskripsi:
      "Gada Rujakpolo adalah senjata pusaka milik Bima yang melambangkan kekuatan fisik, ketegasan, dan keberanian. Senjata ini menggambarkan karakter Bima yang kuat dalam menghadapi musuh serta tidak mudah menyerah ketika membela kebenaran.",
    warna: "#8B4513",

    modelTokoh: "../assets/werkudara.glb",
    modelSenjata: "../assets/gadarujakpolo.glb"
  },

  arjuna: {
    nama: "Arjuna",
    deskripsi:
      "Arjuna adalah Pandawa ketiga yang dikenal sebagai kesatria tampan, halus, cerdas, dan ahli dalam ilmu peperangan. Ia sangat mahir menggunakan senjata panah. Dalam banyak cerita, Arjuna digambarkan sebagai tokoh yang tenang, fokus, dan mampu mengendalikan diri ketika menghadapi berbagai ujian.",
    filosofi:
      "Arjuna melambangkan ketenangan, fokus, kecerdasan, dan pengendalian diri. Tokoh ini mengajarkan bahwa kemampuan besar harus diimbangi dengan kebijaksanaan, ketelitian, dan ketepatan dalam bertindak.",
    senjataNama: "Panah Pasopati",
    senjataDeskripsi:
      "Panah Pasopati adalah senjata pusaka milik Arjuna. Senjata ini melambangkan ketepatan, fokus, dan kemampuan seorang kesatria dalam menentukan arah perjuangan. Panah Pasopati menjadi simbol kecerdasan, konsentrasi, dan keteguhan hati.",
    warna: "#2E8B57",

    modelTokoh: "../assets/janoko.glb",
    modelSenjata: "../assets/pasopati.glb"
  },

  nakula: {
    nama: "Nakula",
    deskripsi:
      "Nakula adalah salah satu Pandawa kembar, saudara dari Sadewa. Ia dikenal memiliki paras rupawan, sikap sopan, serta keahlian dalam merawat kuda dan memahami ilmu pengobatan. Nakula sering digambarkan sebagai tokoh yang tenang, setia, berbudi halus, dan memiliki kepribadian lembut.",
    filosofi:
      "Nakula melambangkan kesetiaan, ketulusan, keindahan budi, dan kemampuan menjaga keseimbangan. Tokoh ini mengajarkan bahwa kekuatan tidak selalu ditunjukkan melalui peperangan, tetapi juga melalui kesetiaan, ketenangan, dan sikap yang baik.",
    senjataNama: "Pedang Nakula",
    senjataDeskripsi:
      "Pedang Nakula melambangkan kehormatan, ketangkasan, dan kesiapan dalam menjaga kebenaran. Senjata ini menggambarkan pribadi Nakula yang lembut, tetapi tetap memiliki keberanian saat harus bertindak.",
    warna: "#9370DB",

    modelTokoh: "../assets/nakula.glb",
    modelSenjata: "../assets/pedang.glb"
  },

  sadewa: {
    nama: "Sadewa",
    deskripsi:
      "Sadewa adalah saudara kembar Nakula dan merupakan Pandawa termuda. Ia dikenal sebagai tokoh yang cerdas, teliti, bijaksana, dan memiliki kemampuan memahami tanda-tanda kehidupan. Sadewa sering digambarkan sebagai pribadi yang pendiam, tetapi memiliki pengetahuan yang dalam.",
    filosofi:
      "Sadewa melambangkan kecerdasan, ketelitian, kebijaksanaan, dan kemampuan berpikir mendalam. Tokoh ini mengajarkan bahwa sikap tenang dan tidak banyak bicara bukan berarti lemah, karena pengetahuan dan kebijaksanaan sering lahir dari ketenangan.",
    senjataNama: "Pedang Sadewa",
    senjataDeskripsi:
      "Pedang Sadewa melambangkan kecerdasan, ketelitian, dan keberanian dalam mengambil keputusan. Senjata ini menggambarkan karakter Sadewa yang tenang, cermat, dan mampu bertindak tepat dalam situasi penting.",
    warna: "#B8860B",
    
    modelTokoh: "../assets/sadewa.glb",
    modelSenjata: "../assets/pedang.glb"
  }
};

function bukaDetailTokoh(id) {
  tokohAktif = id;
  const tokoh = dataTokoh[id];
  const tokohApp = document.getElementById("tokohApp");

  if (!tokohApp) return;

  tokohApp.innerHTML = `
    <section class="page">
      <div class="detail-box">
        <button onclick="kembaliKeDaftarTokoh()" class="back-btn">← Back</button>

        <h3>${tokoh.nama}</h3>

        <h4>Keterangan Tokoh</h4>
        <p>${tokoh.deskripsi}</p>

        <h4>Filosofi Tokoh</h4>
        <p>${tokoh.filosofi}</p>

        <div class="button-group">
          <button onclick="bukaARTokoh()" class="btn">AR Kamera Tokoh</button>
          <button onclick="bukaHalamanSenjata()" class="btn secondary">Senjata Pusaka</button>
        </div>
      </div>
    </section>
  `;

  window.scrollTo(0, 0);
}

function kembaliKeDaftarTokoh() {
  const tokohApp = document.getElementById("tokohApp");

  if (!tokohApp) return;

  tokohApp.innerHTML = `
    <section class="page">
      <h2>Tokoh Wayang Pandawa</h2>

      <p class="section-desc">
        Pilih salah satu tokoh Pandawa untuk melihat keterangan tokoh, filosofi,
        fitur AR kamera tokoh, dan halaman senjata pusaka.
      </p>

      <div class="tokoh-grid">
        <button onclick="bukaDetailTokoh('yudhistira')" class="tokoh-card">Yudhistira</button>
        <button onclick="bukaDetailTokoh('bima')" class="tokoh-card">Bima</button>
        <button onclick="bukaDetailTokoh('arjuna')" class="tokoh-card">Arjuna</button>
        <button onclick="bukaDetailTokoh('nakula')" class="tokoh-card">Nakula</button>
        <button onclick="bukaDetailTokoh('sadewa')" class="tokoh-card">Sadewa</button>
      </div>
    </section>
  `;

  window.scrollTo(0, 0);
}

function bukaHalamanSenjata() {
  const tokoh = dataTokoh[tokohAktif];
  const tokohApp = document.getElementById("tokohApp");

  if (!tokohApp) return;

  tokohApp.innerHTML = `
    <section class="page">
      <div class="detail-box">
        <button onclick="bukaDetailTokoh('${tokohAktif}')" class="back-btn">← Back</button>

        <h3>${tokoh.senjataNama}</h3>

        <h4>Senjata Pusaka ${tokoh.nama}</h4>
        <p>${tokoh.senjataDeskripsi}</p>

        <div class="button-group">
          <button onclick="bukaARSenjata()" class="btn">AR Kamera Senjata</button>
        </div>
      </div>
    </section>
  `;

  window.scrollTo(0, 0);
}
function bukaARTokoh() {
  const tokoh = dataTokoh[tokohAktif];

  window.location.href =
    "ar.html?mode=tokoh&nama=" + encodeURIComponent(tokoh.nama);
}

function bukaARSenjata() {
  const tokoh = dataTokoh[tokohAktif];

  window.location.href =
    "ar.html?mode=senjata&nama=" + encodeURIComponent(tokoh.senjataNama);
}