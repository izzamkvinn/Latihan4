const readline = require("readline/promises");
const { stdin: input, stdout: output } = require("process");

async function main() {
    const rl = readline.createInterface({ input, output });

    const nama = await rl.question("Masukkan nama pegawai: ");
    const honor = Number(await rl.question("Masukkan honor harian: "));
    const hariKerja = Number(await rl.question("Masukkan jumlah hari kerja: "));
    const tunjangan = Number(await rl.question("Masukkan tunjangan: "));

    // rmus: Upah = (honor x jumlah hari kerja) + tunjangan
    const upah = (honor * hariKerja) + tunjangan;

    console.log("\n--- Rincian Gaji ---");
    console.log(`Nama Pegawai : ${nama}`);
    console.log(`Upah Akhir   : Rp ${upah.toLocaleString('id-ID')}`);

    rl.close();
}

main();