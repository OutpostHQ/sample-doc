const fs = require('fs')
const path = require('path')
const ccase = require('change-case')
var appRoot = require('app-root-path')
/**
 *
 * @param {*} directory directory to search in
 * @param {*} files array to store the required paths in
 * @deprecated
 */
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

/**
 *
 * @param {*} directory directory to search
 * @returns {string[]}
 */
const getFilesTwoDeep = (directory) => {
  //empty path array
  let files = []
  //walk docs folder
  const filesInDirectory = fs.readdirSync(directory)
  for (const file of filesInDirectory) {
    if (file === 'index.md') continue
    const absolute = path.join(directory, file)
    //go into category
    if (fs.statSync(absolute).isDirectory()) {
      const filesInDeepDirectory = fs.readdirSync(absolute)
      for (const deepFile of filesInDeepDirectory) {
        const newAbsolute = path.join(absolute, deepFile)
        if (fs.statSync(newAbsolute).isDirectory()) {
          files.push(newAbsolute)
        }
      }
    } //main pages
    else files.push(absolute)
  }
  return files
}
// console.log(getFilesTwoDeep(appRoot.path + '/pages/docs/'))

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
 * @function getDocPathUtils
 *
 * @returns {object} map and array of components in the 'pages/docs/' folder
 * @author Ajeya Bhat <ajeyabhat.off@gmail.com>
 */
const getDocPathUtils = () => {
  const docPathPrefix = appRoot.path + '/pages/docs/'
  const docFiles = getFilesTwoDeep(docPathPrefix)
  const DocMap = {}
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
        pathname: pathChunk + '/usage',
      })
    }
  })
  for (let i of Object.keys(docSortedTemplate)) {
    if (DocMap.hasOwnProperty(i)) docSortedTemplate[i] = DocMap[i]
    else delete docSortedTemplate[i]
  }
  const DocArray = []
  for (let key of Object.keys(docSortedTemplate))
    DocArray.push(...docSortedTemplate[key])
  return {
    docsmap: JSON.stringify(docSortedTemplate),
    docsarray: JSON.stringify(DocArray),
  }
}
console.log(getDocPathUtils())
module.exports = {
  getDocPathUtils: getDocPathUtils,
}
