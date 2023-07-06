'use strict';
//querySelector当多个标签有同一个类名时，只有第一个匹配上的标签会被选中，querySelectorAll能选中全部,有点类似数组，包括有数组的元素[]和length属性
//将常用的类名选择器定义为常量方便调用
const modal = document.querySelector('.modal');
//overlay是覆盖模糊效果
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
console.log(btnShowModal);
//构造一个函数，删除HTML里的hidden类，使标签可见：类名选择器.classList.remove('类名')，注意这里引号里的类名是没有.的！而类名选择器里是有的！classList还可以增加类名、检查某个元素是否包含某个类名
const openModal = () => {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  // console.log(i);
};
for (let i = 0; i < btnShowModal.length; i++)
  //注意这里和事件绑定的函数openModal没有括号！因为这里是事件触发才执行，和函数调用不一样！
  btnShowModal[i].addEventListener('click', openModal);
//构造一个函数，使得点击×或者是overlay部分都可以关闭modal
const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
//键盘事件监听document.addEventListener('keydown',...) keyup手离开键盘，keydown手按下键盘的瞬间，keypress手按在键盘上的时候; 传进来event形参的key属性就是当时具体哪个键被按下
document.addEventListener('keydown', function (event) {
  //console.log(event);
  console.log(`A ${event.key} was pressed`);
  if (event.key === 'Escape') {
    //console.log('Esc was pressed');
    //如果按下Esc时modal没有hidden，那么就给它加上hidden，让它隐藏
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});
