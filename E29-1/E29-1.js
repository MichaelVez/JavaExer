const getIDs = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([532, 543, 753, 1, 5]);
    }, 1500);
  });
const getIDs2 = async () => {
  return await setTimeout(() => {
    [532, 543, 753, 1, 5];
  }, 1500);
};
