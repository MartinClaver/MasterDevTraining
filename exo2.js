function batailleEntiere (N, deckSacha, deckPerso) {
    while (deckPerso.length > 0 || deckSacha.length > 0) {
        if (deckSacha[0] > deckPerso[0]) {
            deckChanges(deckSacha, deckPerso, 0)
        } else if (deckSacha[0] < deckPerso[0]) {
            deckChanges(deckPerso, deckSacha, 0)
        }
        else {
            deckSacha.splice(0, 1)
            deckPerso.splice(0, 1)
        }
    }
    if (deckPerso.length > 0) return "G"
    else if (deckSacha.length > 0) return "P"
    else return "N"
}

function deckChanges(deck1, deck2, counter) {
    deck1.push(deck1.splice(counter, 1)[0])
    deck2.splice(counter, 1)
}
const testSacha = [1,2,3]
const testPerso = [3, 2, 1]

const test = batailleEntiere(3, testSacha, testPerso)

console.log(test)