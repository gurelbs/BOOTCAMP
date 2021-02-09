const colorChecker = color => {
  String(color).toLowerCase()
  switch (color) {
    case 'yellow':
    case 'pink':
    case 'orange':
      color = 'light color';
      break;
    case 'blue':
    case 'purple':
    case 'brown':
      color = 'dark color';
      break;
    default: color = 'Unknown color'
      break;
  }
  return console.log(color);
}

colorChecker('yellow')
colorChecker('pink')
colorChecker('orange')
colorChecker('blue')
colorChecker('purple')
colorChecker('brown')
colorChecker('black')