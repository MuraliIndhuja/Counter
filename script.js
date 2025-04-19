let count = 0;
//Decrease:
document.getElementById("decreaseBtn").onclick = () => {
  count -= 1;
  document.getElementById("countLabel").innerHTML = count;
};
//Reset:
document.getElementById("resetBtn").onclick = () => {
  count = 0;
  document.getElementById("countLabel").innerHTML = count;
};
//Increase:
document.getElementById("increaseBtn").onclick = () => {
  if (count == 10) {
    alert("Your Limit is Over🙄😶😭");
  } else {
    count += 1;
    document.getElementById("countLabel").innerHTML = count;
  }
};

//setTimeout():
// setTimeout(() => {
//   console.log("Listen...");
// }, 3000);

// //setInterval():
// setInterval(() => {
//   console.log("Don't Talk..");
// }, 3000);

let limit = 0;
let valid = setInterval(() => {
  limit++;
  console.log("Rizario", limit);
  if (limit == 5) {
    clearInterval(valid); //stops the interval after 5 minutes
    console.log("Execution stopped..");
  }
}, 3000);
