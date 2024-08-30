import inquirer from "inquirer";
inquirer
  .prompt( {
    {
          message:"Type url",
          name: "url",
    },
          })
.then ( {answers} => {
       console.log(answers);
})
  
