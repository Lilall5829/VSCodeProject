const day = 'wednesday';
switch (day) {
  case 'monday': //这里是冒号！！
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break; //没有break就会接着往下执行
  case 'tuesday':
    console.log('Sleep!');
    break;
  case 'wednesday':
    break;
  case 'thursday':
    console.log('Rest!');
    break;
  default:
    console.log('Not a valid day!');
}
