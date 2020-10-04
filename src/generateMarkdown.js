const returnLicence = require ('../utils/licenceLookup')

const exampleCase = {
  name: 'README Generator example',
  sections: [
    [ 'Description', 'This is a quick show case of the README that this program generate. This program will automatically generate table of content and its appropriate sections. Unrequired fields can be left empty and will not be included. In this example, the Installation and Tests are not included ' ],
    [ 'Usage', 'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et. Nam fringilla elit dapibus pellentesque cursus.' ],
    [ 'Contributing', 'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et. Nam fringilla elit dapibus pellentesque cursus.' ],
    [ 'License', 'MIT License' ]
  ],
  contact: {
    github: 'MeeMofu',
    info: 'Extra contact info and/or instructions can be provided right here for users'
  }
}

// function to generate markdown for README
function generateMarkdown({name,sections,contact}) {
  if (name === 'Test Case'){
    name = exampleCase.name;
    sections = exampleCase.sections;
    contact = exampleCase.contact;
  }
  const badge = returnLicence(sections[sections.length-1][1])
  const createTable = ()=>{
    let table = sections.map(section => `* [${section[0]}](#${section[0].toLowerCase()})`)
      .join('\n');
    // Base on the section's component, it'll return the sections included

    if (contact) table += '\n* [Questions](#questions)'
    // Check if there's any contact info to include
    return table;
  }
  
  const createContent = () =>{
    // For simple creation of the README, the licence and questions info comes after other sections, as they are the most different
    let mainContent = sections.filter(field => field[0] != 'License').map(content => `
      ## ${content[0]}

      ${content[1]}
    `).join('')

    // License and Questions content
    mainContent += `
      ## License

      This program is covered under ${sections[sections.length-1][1]}
    `

    // Once again, checking for non empty field
    if (contact) {
      mainContent += `
        ## Questions

      `
      if (contact.github) mainContent += `GitHub link: https://github.com/${contact.github}\n\n`;
      if (contact.email) mainContent += `Email link: ${contact.email}\n\n`;
      if (contact.info) mainContent += `${contact.info}\n\n`;

    }

    return mainContent;
  }

  const Markdown = `# ${name}
  ${badge}
  
  ## Table of content

  ${createTable()}

  ${createContent()}
`;
  const cleaned = Markdown.split('\n').map(line => line.trim()).join('\n');
  // Clear any spaces before each line by:
    // First, split the data into arrays of lines
    // Then map it with trim() to remove any space from each component of the array
    // Then join the lines with a new line
    return cleaned
}

module.exports = generateMarkdown;
