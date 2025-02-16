function trouverJardin(grille) {
    const n = grille.length;
    if (n < 2) return "Impossible";
    const m = grille[0].length;
    if (m < 2) return "Impossible";
    
    const copieGrille = grille.map(ligne => [...ligne]);
    
    for (let i = 0; i <= n - 2; i++) {
        for (let j = 0; j <= m - 2; j++) {
            if (grille[i][j] === '.' &&
                grille[i][j + 1] === '.' &&
                grille[i + 1][j] === '.' &&
                grille[i + 1][j + 1] === '.') {
                copieGrille[i] = [...copieGrille[i]];
                copieGrille[i][j] = 'O';
                copieGrille[i][j + 1] = 'O';
                copieGrille[i + 1] = [...copieGrille[i + 1]];
                copieGrille[i + 1][j] = 'O';
                copieGrille[i + 1][j + 1] = 'O';
                return copieGrille.map(l => l.join(''));
            }
        }
    }
    
    return "Impossible";
}

console.log(trouverJardin([["X","X","X",".","X"],
    ["X","X",".",".","X"],
    ["X","X",".",".","X"],
    ["X","X","X","X","X"]]))

console.log(trouverJardin([["X","X"],
                           ["X","."],
                           ["X","."]]))

console.log(trouverJardin([["X","X","X","."],
["X","X",".","."],
["X",".",".","."],
["X",".",".","X"]]))
