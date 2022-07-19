const fs = require('fs')
const path = require('path')
const ccase = require('change-case')
var appRoot = require('app-root-path')

const getFilesRecursively = (directory, files = []) => {
  const filesInDirectory = fs.readdirSync(directory)
  for (const file of filesInDirectory) {
    if (file === 'index.md') continue
    const absolute = path.join(directory, file)
    if (fs.statSync(absolute).isDirectory()) {
      getFilesRecursively(absolute, files)
    } else {
      files.push(absolute)
    }
  }
}

let docSortedTemplate = {
  MAIN: null,
  FORMS: null,
  CONTENT: null,
  ACTIONS: null,
  NAVIGATION: null,
  OTHER: null,
  OVERAYS: null,
  PICKERS: null,
  HELPERS: null,
  STATUS: null,
  GENERIC: null,
}
/**
 * @function getDocMap
 *
 * @returns {object} components in the 'pages/docs/' folder
 * @author Ajeya Bhat <ajeyabhat.off@gmail.com>
 */
const getDocMap = () => {
  const docPathPrefix = appRoot.path + '/pages/docs/'
  const docFiles = []
  const DocMap = {}
  getFilesRecursively(docPathPrefix, docFiles)
  docFiles.forEach((file) => {
    const pathChunk = String(file).replace(docPathPrefix, '').replace('.md', '')
    const pathArray = pathChunk.split('/')
    if (pathArray.length < 2) {
      if (!DocMap.hasOwnProperty('MAIN')) DocMap['MAIN'] = []
      DocMap['MAIN'].push({
        name: ccase.capitalCase(pathArray[0].replace('-', ' ')),
        pathname: pathChunk,
      })
    }
    //assuming only 1 level of nesting
    else if (pathArray.length === 2) {
      uCategory = pathArray[0].toUpperCase()
      if (!DocMap.hasOwnProperty(uCategory)) DocMap[uCategory] = []
      DocMap[uCategory].push({
        name: ccase.capitalCase(pathArray[1].replace('-', ' ')),
        pathname: pathChunk,
      })
    }
  })
  for (let i of Object.keys(docSortedTemplate)) {
    if (DocMap.hasOwnProperty(i)) docSortedTemplate[i] = DocMap[i]
    else delete docSortedTemplate[i]
  }
  return docSortedTemplate
}
console.log(getDocMap())
module.exports = {
  getDocMap: getDocMap,
}
