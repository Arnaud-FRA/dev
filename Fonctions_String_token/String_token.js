function splitString(stringToSplit, separator) {
    var arrayOfStrings = stringToSplit.split(separator);
  
    console.log(`La chaine d'origine est : ${stringToSplit}`);
    console.log(`Le délimiteur est : ${separator}`);
    console.log(
      `Le tableau comporte ${arrayOfStrings.length} elements : `,
      arrayOfStrings.join(" / "),
    );
  }
  
  var tempestString = "Oh brave new world that has such people in it.";
  var monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
  
  var espace = " ";
  var virgule = ",";
  
  splitString(tempestString, espace);
  splitString(tempestString);
  splitString(monthString, virgule);