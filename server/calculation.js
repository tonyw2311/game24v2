
module.exports={
    randFour,
    check24,
    evaluation,
    randCardSuit
}

function randFour() {
    numList = Array.from({
        length: 4
    }, () => (Math.floor(Math.random() * 10) + 1));
    while (!check24(numList)) {

        numList = Array.from({
            length: 4
        }, () => (Math.floor(Math.random() * 10) + 1));
    }
    return numList;
}

function check24(num_list) {
    let op = ['+', '-', '*', '/'];
    let count = 0;
    let total = '';

    perm = permutator(num_list)
    for (const x of perm) {
        let num_list = x;
        for (const i of Array(4).keys()) {
            for (const j of Array(4).keys()) {
                for (const k of Array(4).keys()) {
                    total = num_list[0] + op[i] + num_list[1] + op[j] + num_list[2] + op[k] + num_list[3];
                    count += evaluation(total);
                    total = '(' + num_list[0] + op[i] + num_list[1] + ')' + op[j] + '(' + num_list[2] + op[k] + num_list[3] + ')';
                    count += evaluation(total);
                    total = '(' + '(' + num_list[0] + op[i] + num_list[1] + ')' + op[j] + num_list[2] + ')' + op[k] + num_list[3];
                    count += evaluation(total);
                    total = '(' + num_list[0] + op[i] + '(' + num_list[1] + op[j] + num_list[2] + ')' + ')' + op[k] + num_list[3];
                    count += evaluation(total);
                    total = num_list[0] + op[i] + '(' + num_list[1] + op[j] + num_list[2] + op[k] + num_list[3] + ')';
                    count += evaluation(total);
                    total = num_list[0] + op[i] + '(' + '(' + num_list[1] + op[j] + num_list[2] + ')' + op[k] + num_list[3] + ')';
                    count += evaluation(total);
                    total = num_list[0] + op[i] + '(' + num_list[1] + op[j] + '(' + num_list[2] + op[k] + num_list[3] + ')' + ')';
                    count += evaluation(total);

                }
            }
        }
    }

    if (count > 0) {
        return true;
    } else {
        return false;
    }

}

function evaluation(equation) {
    try {
        if (eval(equation) === 24) {
            return 1;
        } else {
            return 0;
        }
    } catch {
        return 0;
    }
}
//permutations
function permutator(inputArr) {
    var results = [];

    function permute(arr, memo) {
        var cur, memo = memo || [];

        for (var i = 0; i < arr.length; i++) {
            cur = arr.splice(i, 1);
            if (arr.length === 0) {
                results.push(memo.concat(cur));
            }
            permute(arr.slice(), memo.concat(cur));
            arr.splice(i, 0, cur[0]);
        }

        return results;
    }

    return permute(inputArr);
}

function randCardSuit() {
    x = Array.from({
        length: 4
    }, () => Math.floor(Math.random() * 4) + 1)
    let cardSuitArray = []
    for (let i = 0; i < x.length; i++) {
        switch (x[i]) {
            case (1):
                cardSuitArray[i] = "club";
                break;
            case (2):
                cardSuitArray[i] = "diamond";
                break;
            case (3):
                cardSuitArray[i] = "heart";
                break;
            case (4):
                cardSuitArray[i] = "spade";
                break;
        }
    }
    return cardSuitArray;
}