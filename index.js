#!/usr/bin/env node

const endMss = `\n\n\n> ¯\\_(ツ)_/¯\n> I told you that it was useless!\n> no?\n> 🤣🤣🤣\n\n`;

process.stdin.pipe(process.stdout);
process.on('SIGINT', () => {
  console.log(endMss);
  process.exit(0);
});
