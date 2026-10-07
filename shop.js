/*
  ==========================================================
  KONFIGURASI TOKO — GANTI DATA DI BAGIAN INI
  ==========================================================
  Gunakan nomor WhatsApp format internasional TANPA + dan 0.
  Contoh nomor Indonesia 081234567890 => 6281234567890
*/
const STORE = {
  whatsapp: "6285782329752",              // GANTI dengan WhatsApp PENJUAL
  qrisName: "NEXORA TOPUP",               // Nama pada QRIS
  dana: "085782329752",                   // GANTI nomor DANA penjual
  ovo: "085782329752",                    // GANTI nomor OVO penjual
  gopay: "085782329752",                  // GANTI nomor GoPay penjual
  bank: {
    SeaBank: "901677993939",
    Jago: "106994616152",

  },
  bankOwner: "NEXORA TOPUP",              // Nama pemilik rekening
  qrisImage: ""                            // Opsional: URL/path gambar QRIS, contoh "qris.png"
};

/*
  CATATAN PENTING:
  Browser tidak dconst STORE = {
  whatsapp: "6285782329752",              // GANTI dengan WhatsApp PENJUAL
  qrisName: "NEXORA TOPUP",               // Nama pada QRIS
  dana: "085782329752",                   // GANTI nomor DANA penjual
  ovo: "085782329752",                    // GANTI nomor OVO penjual
  gopay: "085782329752",                  // GANTI nomor GoPay penjual
  bank: {
    SeaBank: "901677993939",
    Jago: "106994616152",apat mengirim file bukti transfer secara otomatis
  ke WhatsApp menggunakan wa.me. File tetap harus dipilih oleh pembeli,
  kemudian setelah WhatsApp terbuka pembeli mengirim gambar/file tersebut
  secara manual. Nama file bukti akan dimasukkan ke pesan WhatsApp.
*/

