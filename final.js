// 1. Data array of objects (7 transaksi -)
const dataBelanja = [
    { id: 101, produk: 'Hoodie Cream Yalliarta', harga: 185000, jumlah: 2, kategori: 'Fashion' },
    { id: 102, produk: 'Mouse Gaming RGB', harga: 95000, jumlah: 4, kategori: 'Elektronik' },
    { id: 103, produk: 'Kopi Susu Gula Aren', harga: 18000, jumlah: 10, kategori: 'Minuman' },
    { id: 104, produk: 'Totebag Kanvas', harga: 65000, jumlah: 3, kategori: 'Fashion' },
    { id: 105, produk: 'Boba Brown Sugar', harga: 22000, jumlah: 6, kategori: 'Minuman' },
    { id: 106, produk: 'Speaker Mini Bluetooth', harga: 125000, jumlah: 2, kategori: 'Elektronik' },
    { id: 107, produk: 'Bucket Hat', harga: 55000, jumlah: 1, kategori: 'Fashion' }
];

console.log("==============================================");
console.log("      LAPORAN PENJUALAN TOKO YALLIARTA");
console.log("           Oleh: Safina Masulin");
console.log("==============================================");

console.log("\n[1] DAFTAR SEMUA PRODUK:");
console.table(dataBelanja);

// 2. map() + destructuring - hitung subtotal
const dataDenganTotal = dataBelanja.map((item) => {
    const { harga, jumlah } = item;
    const subtotal = harga * jumlah;
    return { ...item, subtotal };
});

console.log("\n[2] DATA + SUBTOTAL (pakai map & destructuring):");
console.table(dataDenganTotal);

// 3. filter() - filter kategori Fashion
const targetKategori = 'Fashion';
const filterFashion = dataDenganTotal.filter(item => item.kategori === targetKategori);

console.log(`\n[3] FILTER KATEGORI: ${targetKategori} (pakai filter):`);
console.table(filterFashion);

// 4. reduce() - total semua pendapatan
const totalPendapatan = dataDenganTotal.reduce((akumulasi, { subtotal }) => {
    return akumulasi + subtotal;
}, 0);

console.log("\n==============================================");
console.log("[4] TOTAL PENDAPATAN (pakai reduce):");
console.log(`    Rp ${totalPendapatan.toLocaleString('id-ID')}`);
console.log("==============================================");

// BONUS - biar makin beda: cari barang termahal
const barangTermahal = dataDenganTotal.reduce((max, item) => item.subtotal > max.subtotal ? item : max);
console.log(`\n[5] BONUS - Penjualan Tertinggi: ${barangTermahal.produk} - Rp ${barangTermahal.subtotal.toLocaleString('id-ID')}`);
