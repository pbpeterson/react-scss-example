const fs = require("fs")

const filesPath = "src/styles/theme"

const themeFiles = fs.readdirSync(filesPath, {
  encoding: "utf-8"
}).map((filename) => {
  return `@import "@/styles/theme/${filename}";`
}).join(" ")

module.exports = {
  themeFiles
}