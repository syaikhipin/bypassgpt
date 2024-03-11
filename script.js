function obfuscate() {
    var input = document.getElementById("before").value;
    var output = document.getElementById("after");
    var checkbox_special_spaces = document.getElementById("special-spaces");
    var checkbox_special_characters = document.getElementById("special-characters");

    if (checkbox_special_characters.checked) {
        var obfuscatedInput = obfuscate_characters(input);
    } else {
        var obfuscatedInput = input;
    }

    if (checkbox_special_spaces.checked) {
        var result = "";
        for (var i = 0; i < obfuscatedInput.length; i++) {
            var characters = ['', '', ''];
            var random = Math.floor(Math.random() * characters.length);
            result += obfuscatedInput.charAt(i) + characters[random];
        }
        output.value = result;
    } else {
        output.value = obfuscatedInput;
    }
}

function obfuscate_characters(essay) {
    const char_dict = {
        "a": "",
        "b": "b",
        "c": "",
        "d": "d",
        "e": "",
        "f": "f",
        "g": "",
        "h": "h",
        "i": "i",
        "j": "j",
        "k": "k",
        "l": "l",
        "m": "m",
        "n": "n",
        "o": "",
        "p": "p",
        "q": "q",
        "r": "r",
        "s": "s",
        "t": "t",
        "u": "",
        "v": "",
        "w": "w",
        "x": "x",
        "y": "y",
        "z": "z",
    };

    const char_dict_capitals = {
        "A": "A",
        "B": "B",
        "C": "C",
        "D": "D",
        "E": "E",
        "F": "F",
        "G": "G",
        "H": "HH",
        "I": "I",
        "J": "J",
        "K": "K",
        "L": "L",
        "M": "M",
        "N": "N",
        "O": "OO",
        "P": "P",
        "Q": "Q",
        "R": "R",
        "S": "S",
        "T": "T",
        "U": "U",
        "V": "V",
        "W": "W",
        "X": "X",
        "Y": "Y",
        "Z": "Z",
    };

    const char_dict_numbers = {
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "0": "0",
    };

    let obfuscatedEssay = '';

    for (const char of essay) {
      if (char.match(/[a-zA-Z]/)) {
        if (char === char.toUpperCase()) {
          obfuscatedEssay += get_random_char(char_dict_capitals[char]);
        } else {
          obfuscatedEssay += get_random_char(char_dict[char]);
        }
      } else if (char.match(/\d/)) {
        obfuscatedEssay += get_random_char(char_dict_numbers[char]);
      } else {
        obfuscatedEssay += char;
      }
    }
    
    return obfuscatedEssay;
}

function get_random_char(dictionary) {
    const keys = Object.keys(dictionary);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return dictionary[randomKey];
}
