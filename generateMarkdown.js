async function generateMarkdown(data){ 
    // console.log("data:", data); 
    return `
    # ${data.Title}
    [![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/${data.Github})

    ${data.Description}
    ## Table of contents
    ${data.Installation !=="" ? '* [Installation](#installation)' :""}
    ${data.Usage !== "" ? '* [Usage](#usage)' : ""}
    ${data.License !=="" ? '* [License](#license)':""}
    ${data.Contributing !=="" ? `* [Contributing](#Contributing)`: ""}
    ${data.Tests !== "" ? '* [Tests](#Tests)':""}
    ${data.Questions !== "" ? '* [Questions](#Questions)':""}
    ## Installation
    ${data.Installation}
    ## Usage
    ${data.Usage}
    ## License
    ${data.License}
    ## Contributing
    ${data.Contributing}
    ## Tests
    ${data.Tests}
    ## Questions
    Please feel free to contact me on the links below:
    ![https://avatars2.githubusercontent.com/${data.Github}](https://avatars2.githubusercontent.com/${data.Github})
    ${data.email}
    [My Github Page](https:github.com/${data.Github})
        `; 
    }

    module.exports = generateMarkdown