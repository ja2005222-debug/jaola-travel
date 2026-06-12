import fs from 'fs/promises';
import path from 'path';

const JAOLA_PATH = process.env.JAOLA_PATH;
const KNOWLEDGE_FILE = './knowledge/project-index.json';

async function scanProject() {
  console.log('🔍 Scanning project...');
  const index = {
    pages: [],
    components: [],
    exports: {},
    imports: {},
    lastScan: new Date().toISOString()
  };

  // 1. فحص مجلد app (الصفحات)
  const appDir = path.join(JAOLA_PATH, 'app');
  try {
    const files = await fs.readdir(appDir, { recursive: true });
    index.pages = files.filter(f => f.endsWith('.tsx') || f.endsWith('.jsx'))
      .map(f => '/app/' + f.replace(/\.(tsx|jsx)$/, ''));
  } catch(e) {}

  // 2. فحص مجلد components
  const compDir = path.join(JAOLA_PATH, 'components');
  try {
    const files = await fs.readdir(compDir);
    index.components = files.filter(f => f.endsWith('.tsx')).map(f => f.replace('.tsx', ''));
  } catch(e) {}

  // 3. تحليل كل ملف .ts/.tsx لاستخراج التصديرات والاستيرادات
  const allFiles = await getAllFiles(JAOLA_PATH, ['.ts', '.tsx', '.js', '.jsx']);
  for (const file of allFiles) {
    const content = await fs.readFile(file, 'utf8');
    const exports = extractExports(content);
    const imports = extractImports(content);
    const relativePath = path.relative(JAOLA_PATH, file);
    index.exports[relativePath] = exports;
    index.imports[relativePath] = imports;
  }

  await fs.writeFile(KNOWLEDGE_FILE, JSON.stringify(index, null, 2));
  console.log('✅ Knowledge base created.');
  return index;
}

async function getAllFiles(dir, exts) {
  const files = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!['node_modules', '.next', 'public'].includes(entry.name)) {
        files.push(...await getAllFiles(full, exts));
      }
    } else if (exts.some(ext => entry.name.endsWith(ext))) {
      files.push(full);
    }
  }
  return files;
}

function extractExports(content) {
  const exports = [];
  const regex = /export\s+(?:default\s+)?(?:function|const|class|let|var)\s+([A-Za-z0-9_]+)/g;
  let match;
  while ((match = regex.exec(content)) !== null) exports.push(match[1]);
  return exports;
}

function extractImports(content) {
  const imports = [];
  const regex = /import\s+.*?from\s+['"](.+?)['"]/g;
  let match;
  while ((match = regex.exec(content)) !== null) imports.push(match[1]);
  return imports;
}

export { scanProject };
