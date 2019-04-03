// const fs = require('fs');
// const path = require('path');
// const mkdirp = require('mkdirp-promise');
//
// const componentFolderName = process.argv[2];
// const componentName = `${componentFolderName.charAt(0).toUpperCase()}${componentFolderName.slice(1).replace(/-([a-z])/g, g => g[1].toUpperCase())}`;
//
// const folderName = `./components/${componentFolderName}`;
//
// const writeFile = (filename, contents) => {
//     const pathName = path.join(filename === 'package.json' ? folderName : `${folderName}/src`, filename);
//     fs.writeFile(pathName, `${contents}`, (err) => {
//         if (err) {
//             return console.log(err);
//         }
//         console.log(`Created file: ${pathName}`);
//         return false;
//     });
//     return false;
// };
//
// // write stories.js file
// const storiesScript = () => {
//     const filename = 'stories.js';
//     const contents = `import React from 'react';
// import { storiesOf } from '@storybook/react';
// // TODO: remove comments for documentation once docs have been generated
// import ${componentName} from '.';
//
//
// const stories = storiesOf('${componentName}', module);
// stories.add(
//   '${componentName}',
//     () => (
//       <${componentName}>${componentName} example</${componentName}>
//     ),
// );
// `;
//     writeFile(filename, contents);
// };
//
// // write index.js file
// const indexScript = () => {
//     const filename = 'index.js';
//     const contents = `import React from 'react';
// import PropTypes from 'prop-types';
//
// const ${componentName} = ({...props}) => {
// <${componentName}>{children}</${componentName}>;
//
// ${componentName}.propTypes = {
//   children: PropTypes.node.isRequired,
// };
//
// export default ${componentName};
// `;
//     writeFile(filename, contents);
// };
//
// const cssScript= () => {
//     const filename = 'style.module.css';
//     const contents = `//Add CSS HERE';
//
//     `;
//
//
//     writeFile(filename, contents);
//
// }
//
// const init = () => {
//     if (fs.existsSync(path.join(folderName))) {
//         console.log(`❗️❗️ The component '${componentName}' already exists ❗️❗️
// Please use a different name or delete the existing folder 🆗`);
//         return false;
//     }
//     mkdirp(`${folderName}/src`).then(() => {
//         cssScript();
//         storiesScript();
//         indexScript();
//         console.log(`✅  The component '${componentName}' was created successfully`);
//     });
//     return false;
// };
//
// init();