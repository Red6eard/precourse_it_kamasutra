//При помощи метода indexOf() найди массиве апельсин. Если найдешь, напиши в консоли: «Ура! нашел», а если не нашел «Придется поискать в другом магазине…»

//❗Массив изменять нельзя
//❗Кавычки в массиве должны быть двойными.

const words = ["яблоко", "банан", "апельсин", "манго", "киви"];
  if (words.indexOf("апельсин") < 0) {
    console.log("Придется поискать в другом магазине...")
  } else {
    console.log("Ура! нашел")
  }

