const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'src', 'components', 'original');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function cleanJSX(html) {
  let res = html;
  // Replace base64 references with public paths
  res = res.replace(/src="\[BASE64_IMAGE_LEN_499771\]"/g, 'src="/images/original/logo_jj.jpg"');
  res = res.replace(/src="\[BASE64_IMAGE_LEN_250011\]"/g, 'src="/images/original/hero_molecular.jpg"');
  res = res.replace(/src="\[BASE64_IMAGE_LEN_207711\]"/g, 'src="/images/original/caviar_de_ouro.jpg"');
  res = res.replace(/src="(?:\/)?\[BASE64_IMAGE_LEN_153739\]"/g, 'src="/images/original/gema_de_maracuja.jpg"');
  res = res.replace(/src="(?:\/)?\[BASE64_IMAGE_LEN_271859\]"/g, 'src="/images/original/macarrao_de_gel.jpg"');
  res = res.replace(/src="(?:\/)?\[BASE64_IMAGE_LEN_189435\]"/g, 'src="/images/original/cloche_defumado.jpg"');
  res = res.replace(/src="(?:\/)?\[BASE64_IMAGE_LEN_183135\]"/g, 'src="/images/original/espuma_de_limao.jpg"');
  res = res.replace(/src="(?:\/)?\[BASE64_IMAGE_LEN_258731\]"/g, 'src="/images/original/gin_tonica_caviar.jpg"');
  res = res.replace(/src="(?:\/)?\[BASE64_IMAGE_LEN_233839\]"/g, 'src="/images/original/negroni_em_chamas.jpg"');
  res = res.replace(/src="\[BASE64_IMAGE_LEN_201031\]"/g, 'src="/images/original/espresso_martini_caviar.jpg"');
  res = res.replace(/src="\[BASE64_IMAGE_LEN_207715\]"/g, 'src="/images/original/esfera_de_espumante.jpg"');
  res = res.replace(/src="(?:\/)?\[BASE64_IMAGE_LEN_431947\]"/g, 'src="/images/original/felipe_martins_instrutor.jpg"');

  // Remove any stray [BASE64...] tags if any
  res = res.replace(/src="(?:\/)?\[BASE64_IMAGE_LEN_\d+\]"/g, 'src="/images/original/hero_molecular.jpg"');
  
  // Remove data-tsd-source attributes
  res = res.replace(/\s*data-tsd-source="[^"]*"/g, '');
  
  // Replace HTML entities
  res = res.replace(/&amp;/g, '&');
  res = res.replace(/class=/g, 'className=');
  
  // Fix JSX self-closing tags
  res = res.replace(/<img\b([^>]*?)>/gi, (m, attrs) => {
    let a = attrs.trim();
    if (a.endsWith('/')) a = a.slice(0, -1).trim();
    return `<img ${a} />`;
  });
  res = res.replace(/<br\b([^>]*?)>/gi, '<br />');
  res = res.replace(/<hr\b([^>]*?)>/gi, '<hr />');
  res = res.replace(/<input\b([^>]*?)>/gi, (m, attrs) => {
    let a = attrs.trim();
    if (a.endsWith('/')) a = a.slice(0, -1).trim();
    return `<input ${a} />`;
  });
  
  // Replace SVG attributes to React camelCase
  res = res.replace(/stroke-width=/g, 'strokeWidth=');
  res = res.replace(/stroke-linecap=/g, 'strokeLinecap=');
  res = res.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
  res = res.replace(/fill-rule=/g, 'fillRule=');
  res = res.replace(/clip-rule=/g, 'clipRule=');
  res = res.replace(/viewbox=/g, 'viewBox=');
  
  return res;
}

// 1. Header Navbar
const navRaw = fs.readFileSync('extracted_nav.html', 'utf8');
const navJSX = `export default function NavbarOriginal() {\n  return (\n${cleanJSX(navRaw)}\n  );\n}\n`;
fs.writeFileSync(path.join(outDir, 'NavbarOriginal.tsx'), navJSX, 'utf8');

// 2. Sections
const sectionFiles = [
  { file: 'section_1.html', name: 'HeroOriginal.tsx', component: 'HeroOriginal' },
  { file: 'section_2.html', name: 'DrinksOriginal.tsx', component: 'DrinksOriginal' },
  { file: 'section_3.html', name: 'CurriculumOriginal.tsx', component: 'CurriculumOriginal' },
  { file: 'section_4.html', name: 'AboutOriginal.tsx', component: 'AboutOriginal' },
  { file: 'section_5.html', name: 'InstructorOriginal.tsx', component: 'InstructorOriginal' },
  { file: 'section_6.html', name: 'FaqOriginal.tsx', component: 'FaqOriginal' },
  { file: 'section_7.html', name: 'ContactOriginal.tsx', component: 'ContactOriginal' },
  { file: 'section_8.html', name: 'FinalCtaOriginal.tsx', component: 'FinalCtaOriginal' },
];

sectionFiles.forEach(({ file, name, component }) => {
  const content = fs.readFileSync(file, 'utf8');
  const jsx = `export default function ${component}() {\n  return (\n${cleanJSX(content)}\n  );\n}\n`;
  fs.writeFileSync(path.join(outDir, name), jsx, 'utf8');
  console.log(`Generated ${name}`);
});
