const returnLicence = require ('../utils/licenceLookup')

// function to generate markdown for README
function generateMarkdown({name,sections,contact}) {
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
    return mainContent;
  }

  const Markdown = `# ${name}
  
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
