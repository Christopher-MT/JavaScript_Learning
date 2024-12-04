function loop(start, test, update, body) {
        while (test(start)) {
            body(start);
            start = update(start)
        }
}
loop (
    3,
    n => n > 0,
    n => n - 1,
    console.log
);