let clock = null;

function buildClock() {
    const letters = [
      //  0    1    2    3    4    5    6    7    8    9   10
        ["I", "T", "L", "I", "S", "A", "S", "A", "M", "P", "M"], // 0
        ["A", "C", "Q", "U", "A", "R", "T", "E", "R", "D", "C"], // 1
        ["T", "W", "E", "N", "T", "Y", "F", "I", "V", "E", "X"], // 2
        ["H", "A", "L", "F", "S", "T", "E", "N", "F", "T", "O"], // 3
        ["P", "A", "S", "T", "E", "R", "U", "N", "I", "N", "E"], // 4
        ["O", "N", "E", "S", "I", "X", "T", "H", "R", "E", "E"], // 5
        ["F", "O", "U", "R", "F", "I", "V", "E", "T", "W", "O"], // 6
        ["E", "I", "G", "H", "T", "E", "L", "E", "V", "E", "N"], // 7
        ["S", "E", "V", "E", "N", "T", "W", "E", "L", "V", "E"], // 8
        ["T", "E", "N", "S", "E", "O", "C", "L", "O", "C", "K"]  // 9
    ];
    const clockArea = document.getElementById("clock");

    // create table
    clock = document.createElement("table");

    for (let i = 0; i <= 9; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j <= 10; j++) {
            const cell = document.createElement("td");
            cell.style.textAlign = "center";
            cell.innerHTML = letters[i][j];
            row.appendChild(cell);
        }

        clock.appendChild(row);
    }

    // append
    clockArea.appendChild(clock);
}

function getItem(i, j) {
    return clock.children[i].children[j];
}

function showWord(word) {
    for (let i = 0; i <= word.length - 1; i++) {
        getItem(word[i][0], word[i][1]).style.color = "black";
    }
}

function hideAll() {
    for (let i = 0; i <= 9; i++) {
        for (let j = 0; j <= 10; j++) {
            getItem(i, j).style.color = "lightgray";
        }
    }
}

function showTime() {
    const it = [[0, 0], [0, 1]],
          is = [[0, 3], [0, 4]],
          oclock = [[9, 8], [9, 9], [9, 10]],
          to = [[3, 9], [3, 10]],
          past = [[4, 0], [4, 1], [4, 2], [4, 3]],
          half = [[3, 0], [3, 1], [3, 2], [3, 3]],
          one = [[5, 0], [5, 1], [5, 2]],
          two = [[6, 8], [6, 9], [6, 10]],
          three = [[5, 6], [5, 7], [5, 8], [5, 9], [5, 10]],
          four = [[6, 0], [6, 1], [6, 2], [6, 3]],
          five = [[2, 6], [2, 7], [2, 8], [2, 9]],
          six = [[5, 3], [5, 4], [5, 5]],
          seven = [[8, 0], [8, 1], [8, 2]],
          eight = [[7, 0], [7, 1], [7, 3]],
          nine = [[4, 7], [4, 8], [4, 9]],
          ten = [[3, 5], [3, 6], [3, 7]],
          eleven = [[7, 5], [7, 6], [7, 7], [7, 8], [7, 9], [7, 10]],
          twelve = [[8, 5], [8, 6], [8, 7], [8, 8], [8, 9], [8, 10]],
          quarter = [[1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8]],
          twenty = [[2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5]],
          hours = [twelve, one, two, three, four, five, six, seven, eight, nine, ten, eleven];

    hideAll();

    showWord(it);
    showWord(is);

    const d = new Date();
    let hour = d.getHours(),
        minute = d.getMinutes();

    if (minute >= 58 || minute <= 2) { // xx:58 - xx:02
        showWord(oclock);
    } else if (minute >= 3 && minute <= 7) { // xx:03 - xx:07
        showWord(five);
        showWord(past);
    } else if (minute >= 8 && minute <= 12) { // xx:08 - xx:12
        showWord(ten);
        showWord(past);
    } else if (minute >= 13 && minute <= 17) { // xx:13 - xx:17
        showWord(fifteen);
        showWord(past);
    } else if (minute >= 18 && minute <= 22) { // xx:18 - xx:22
        showWord(twenty);
        showWord(past);
    } else if (minute >= 23 && minute <= 27) { // xx:23 - xx:27
        showWord(twenty);
        showWord(five);
        showWord(past);
    } else if (minute >= 28 && minute <= 32) { // xx:28 - xx:32
        showWord(half);
        showWord(past);
    } else if (minute >= 33 && minute <= 37) { // xx:33 - xx:37
        showWord(twenty);
        showWord(five)
        showWord(to);
    } else if (minute >= 38 && minute <= 42) { // xx:38 - xx:42
        showWord(twenty);
        showWord(to);
    } else if (minute >= 43 && minute <= 47) { // xx:43 - xx:47
        showWord(quarter);
        showWord(to);
    } else if (minute >= 48 && minute <= 52) { // xx:48 - xx:52
        showWord(ten);
        showWord(to);
    } else if (minute >= 53 && minute <= 57) { // xx:53 - xx:57
        showWord(five);
        showWord(to);
    }

    showWord(hours[hour % 12]);

    // calc update time
    setTimeout(() => showTime(), 5000);
}
