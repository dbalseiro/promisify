import { stat } from "fs";

const promisify = () => {
  throw new Error("Not Implemented");
};

const promisified_stat = promisify(stat);

promisified_stat("temp")
  .then(stats => {
    const msg = stats.isFile() ? "Is a file" : "Not a file";
    console.log(msg);
  })
  .catch(error => {
    console.log(error);
  });

export default promisify;
