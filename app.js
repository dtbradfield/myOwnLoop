let loop = ( startIt, testIt, updateIt, writeIt ) => {
    for ( let now = startIt; testIt(now); now = updateIt(now) ) {
        writeIt(now);
    };
};







//From EloquentJS:
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1