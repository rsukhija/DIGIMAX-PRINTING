const fs = require('fs');
let code = fs.readFileSync('app/ClientApp.tsx', 'utf-8');

const updatedCode = code.replace(
  /      <\/div>\n      \n\nfunction Navbar/g, 
  `      </div>\n    </section>\n  );\n}\n\nfunction Navbar`
);

fs.writeFileSync('app/ClientApp.tsx', updatedCode);
console.log("Syntax fixed");
