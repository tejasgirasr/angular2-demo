let test = {
  sound:'wofffff',
  talk:function(){
    return this.sound
  }
};
console.log(test.sound = 'woffffffffffffffffffff');
console.log(test.talk());