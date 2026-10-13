import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

async function main() {
    const rl = readline.createInterface({ input, output });

    const nama = await rl.question("Masukkan nama Anda: ");
    const inputUsia = await rl.question("Masukkan usia Anda: ");
    const usia: number = Number(inputUsia);
    const kota = await rl.question("Masukkan kota asal Anda: ");

    console.log(`Halo, ${nama}`);
    console.log(`Usia saya, ${usia}`);
    console.log(`Kota asal saya, ${kota}`);

    rl.close();
}

main();