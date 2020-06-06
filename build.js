const ls = require('readdir').readSync
const writeJson = require('write-json-file')

const vids = ls('public/videos/', ['*.mp4'])

writeJson('data/videos.json', vids)
