import * as readline from "readline/promises";
const { stdin: input, stdout: output } = require("process");

async function main() {
    const rl = readline.createInterface({ input, output });

    const UTS = Number(await rl.question("Masukkan nilai UTS: "));
    const UAS = Number(await rl.question("Masukkan nilai UAS: "));
    const UKK = Number(await rl.question("Masukkan nilai UKK: "));   

    // perhitungan hasil nilai akhir berdasarkan bobot nilai UTS, UAS, dan UKK
    const nilaiAkhir = (UTS * 0.15) + (UAS * 0.15) + (UKK * 0.70);
    
    console.log(`Nilai akhir Anda adalah: ${nilaiAkhir.toFixed(2)}`);

    rl.close();
}

main();

// rumus perhitungan nilai akhir: Nilai Akhir = (UTS * 0.15) + (UAS * 0.15) + (UKK * 0.70)