const PRODUCTS = [
  {id:1,name:"Dana",detail:"Saldo Rp10.000",cat:"ewallet",logo:"D",price:12000,badge:"",need:"Nomor Dana"},
  {id:2,name:"Dana",detail:"Saldo Rp15.000",cat:"ewallet",logo:"D",price:17000,badge:"",need:"Nomor Dana"},
  {id:3,name:"Dana",detail:"Saldo Rp20.000",cat:"ewallet",logo:"D",price:22000,badge:"",need:"Nomor Dana"},
  {id:4,name:"Dana",detail:"Saldo Rp25.000",cat:"ewallet",logo:"DS",price:27000,badge:"",need:"Nomor Dana"},
  {id:5,name:"Dana",detail:"Saldo Rp30.000",cat:"ewallet",logo:"D",price:32000,badge:"",need:"Nomor Dana"},
  {id:6,name:"Dana",detail:"Saldo Rp35.000",cat:"ewallet",logo:"D",price:35000,badge:"",need:"Nomor Dana"},
  {id:7,name:"Dana",detail:"Saldo Rp40.000",cat:"ewallet",logo:"D",price:42000,badge:"",need:"Nomor Dana"},
  {id:8,name:"Dana",detail:"Saldo Rp45.000",cat:"ewallet",logo:"D",price:45000,badge:"",need:"Nomor Dana"},
  {id:9,name:"Dana",detail:"Saldo Rp50.000",cat:"ewallet",logo:"D",price:52000,badge:"TERLARIS",need:"Nomor Dana"},
  {id:10,name:"Dana",detail:"Saldo Rp55.000",cat:"ewallet",logo:"D",price:57000,badge:"",need:"Nomor Dana"},
  {id:11,name:"Dana",detail:"Saldo Rp60.000",cat:"ewallet",logo:"D",price:62000,badge:"",need:"Nomor Dana"},
  {id:12,name:"Dana",detail:"Saldo Rp65.000",cat:"ewallet",logo:"D",price:67000,badge:"",need:"Nomor Dana"},
  {id:13,name:"Dana",detail:"Saldo Rp70.000",cat:"ewallet",logo:"D",price:72000,badge:"",need:"Nomor Dana"},
  {id:14,name:"Dana",detail:"Saldo Rp75.000",cat:"ewallet",logo:"D",price:77000,badge:"",need:"Nomor Dana"},
  {id:15,name:"Dana",detail:"Saldo Rp80.000",cat:"ewallet",logo:"D",price:82000,badge:"",need:"Nomor Dana"},
  {id:16,name:"Dana",detail:"Saldo Rp85.000",cat:"ewallet",logo:"D",price:87000,badge:"",need:"Nomor Dana"},
  {id:17,name:"Dana",detail:"Saldo Rp90.000",cat:"ewallet",logo:"D",price:92000,badge:"",need:"Nomor Dana"},
  {id:18,name:"Dana",detail:"Saldo Rp95.000",cat:"ewallet",logo:"D",price:97000,badge:"",need:"Nomor Dana"},
  {id:19,name:"Dana",detail:"Saldo Rp100.000",cat:"ewallet",logo:"D",price:103000,badge:"",need:"Nomor Dana"},
  {id:20,name:"Dana",detail:"Saldo Rp200.000",cat:"ewallet",logo:"D",price:203500,badge:"HOT",need:"Nomor Dana"},
  {id:21,name:"Dana",detail:"Saldo Rp300.000",cat:"ewallet",logo:"D",price:304000,badge:"",need:"Nomor Dana"},
  {id:22,name:"Dana",detail:"Saldo Rp400.000",cat:"ewallet",logo:"D",price:404500,badge:"",need:"Nomor Dana"},
  {id:23,name:"Dana",detail:"Saldo Rp500.000",cat:"ewallet",logo:"D",price:505000,badge:"",need:"Nomor Dana"},
  {id:24,name:"Dana",detail:"Saldo Rp600.000",cat:"ewallet",logo:"D",price:605500,badge:"",need:"Nomor Dana"},
  {id:25,name:"Dana",detail:"Saldo Rp700.000",cat:"ewallet",logo:"D",price:706000,badge:"",need:"Nomor Dana"},
  {id:26,name:"Dana",detail:"Saldo Rp800.000",cat:"ewallet",logo:"D",price:806500,badge:"",need:"Nomor Dana"},
  {id:27,name:"Dana",detail:"Saldo Rp900.000",cat:"ewallet",logo:"D",price:909700,badge:"",need:"Nomor Dana"},
  {id:28,name:"Dana",detail:"Saldo Rp1.000.000",cat:"ewallet",logo:"D",price:1010000,badge:"",need:"Nomor Dana"},

  
  
  {id:29,name:"ShopeePay",detail:"Saldo Rp10.000",cat:"ewallet",logo:"S",price:12000,badge:"",need:"Nomor ShopeePay"},
  {id:30,name:"ShopeePay",detail:"Saldo Rp15.000",cat:"ewallet",logo:"S",price:17000,badge:"",need:"Nomor ShopeePay"},
  {id:31,name:"ShopeePay",detail:"Saldo Rp20.000",cat:"ewallet",logo:"S",price:22000,badge:"",need:"Nomor ShopeePay"},
  {id:32,name:"ShopeePay",detail:"Saldo Rp25.000",cat:"ewallet",logo:"S",price:27000,badge:"HOT",need:"Nomor ShopeePay"},
  {id:33,name:"ShopeePay",detail:"Saldo Rp30.000",cat:"ewallet",logo:"S",price:32000,badge:"",need:"Nomor ShopeePay"},
  {id:34,name:"ShopeePay",detail:"Saldo Rp35.000",cat:"ewallet",logo:"S",price:35000,badge:"",need:"Nomor ShopeePay"},
  {id:35,name:"ShopeePay",detail:"Saldo Rp40.000",cat:"ewallet",logo:"S",price:42000,badge:"",need:"Nomor ShopeePay"},
  {id:36,name:"ShopeePay",detail:"Saldo Rp45.000",cat:"ewallet",logo:"S",price:45000,badge:"",need:"Nomor ShopeePay"},
  {id:37,name:"ShopeePay",detail:"Saldo Rp50.000",cat:"ewallet",logo:"S",price:52000,badge:"",need:"Nomor ShopeePay"},
  {id:38,name:"ShopeePay",detail:"Saldo Rp55.000",cat:"ewallet",logo:"S",price:57000,badge:"",need:"Nomor ShopeePay"},
  {id:39,name:"ShopeePay",detail:"Saldo Rp60.000",cat:"ewallet",logo:"S",price:62000,badge:"",need:"Nomor ShopeePay"},
  {id:40,name:"ShopeePay",detail:"Saldo Rp65.000",cat:"ewallet",logo:"S",price:67000,badge:"",need:"Nomor ShopeePay"},
  {id:41,name:"ShopeePay",detail:"Saldo Rp70.000",cat:"ewallet",logo:"S",price:72000,badge:"HOT",need:"Nomor ShopeePay"},
  {id:42,name:"ShopeePay",detail:"Saldo Rp75.000",cat:"ewallet",logo:"S",price:77000,badge:"",need:"Nomor ShopeePay"},
  {id:43,name:"ShopeePay",detail:"Saldo Rp80.000",cat:"ewallet",logo:"S",price:82000,badge:"",need:"Nomor ShopeePay"},
  {id:44,name:"ShopeePay",detail:"Saldo Rp85.000",cat:"ewallet",logo:"S",price:87000,badge:"",need:"Nomor ShopeePay"},
  {id:45,name:"ShopeePay",detail:"Saldo Rp90.000",cat:"ewallet",logo:"S",price:92000,badge:"",need:"Nomor ShopeePay"},
  {id:46,name:"ShopeePay",detail:"Saldo Rp95.000",cat:"ewallet",logo:"S",price:97000,badge:"",need:"Nomor ShopeePay"},
  {id:47,name:"ShopeePay",detail:"Saldo Rp100.000",cat:"ewallet",logo:"S",price:103000,badge:"",need:"Nomor ShopeePay"},
  {id:48,name:"ShopeePay",detail:"Saldo Rp200.000",cat:"ewallet",logo:"S",price:203500,badge:"",need:"Nomor ShopeePay"},
  {id:49,name:"ShopeePay",detail:"Saldo Rp300.000",cat:"ewallet",logo:"S",price:304000,badge:"",need:"Nomor ShopeePay"},
  {id:50,name:"ShopeePay",detail:"Saldo Rp400.000",cat:"ewallet",logo:"S",price:404500,badge:"",need:"Nomor ShopeePay"},
  {id:51,name:"ShopeePay",detail:"Saldo Rp500.000",cat:"ewallet",logo:"S",price:505000,badge:"",need:"Nomor ShopeePay"},
  {id:52,name:"ShopeePay",detail:"Saldo Rp600.000",cat:"ewallet",logo:"S",price:605500,badge:"",need:"Nomor ShopeePay"},
  {id:53,name:"ShopeePay",detail:"Saldo Rp700.000",cat:"ewallet",logo:"S",price:706000,badge:"HOT",need:"Nomor ShopeePay"},
  {id:54,name:"ShopeePay",detail:"Saldo Rp800.000",cat:"ewallet",logo:"S",price:806500,badge:"",need:"Nomor ShopeePay"},
  {id:55,name:"ShopeePay",detail:"Saldo Rp900.000",cat:"ewallet",logo:"S",price:909700,badge:"",need:"Nomor ShopeePay"},
  {id:56,name:"ShopeePay",detail:"Saldo Rp1.000.000",cat:"ewallet",logo:"S",price:1010000,badge:"",need:"Nomor ShopeePay"},

  {id:57,name:"Ovo",detail:"Saldo Rp10.000",cat:"ewallet",logo:"O",price:12500,badge:"",need:"Nomor Ovo"},
  {id:58,name:"Ovo",detail:"Saldo Rp20.000",cat:"ewallet",logo:"O",price:22500,badge:"",need:"Nomor Ovo"},
  {id:59,name:"Ovo",detail:"Saldo Rp25.000",cat:"ewallet",logo:"O",price:27500,badge:"",need:"Nomor Ovo"},
  {id:60,name:"Ovo",detail:"Saldo Rp30.000",cat:"ewallet",logo:"O",price:32500,badge:"",need:"Nomor Ovo"},
  {id:61,name:"Ovo",detail:"Saldo Rp35.000",cat:"ewallet",logo:"O",price:35500,badge:"",need:"Nomor Ovo"},
  {id:62,name:"Ovo",detail:"Saldo Rp40.000",cat:"ewallet",logo:"O",price:42500,badge:"",need:"Nomor Ovo"},
  {id:63,name:"Ovo",detail:"Saldo Rp45.000",cat:"ewallet",logo:"O",price:47500,badge:"",need:"Nomor Ovo"},
  {id:64,name:"Ovo",detail:"Saldo Rp50.000",cat:"ewallet",logo:"O",price:52500,badge:"",need:"Nomor Ovo"},
  {id:65,name:"Ovo",detail:"Saldo Rp55.000",cat:"ewallet",logo:"O",price:57500,badge:"",need:"Nomor Ovo"},
  {id:66,name:"Ovo",detail:"Saldo Rp60.000",cat:"ewallet",logo:"O",price:62500,badge:"",need:"Nomor Ovo"},
  {id:67,name:"Ovo",detail:"Saldo Rp65.000",cat:"ewallet",logo:"O",price:67500,badge:"",need:"Nomor Ovo"},
  {id:68,name:"Ovo",detail:"Saldo Rp70.000",cat:"ewallet",logo:"O",price:72500,badge:"",need:"Nomor Ovo"},
  {id:69,name:"Ovo",detail:"Saldo Rp75.000",cat:"ewallet",logo:"O",price:77500,badge:"",need:"Nomor Ovo"},
  {id:70,name:"Ovo",detail:"Saldo Rp80.000",cat:"ewallet",logo:"O",price:82500,badge:"",need:"Nomor Ovo"},
  {id:71,name:"Ovo",detail:"Saldo Rp85.000",cat:"ewallet",logo:"O",price:87500,badge:"",need:"Nomor Ovo"},
  {id:72,name:"Ovo",detail:"Saldo Rp90.000",cat:"ewallet",logo:"O",price:92500,badge:"",need:"Nomor Ovo"},
  {id:73,name:"Ovo",detail:"Saldo Rp95.000",cat:"ewallet",logo:"O",price:97500,badge:"",need:"Nomor Ovo"},
  {id:74,name:"Ovo",detail:"Saldo Rp100.000",cat:"ewallet",logo:"O",price:103000,badge:"",need:"Nomor Ovo"},
  {id:75,name:"Ovo",detail:"Saldo Rp200.000",cat:"ewallet",logo:"O",price:203500,badge:"",need:"Nomor Ovo"},
  {id:76,name:"Ovo",detail:"Saldo Rp300.000",cat:"ewallet",logo:"O",price:304000,badge:"",need:"Nomor Ovo"},
  {id:77,name:"Ovo",detail:"Saldo Rp400.000",cat:"ewallet",logo:"O",price:404500,badge:"",need:"Nomor Ovo"},
  {id:78,name:"Ovo",detail:"Saldo Rp500.000",cat:"ewallet",logo:"O",price:505000,badge:"",need:"Nomor Ovo"},
  {id:79,name:"Ovo",detail:"Saldo Rp600.000",cat:"ewallet",logo:"O",price:605500,badge:"",need:"Nomor Ovo"},
  {id:80,name:"Ovo",detail:"Saldo Rp700.000",cat:"ewallet",logo:"O",price:706000,badge:"",need:"Nomor Ovo"},
  {id:81,name:"Ovo",detail:"Saldo Rp800.000",cat:"ewallet",logo:"O",price:806500,badge:"",need:"Nomor Ovo"},
  {id:82,name:"Ovo",detail:"Saldo Rp900.000",cat:"ewallet",logo:"O",price:909700,badge:"",need:"Nomor Ovo"},
  {id:83,name:"Ovo",detail:"Saldo Rp1.000.000",cat:"ewallet",logo:"O",price:1010000,badge:"",need:"Nomor Ovo"},
  
  {id:84,name:"Indosat",detail:"Pulsa Rp5.000",cat:"pulsa",logo:"I",price:7500,badge:"",need:"Nomor HP"},
    {id:85,name:"Indosat",detail:"Pulsa Rp10.000",cat:"pulsa",logo:"I",price:12500,badge:"",need:"Nomor HP"},
  {id:86,name:"Indosat",detail:"Pulsa Rp15.000",cat:"pulsa",logo:"I",price:17500,badge:"",need:"Nomor HP"},
  {id:87,name:"Indosat",detail:"Pulsa Rp20.000",cat:"pulsa",logo:"I",price:22500,badge:"",need:"Nomor HP"},
    {id:88,name:"Indosat",detail:"Pulsa Rp25.000",cat:"pulsa",logo:"I",price:2750,badge:"",need:"Nomor HP"},
  {id:89,name:"Indosat",detail:"Pulsa Rp30.000",cat:"pulsa",logo:"I",price:32500,badge:"",need:"Nomor HP"},
  {id:90,name:"Indosat",detail:"Pulsa Rp35.000",cat:"pulsa",logo:"I",price:37500,badge:"",need:"Nomor HP"},
    {id:91,name:"Indosat",detail:"Pulsa Rp40.000",cat:"pulsa",logo:"I",price:42500,badge:"",need:"Nomor HP"},
  {id:92,name:"Indosat",detail:"Pulsa Rp45.000",cat:"pulsa",logo:"I",price:47500,badge:"",need:"Nomor HP"},
  {id:93,name:"Indosat",detail:"Pulsa Rp50.000",cat:"pulsa",logo:"I",price:52500,badge:"",need:"Nomor HP"},
    {id:94,name:"Indosat",detail:"Pulsa Rp55.000",cat:"pulsa",logo:"I",price:57500,badge:"",need:"Nomor HP"},
  {id:95,name:"Indosat",detail:"Pulsa Rp60.000",cat:"pulsa",logo:"I",price:62500,badge:"",need:"Nomor HP"},
{id:96,name:"Indosat",detail:"Pulsa Rp65.000",cat:"pulsa",logo:"I",price:67500,badge:"",need:"Nomor HP"},
    {id:97,name:"Indosat",detail:"Pulsa Rp70.000",cat:"pulsa",logo:"I",price:73000,badge:"",need:"Nomor HP"},
  {id:98,name:"Indosat",detail:"Pulsa Rp75.000",cat:"pulsa",logo:"I",price:78000,badge:"",need:"Nomor HP"},
  {id:99,name:"Indosat",detail:"Pulsa Rp80.000",cat:"pulsa",logo:"I",price:83000,badge:"",need:"Nomor HP"},
    {id:100,name:"Indosat",detail:"Pulsa Rp85.000",cat:"pulsa",logo:"I",price:88000,badge:"",need:"Nomor HP"},
  {id:101,name:"Indosat",detail:"Pulsa Rp90.000",cat:"pulsa",logo:"I",price:93000,badge:"",need:"Nomor HP"},
   {id:102,name:"Indosat",detail:"Pulsa Rp95.000",cat:"pulsa",logo:"I",price:9800,badge:"",need:"Nomor HP"},
  {id:103,name:"Indosat",detail:"Pulsa Rp100.000",cat:"pulsa",logo:"I",price:10300,badge:"",need:"Nomor HP"},

  {id:104,name:"Token PLN",detail:"Token Rp20.000",cat:"listrik",logo:"ϟ",price:23500,badge:"",need:"Nomor Meter / IDPEL"},
  {id:105,name:"Token PLN",detail:"Token Rp50.000",cat:"listrik",logo:"ϟ",price:53500,badge:"",need:"Nomor Meter / IDPEL"},
    {id:106,name:"Token PLN",detail:"Token Rp100.000",cat:"listrik",logo:"ϟ",price:104500,badge:"HOT",need:"Nomor Meter / IDPEL"},
  {id:107,name:"Token PLN",detail:"Token Rp200.000",cat:"listrik",logo:"ϟ",price:204500,badge:"",need:"Nomor Meter / IDPEL"},
  {id:108,name:"Token PLN",detail:"Token Rp500.000",cat:"listrik",logo:"ϟ",price:505500,badge:"",need:"Nomor Meter / IDPEL"},
  {id:109,name:"Token PLN",detail:"Token Rp1.000.000",cat:"listrik",logo:"ϟ",price:1010500,badge:"",need:"Nomor Meter / IDPEL"},
  {id:110,name:"Token PLN",detail:"Token Rp5.000.000",cat:"listrik",logo:"ϟ",price:5010500,badge:"",need:"Nomor Meter / IDPEL"},
  {id:111,name:"Token PLN",detail:"Token Rp10.000.000",cat:"listrik",logo:"ϟ",price:10015500,badge:"HOT",need:"Nomor Meter / IDPEL"},

  {id:112,name:"Google Play",detail:"Saldo Rp5.000",cat:"voucher",logo:"G",price:8600,badge:"",need:"Voucher Di Whatsapp"},
  {id:113,name:"Google Play",detail:"Saldo Rp10.000",cat:"voucher",logo:"G",price:14400,badge:"",need:"Voucher Di Whatsapp"},
  {id:114,name:"Google Play",detail:"Saldo Rp16.000",cat:"voucher",logo:"G",price:20400,badge:"",need:"Voucher Di Whatsapp"},
  {id:115,name:"Google Play",detail:"Saldo Rp20.000",cat:"voucher",logo:"G",price:24400,badge:"",need:"Voucher Di Whatsapp"},
  {id:116,name:"Google Play",detail:"Saldo Rp25.000",cat:"voucher",logo:"G",price:29500,badge:"",need:"Voucher Di Whatsapp"},
  {id:117,name:"Google Play",detail:"Saldo Rp49.000",cat:"voucher",logo:"G",price:53650,badge:"",need:"Voucher Di Whatsapp"},
  {id:118,name:"Google Play",detail:"Saldo Rp65.000",cat:"voucher",logo:"G",price:69550,badge:"",need:"Voucher Di Whatsapp"},
  {id:119,name:"Google Play",detail:"Saldo Rp79.000",cat:"voucher",logo:"G",price:84500,badge:"",need:"Voucher Di Whatsapp"},
  {id:120,name:"Google Play",detail:"Saldo Rp100.000",cat:"voucher",logo:"G",price:105000,badge:"",need:"Voucher Di Whatsapp"},
  {id:121,name:"Google Play",detail:"Saldo Rp129.000",cat:"voucher",logo:"G",price:133400,badge:"",need:"Voucher Di Whatsapp"},
  {id:122,name:"Google Play",detail:"Saldo Rp150.000",cat:"voucher",logo:"G",price:155000,badge:"",need:"Voucher Di Whatsapp"},
  {id:123,name:"Google Play",detail:"Saldo Rp159.000",cat:"voucher",logo:"G",price:168760,badge:"",need:"Voucher Di Whatsapp"},
  {id:124,name:"Google Play",detail:"Saldo Rp1.599.000",cat:"voucher",logo:"G",price:1635870,badge:"",need:"Voucher Di Whatsapp"},
 
{id:125,name:"Robux Gift Card",detail:" 100 Robux",cat:"voucher",logo:"R",price:33250,badge:"",need:"Voucher Di Whatsapp"},
  {id:126,name:"Robux Gift Card",detail:" 200 Robux",cat:"voucher",logo:"R",price:50200,badge:"",need:"Voucher Di Whatsapp"},
  {id:127,name:"Robux Gift Card",detail:" 300 Robux",cat:"voucher",logo:"R",price:66400,badge:"",need:"Voucher Di Whatsapp"},
  {id:128,name:"Robux Gift Card",detail:" 400 Robux",cat:"voucher",logo:"R",price:89900,badge:"",need:"Voucher Di Whatsapp"},
  {id:129,name:"Robux Gift Card",detail:" 1000 Robux",cat:"voucher",logo:"R",price:176700,badge:"",need:"Voucher Di Whatsapp"},
  {id:130,name:"Robux Gift Card",detail:" 1600 Robux",cat:"voucher",logo:"R",price:273758,badge:"",need:"Voucher Di Whatsapp"},
  {id:131,name:"Robux Gift Card",detail:" 2000 Robux",cat:"voucher",logo:"R",price:355250,badge:"",need:"Voucher Di Whatsapp"},
  {id:132,name:"Robux Gift Card",detail:" 2700 Robux",cat:"voucher",logo:"R",price:468500,badge:"",need:"Voucher Di Whatsapp"},
  {id:133,name:"Robux Gift Card",detail:" 3600 Robux",cat:"voucher",logo:"R",price:610000,badge:"",need:"Voucher Di Whatsapp"},
  {id:134,name:"Robux Gift Card",detail:" 5250  Robux",cat:"voucher",logo:"R",price:910000,badge:"",need:"Voucher Di Whatsapp"},
  {id:135,name:"Robux Gift Card",detail:" 10000 Robux",cat:"voucher",logo:"R",price:1769587,badge:"",need:"Voucher Di Whatsapp"},
  
  {id:136,name:"Voucher Point Blank",detail:"PB Cash 1200 ",cat:"voucher",logo:"P",price:12150,badge:"",need:"Voucher Di Whatsapp"},
  {id:137,name:"Voucher Point Blank",detail:"PB Cash 2400 ",cat:"voucher",logo:"P",price:23200,badge:"",need:"Voucher Di Whatsapp"},
  {id:138,name:"Voucher Point Blank",detail:"PB Cash 6000 ",cat:"voucher",logo:"P",price:52400,badge:"",need:"Voucher Di Whatsapp"},
  {id:139,name:"Voucher Point Blank",detail:"PB Cash 12000 ",cat:"voucher",logo:"P",price:98600,badge:"",need:"Voucher Di Whatsapp"},
  {id:140,name:"Voucher Point Blank",detail:"PB Cash 24000 ",cat:"voucher",logo:"P",price:192700,badge:"",need:"Voucher Di Whatsapp"},
  {id:141,name:"Voucher Point Blank",detail:"SP Cash 36000 ",cat:"voucher",logo:"P",price:284758,badge:"",need:"Voucher Di Whatsapp"},
  {id:142,name:"Voucher Point Blank",detail:"PB Cash 60000 ",cat:"voucher",logo:"P",price:475250,badge:"",need:"Voucher Di Whatsapp"},
  
  {id:143,name:"Mobile Legend",detail:"Mobile Legend Starlight Membership plus (750 Diamond) ",cat:"game",logo:"M",price:220500,badge:"",need:"ID / SERVER"},
  {id:144,name:"Mobile Legend",detail:"Mobile Legend Twilight Pass ",cat:"game",logo:"M",price:171000,badge:"",need:"ID / SERVER"},
  {id:145,name:"Mobile Legend",detail:"Mobile Legend Starlight (1411 Diamond) ",cat:"game",logo:"M",price:497000,badge:"",need:"ID / SERVER"},
 
   {id:146,name:"Spotify",detail:"Premium 1 Bulan ",cat:"streaming",logo:"S",price:41000,badge:"",need:"Nama Dan Email Spotify Kamu"},

    {id:147,name:"Youtube",detail:"Youtube Premium 1 Bulan ",cat:"streaming",logo:"Y",price:32000,badge:"",need:"Email Youtube Kamu"},

      {id:148,name:"Canva",detail:"Canva Premium 1 Bulan, Upgrade Canva-mu agar desain jadi lebih profesional 🖌 Ada jutaan elemen, template, desain, dan foto premium🖌 Bisa hapus background🖌 Bisa ubah ukuran desain🖌 Bukan aplikasi mod  ",cat:"aplikasi&software",logo:"C",price:19000,badge:"",need:"Email Canva Kamu"},

      {id:149,name:"Discord",detail:"1 Month Nitro Basic ",cat:"aplikasi&software",logo:"D",price:51200,badge:"",need:"Discord ID Kamu"},


];

