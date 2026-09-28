function sumAll(...args) {
    return args.reduce((sum, current) => sum + current, 0);
  }
  console.log(sumAll(2, 5, 6, 7)); // 20
  console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 15)); // 60