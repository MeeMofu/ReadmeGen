module.exports = data => {
    let projectData={};
        const {projectName, description,license,installation,usage,contributing,tests,github,email,contactInfo} = data

        projectData.name = projectName;

        // Add section name with their values
        projectData.sections = []
        const {sections} = projectData;

        // Check each fields to add to sections
        if (description) {
            const data = ['Description',description];
            sections.push(data);
        }
        
        if (installation) {
            const data = ['Installation',installation];
            sections.push(data);
        }

        if (usage) {
            const data = ['Usage',usage];
            sections.push(data);
        }
        
        if (tests) {
            const data = ['Tests',tests];
            sections.push(data);
        }

        if (contributing) {
            const data = ['Contributing',contributing];
            sections.push(data);
        }
       
        if (license) {
            const data = ['License',license];
            sections.push(data);
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