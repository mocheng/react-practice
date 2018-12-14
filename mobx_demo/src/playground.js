import {observable, autorun, computed} from 'mobx';

/*
class React {
  @observable width = 2
  @observable height = 1

  @computed get area() {
    console.log('#enter computed area', this.width, this.height, this.width * this.height);
    const a = this.width * this.height;
    console.log('computed area ', a);
    return a;
  }
}

window.store = new React();

const counter = observable({
  count: 0
});
counter.increment = function() {
  this.count ++;
};
counter.decrement = function() {
  this.count --;
}

window.counter = counter;

autorun(() => {
  console.log('#count', counter.count);
});



autorun(() => {
  console.log('#enter autorun');
  console.log('#global.store.area', global.store.area);
});
*/

function log(target, name, descriptor) {
  console.log('#target', target);
  console.log('#name', name);
  console.log('#descriptor', descriptor);
  return descriptor;
}

/*
function log(target, name, descriptor) {
  // save original value, which is method (function)
  let originalMethod = descriptor.value;
  // replace method implementation
  descriptor.value = function( ...args ) {
    console.log( '[LOG]');
    // here, call original method
    // `this` points to the instance
    return originalMethod.call( this, ...args );
  };
  return descriptor;
}
*/


@log
class Bar {
  @log
  bar() {
    console.log('bar');
  }
}

const b = new Bar();
console.log('#-----');
b.bar();

/*
const obj = {
  @log
  bar: () => {
    console.log('#bar');
  }
}

console.log('#-----');

obj.bar();
*/
