import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url) // get the resolved path to the file
const __dirname = path.dirname(__filename) // get the name of the directory

export function getSbi() {
  const sbis = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, '../data/dev/sbi.json'), 'utf8')
  )
  return sbis[Math.floor(Math.random() * sbis.length)]
}

export function getCrn() {
  const crns = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, '../data/dev/crn.json'), 'utf8')
  )
  return crns[Math.floor(Math.random() * crns.length)]
}

export function getLandData() {
  const landdata = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, '../data/dev/land.json'), 'utf8')
  )
  return landdata[Math.floor(Math.random() * landdata.length)]
}

export function getSbiCrnPair() {
  const sbiCrns = JSON.parse(
    fs.readFileSync(
      path.resolve(__dirname, '../data/dev/sbi-crn-pair.json'),
      'utf8'
    )
  )
  return sbiCrns[Math.floor(Math.random() * sbiCrns.length)]
}
