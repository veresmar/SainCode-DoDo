const pug = require('pug');
const fs = require('fs');

// Конвертируем файлы Pug в HTML
fs.readdir('./pages', (err, files) => {
  if (err) throw err;

  files.forEach(file => {
    if (file.endsWith('.pug')) {
      const html = pug.renderFile(`./pages/${file}`, {});
      fs.writeFileSync(`./html-pages/${file.replace('.pug', '.html')}`, html);
    }
  });
});