const state={filter:"all",search:"",cart:[],payment:"QRIS"};
const $=s=>document.querySelector(s);
const rupiah=n=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(n);
function toast(msg){$("#toast").textContent=msg;$("#toast").classList.add("show");clearTimeout(window.tt);window.tt=setTimeout(()=>$("#toast").classList.remove("show"),2400)}
function render(){
  const list=PRODUCTS.filter(p=>(state.filter==="all"||p.cat===state.filter)&&(p.name+" "+p.detail).toLowerCase().includes(state.search.toLowerCase()));
  $("#productGrid").innerHTML=list.map(p=>`
    <article class="product">
      <div class="product-art">${p.badge?`<span class="badge">${p.badge}</span>`:""}<div class="logo">${p.logo}</div></div>
      <div class="product-body"><h3>${p.name}</h3><p>${p.detail}</p><div class="price-line"><b>${rupiah(p.price)}</b><button class="add" data-add="${p.id}">+</button></div></div>
    </article>`).join("");
  $("#empty").style.display=list.length?"none":"block";
}
function renderCart(){
  $("#cartCount").textContent=state.cart.length;
  $("#cartList").innerHTML=state.cart.length?state.cart.map((p,i)=>`
    <div class="drawer-item"><div><h4>${p.name}</h4><p>${p.detail}</p><button class="remove" data-remove="${i}">Hapus</button></div><b>${rupiah(p.price)}</b></div>`).join(""):`<div style="padding:50px 0;text-align:center;color:var(--muted);font-size:11px">Keranjang masih kosong.</div>`;
  $("#cartTotal").textContent=rupiah(state.cart.reduce((a,p)=>a+p.price,0));
}
function add(id){const p=PRODUCTS.find(x=>x.id===id);state.cart.push(p);renderCart();toast(`${p.name} ${p.detail} ditambahkan`)}
function total(){return state.cart.reduce((a,p)=>a+p.price,0)}
function paymentInfo(){
  if(state.payment==="QRIS") return `<strong>QRIS — ${STORE.qrisName}</strong>Scan QRIS milik penjual lalu transfer tepat <b>${rupiah(total())}</b>.`;
  if(state.payment==="E-WALLET") return `<strong>E-WALLET</strong>DANA: ${STORE.dana}<br>OVO: ${STORE.ovo}<br>GoPay: ${STORE.gopay}<br><b>Transfer tepat ${rupiah(total())}</b>.`;
  return `<strong>BANK TRANSFER</strong>BCA: ${STORE.bank.BCA}<br>BRI: ${STORE.bank.BRI}<br>Mandiri: ${STORE.bank.MANDIRI}<br>BNI: ${STORE.bank.BNI}<br>a.n. ${STORE.bankOwner}<br><b>Transfer tepat ${rupiah(total())}</b>.`;
}
function checkout(){
  if(!state.cart.length){toast("Tambahkan produk terlebih dahulu.");return}
  const first=state.cart[0];
  $("#checkoutContent").innerHTML=`
    <label class="section-title" style="color:var(--lime);font-size:10px;font-weight:800;letter-spacing:2px">DATA PESANAN</label>
    <h2>Lengkapi data pembeli</h2>
    <p class="sub">Data ini akan otomatis dimasukkan ke pesan WhatsApp penjual.</p>
    <div class="order-summary">${state.cart.map(p=>`<div class="sum-row"><span>${p.name} — ${p.detail}</span><b>${rupiah(p.price)}</b></div>`).join("")}<div class="sum-row total"><span>TOTAL</span><b>${rupiah(total())}</b></div></div>
    <div class="two-col">
      <div class="field"><label>NAMA PEMBELI *</label><input id="buyerName" placeholder="Nama lengkap"></div>
      <div class="field"><label>NOMOR WHATSAPP PEMBELI *</label><input id="buyerPhone" type="tel" placeholder="08xxxxxxxxxx"></div>
    </div>
    <div class="field"><label>GMAIL PEMBELI *</label><input id="buyerEmail" type="email" placeholder="nama@gmail.com"></div>
    <div class="field"><label>DETAIL TUJUAN TOP UP *</label><input id="target" placeholder="${first.need}"></div>
    <div class="field"><label>METODE PEMBAYARAN *</label>
      <div class="payment-choice">
        <button class="pay-method ${state.payment==="QRIS"?"active":""}" data-pay="QRIS">▦ QRIS</button>
        <button class="pay-method ${state.payment==="E-WALLET"?"active":""}" data-pay="E-WALLET">◉ E-Wallet</button>
        <button class="pay-method ${state.payment==="BANK"?"active":""}" data-pay="BANK">▤ Bank</button>
      </div>
      <div class="payment-info" id="paymentInfo">${paymentInfo()}</div>
    </div>
    <div class="field proof"><label>BUKTI TRANSFER *</label><input id="proof" type="file" accept="image/*,.pdf"><small style="display:block;color:var(--muted);font-size:9px;margin-top:4px">Pilih screenshot/foto bukti transfer. Setelah WhatsApp terbuka, lampirkan file tersebut secara manual.</small></div>
    <p class="notice">Dengan melanjutkan, pastikan nominal transfer sesuai. Jangan kirim bukti transfer palsu. WhatsApp akan dibuka dengan pesan order yang sudah disiapkan.</p>
    <button class="btn primary full" id="sendWA">Kirim Pesanan ke WhatsApp Penjual ↗</button>`;
  $("#modalBg").classList.add("show");
  document.querySelectorAll(".pay-method").forEach(b=>b.onclick=()=>{state.payment=b.dataset.pay;document.querySelectorAll(".pay-method").forEach(x=>x.classList.remove("active"));b.classList.add("active");$("#paymentInfo").innerHTML=paymentInfo()});
  $("#sendWA").onclick=sendWhatsApp;
}
function sendWhatsApp(){
  const name=$("#buyerName").value.trim(),phone=$("#buyerPhone").value.trim(),email=$("#buyerEmail").value.trim(),target=$("#target").value.trim(),proof=$("#proof").files[0];
  if(!name||!phone||!email||!target||!proof){toast("Lengkapi semua data dan pilih bukti transfer.");return}
  if(!/^[^ ]+@gmail\.com$/i.test(email)){toast("Gunakan alamat Gmail yang valid.");return}
  const proofName=proof.name;
  const items=state.cart.map((p,i)=>`${i+1}. ${p.name} - ${p.detail} - ${rupiah(p.price)}`).join("\n");
  const msg=`*ORDER NEXORA TOPUP*%0A%0A*DATA PEMBELI*%0ANama: ${encodeURIComponent(name)}%0AWhatsApp: ${encodeURIComponent(phone)}%0AGmail: ${encodeURIComponent(email)}%0A%0A*DETAIL PESANAN*%0A${encodeURIComponent(items)}%0A%0ADetail tujuan: ${encodeURIComponent(target)}%0ATotal: *${encodeURIComponent(rupiah(total()))}*%0AMetode pembayaran: ${encodeURIComponent(state.payment)}%0ABukti transfer: ${encodeURIComponent(proofName)}%0A%0ASaya sudah melakukan pembayaran dan akan mengirim bukti transfer melalui chat WhatsApp ini. Mohon diproses.`;
  window.open(`https://wa.me/${STORE.whatsapp}?text=${msg}`,"_blank");
  toast("WhatsApp penjual dibuka. Lampirkan bukti transfer di chat.");
}
document.addEventListener("click",e=>{
  const addBtn=e.target.closest("[data-add]");if(addBtn)add(+addBtn.dataset.add);
  const rm=e.target.closest("[data-remove]");if(rm){state.cart.splice(+rm.dataset.remove,1);renderCart()}
});
$("#tabs").onclick=e=>{const b=e.target.closest("button");if(!b)return;document.querySelectorAll("#tabs button").forEach(x=>x.classList.remove("active"));b.classList.add("active");state.filter=b.dataset.filter;render()};
$("#search").oninput=e=>{state.search=e.target.value;render()};
document.querySelectorAll("[data-jump]").forEach(b=>b.onclick=()=>{state.filter=b.dataset.jump;document.querySelectorAll("#tabs button").forEach(x=>x.classList.toggle("active",x.dataset.filter===state.filter));render();$("#produk").scrollIntoView({behavior:"smooth"})});
$("#cartBtn").onclick=()=>$("#drawer").classList.add("show");$("#closeCart").onclick=()=>$("#drawer").classList.remove("show");$("#orderBtn").onclick=checkout;$("#modalClose").onclick=()=>$("#modalBg").classList.remove("show");
$("#modalBg").onclick=e=>{if(e.target===$("#modalBg"))$("#modalBg").classList.remove("show")};
$("#themeBtn").onclick=()=>{document.body.classList.toggle("light");$("#themeBtn").textContent=document.body.classList.contains("light")?"☾":"☼"};
render();renderCart();
