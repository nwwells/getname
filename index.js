#!/usr/bin/env node

const fs = require('fs');
const db = require('./db');
const basedir = require('xdg').basedir;

const indexFile = basedir.dataPath('getname.json');

let indexes = {}
try {
  const indexJSON = fs.readFileSync(indexFile, 'utf8');
  indexes = JSON.parse(indexJSON);
} catch (error) {
  // file doesn't exist or isn't valid JSON
  // swallow and start with 0 index
}
if (!indexes.starwars) indexes.starwars = 0

console.log(db.starwars[indexes.starwars]);

indexes.starwars += 1;

fs.writeFileSync(indexFile, JSON.stringify(indexes), { encoding: 'utf8' });
