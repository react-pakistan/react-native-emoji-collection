find . -name '.DS_Store' -type f -delete
rm ./src/xml/*.*

node scripts/generate-emojis.js
