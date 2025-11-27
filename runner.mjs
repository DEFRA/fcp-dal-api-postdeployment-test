import { glob } from "glob";
import Mocha from "mocha";
import { Status } from "allure-js-commons";

const mocha = new Mocha({
  reporter: "allure-mocha",
  reporterOptions: {
    resultsDir: "allure-results",
    extraReporters: "spec",
  },
});

if (process.argv[2]) {
  process.env.AUTH_TOKEN = process.argv[2].split('=')[1]
  //console.log("The token is: " + process.env.AUTH_TOKEN)
}

glob.sync("test/**/*.js").forEach((file) => mocha.addFile(file));
await mocha.loadFilesAsync();
mocha.run((failures) => process.exit(failures));
