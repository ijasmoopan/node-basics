const arr = [10, 12, 15, 20];
for (let i = 0; i < arr.length; i++) {
  console.log('before')
  setTimeout(() => {
    console.log(i, arr[i]);
  }, 2000);
}
