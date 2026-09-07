let tab = [5, 2, 8, 1, 3];
let temp;

console.log("Avant tri :");
console.log(tab);

for (let i = 0; i < tab.length - 1; i++) {

    let min = i;

    for (let j = i + 1; j < tab.length; j++) {
        if (tab[j] < tab[min]) {
            min = j;
        }
    }

    temp = tab[i];
    tab[i] = tab[min];
    tab[min] = temp;
}

console.log("Après tri :");
console.log(tab);