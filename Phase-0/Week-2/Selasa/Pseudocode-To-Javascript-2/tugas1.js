var total = 0;
      for (var i = 1; i <= 100; i++) {
        if (i % 2 === 1) {
          total += i;
        } else if (i % 2 === 0) {
          total -= i;
        }
      }
console.log('Total : ' + total);
