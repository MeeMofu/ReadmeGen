
module.exports = str => {

    // look up the licence in the array
    const base =['Unlicense', 
                'MIT License', 
                'GNU AGPLv3', 
                'GNU GPLv3', 
                'GNU LGPLv3', 
                'Mozilla Public License 2.0', 
                'Apache License 2.0', 
                'Boost Software License 1.0'];
    const badgeResult = ['[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
        '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
        '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
        '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
        '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
        '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
        '[![License: Boost 1.0](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    ]

    for (let i =0;i<base.length;i++){
        if (base[i]===str){
            console.log(badgeResult[i]);
            const badge = badgeResult[i];
            return badge;
        }
    }
    
}