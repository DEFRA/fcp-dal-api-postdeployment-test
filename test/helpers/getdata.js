const csv = require('csv-parser')
const fs = require('fs')
const sbiResults = []
const crnResults = []
const landResults = []
const sbiCrnPairResults = []

fs.createReadStream('../data/dev/sbi.csv')
  .pipe(csv())
  .on('data', (data) => sbiResults.push(data))
  .on('end', () => {
    //  console.log(sbiResults)
    // [
    //   { NAME: 'Daffy Duck', AGE: '24' },
    //   { NAME: 'Bugs Bunny', AGE: '22' }
    // ]
  })

fs.createReadStream('../data/dev/crn.csv')
  .pipe(csv())
  .on('data', (data) => crnResults.push(data))
  .on('end', () => {
    //  console.log(crnResults)
    // [
    //   { NAME: 'Daffy Duck', AGE: '24' },
    //   { NAME: 'Bugs Bunny', AGE: '22' }
    // ]
  })

fs.createReadStream('../data/dev/land.csv')
  .pipe(csv())
  .on('data', (data) => landResults.push(data))
  .on('end', () => {
    //  console.log(landResults)
    // [
    //   { NAME: 'Daffy Duck', AGE: '24' },
    //   { NAME: 'Bugs Bunny', AGE: '22' }
    // ]
  })

fs.createReadStream('../data/dev/sbi-crn-pair.csv')
  .pipe(csv())
  .on('data', (data) => sbiCrnPairResults.push(data))
  .on('end', () => {
    //  console.log(sbiCrnPairResults)
    // [
    //   { NAME: 'Daffy Duck', AGE: '24' },
    //   { NAME: 'Bugs Bunny', AGE: '22' }
    // ]
  })

export function getSbi() {
  return sbiResults[Math.floor(Math.random() * sbiResults.length)].SBI
}

export function getCrn() {
  return crnResults[Math.floor(Math.random() * crnResults.length)].CRN
}

export function getLandData() {
  return landResults[Math.floor(Math.random() * landResults.length)]
}

export function getSbiCrnPair() {
  return sbiCrnPairResults[Math.floor(Math.random() * sbiCrnPairResults.length)]
}
