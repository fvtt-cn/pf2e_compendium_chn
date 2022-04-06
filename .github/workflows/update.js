const fs = require('fs');

const components = fs.readdirSync('./en-US/');
for (let component of components)
    if (!fs.existsSync(`./zh-CN/${component}`))
        fs.writeFileSync(`./zh-CN/${component}`, '{}');
