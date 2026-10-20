#!/bin/sh
# Regenerates scenes.bundle.js (file:// fallback) and the itch.io zip.
set -e; cd "$(dirname "$0")"
node -e '
const fs=require("fs");const g=JSON.parse(fs.readFileSync("game.json"));const b={"game.json":fs.readFileSync("game.json","utf8")};
for(const f of [...g.scenes,...g.extra])b["scenes/"+f]=fs.readFileSync("scenes/"+f,"utf8");
fs.writeFileSync("scenes.bundle.js","window.VN_BUNDLE="+JSON.stringify(b)+";\n");'
mkdir -p ../dist && rm -f ../dist/amayadori-kashihonya-web.zip
python3 -c "import sys,zipfile,os;z=zipfile.ZipFile('../dist/amayadori-kashihonya-web.zip','w',zipfile.ZIP_DEFLATED)
for a in sys.argv[1:]:
 for r,d,fs in (os.walk(a) if os.path.isdir(a) else [('',[],[a])]):
  [z.write(os.path.join(r,f)) for f in fs]" index.html style.css engine.js game.json scenes.bundle.js scenes README.md LICENSE
echo built
