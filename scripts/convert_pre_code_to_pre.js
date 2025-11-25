// Script: convert_pre_code_to_pre.js
// Tự động chuyển <pre><code class="language-xxx">...</code></pre> thành <pre class="language-xxx">...</pre> cho Prism.js
// Chạy sau khi Hugo build xong (node scripts/convert_pre_code_to_pre.js)

const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let html = fs.readFileSync(filePath, 'utf8');
  // Regex: tìm <pre><code class="language-xxx">...</code></pre>
  html = html.replace(/<pre><code class="(language-[a-z0-9]+)">(.*?)<\/code><\/pre>/gs, (match, lang, code) => {
    // Giữ nguyên class, chuyển sang <pre class="language-xxx">...</pre>
    return `<pre class="${lang}">${code}</pre>`;
  });
  fs.writeFileSync(filePath, html, 'utf8');
}

function walk(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (file.endsWith('.html')) {
      processFile(fullPath);
    }
  });
}

const publicDir = path.join(__dirname, '../public');
walk(publicDir);

console.log('Đã chuyển đổi code block sang <pre class="language-xxx">...');
