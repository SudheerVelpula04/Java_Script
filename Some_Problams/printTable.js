 for (let i = 1; i <= 10; i++) {
        printT(i);
        console.log(" ");
    }
    function printT(s) {
        for (let i = 1; i <= 10; i++) {
            let row = s + "*" + i + "=" + s * i;
            console.log(row)
        }

    }