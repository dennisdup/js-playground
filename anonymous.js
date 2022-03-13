let avg = function(numbers) {
    let sum = 0;
    for (const item of numbers) {
      sum += item;
    }
    return sum / numbers.length;
  };

  console.log( avg([2,3,7]) );


  let show = (name) => {
    console.log('Anonymous function: ', name);
};

show("Dennis");


