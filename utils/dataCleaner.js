module.exports = data => {
    let projectData={};
        const {projectName, description,license,installation,usage,contributing,tests,github,email,contactInfo} = data

        projectData.name = projectName;

        // Add section name with their values
        projectData.sections = {}
        const {sections} = projectData;

        // Check each fields to add to sections
        if (description) {
            sections.description={};
            sections.description.name = 'Description';
            sections.description.value= description
        }

        if (license) {
            sections.license={};
            sections.license.name = 'License';
            sections.license.value= license
        }
        
        if (installation) {
            sections.installation={};
            sections.installation.name = 'Installation';
            sections.installation.value= installation
        }
        
        if (usage) {
            sections.usage={};
            sections.usage.name = 'Usage';
            sections.usage.value= usage
        }
        
        if (contributing) {
            sections.contributing={};
            sections.contributing.name = 'Contributing';
            sections.contributing.value= contributing
        }

        if (tests) {
            sections.tests={};
            sections.tests.name = 'Tests';
            sections.tests.value= tests
        }
        // Add contact object if no field is empty, check each case for empty string
        if (github || email || contactInfo ){
            projectData.contact = {}
            if (github) projectData.contact.github= github;
            if (email) projectData.contact.email= email;
            if (contactInfo) projectData.contact.info= contactInfo;
        }

        return projectData;
}