
const inquirer = require("inquirer");
const fs = require ("fs");
const util = require("util");
const axios = require("axios");
const generateMarkdown = require("./generateMarkdown");

function init(){
  return inquirer.prompt([
    {
      type: "input",
      name: "Title",
      message: "What is the title of your README?"
    },
    {
      type: "input",
      name: "Description",
      message: "Description (Give a brief desciption of your project)",
    },
    {
      type: "input",
      name: "Installation",
      message: "What are your installation instructions?"
    },  
    {
      type: "input",
      name: "Usage",
      message: "Describe the project usage",
    },
    {
      type: "input",
      name: "License",
      message: "Are there any licenses?"
    },
    {
      type: "input",
      name: "Contributing",
      message: "Who are the contributors?"
    },
    {
      type: "input",
      name: "Tests",
      message: "What tests would you like to include?"  
    }, 
    {
      type: "input",
      name: "Github",
      message: " GitHub Username: ",
      validate: async function(input, answers){
        const queryUrl= `https://api.github.com/users/${input}`

        try{
            await axios.get(queryUrl)
            return true
        }catch{
            return 'GITHUB USER NOT FOUND!'
        }
      }
    },
    {
      type: "input",
      name: "email",
      message: " GitHub email address: "
    },
  ])  
}

async function generateContent(answers){}



init()
  .then(async function(answers) {
     const md = await generateMarkdown(answers);
      console.log("md:", md);
    return fs.writeFile("README.md", md, function(err){
      if (err){
        console.log("error:", err);
      } else {
        console.log("Successfully created README.md");
      }
    });
  })
