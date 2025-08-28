function getNumber() {
  return new Promise((resolve) =>
    setTimeout(() => resolve(Math.floor(Math.random() * 10)), 500)
  );
}

function doubleNumber(num) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(num * 2), 500)
  );
}

function isEven(num) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(num % 2 === 0), 500)
  );
}

// Nested hell
// getNumber().then((num) => {
//   console.log("Got number:", num);
//   doubleNumber(num).then((doubled) => {
//     console.log("Doubled:", doubled);
//     isEven(doubled).then((even) => {
//       console.log("Is even?", even);
//     });
//   });
// });


async function run() {
  try {
    const num = await getNumber();
    console.log("Got number:", num);

    const doubled = await doubleNumber(num);
    console.log("Doubled:", doubled);

    const even = await isEven(doubled);
    console.log("Is even?", even);
  } catch (err) {
    console.error("Something went wrong:", err);
  }
}

run();
