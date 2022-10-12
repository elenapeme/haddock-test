import fs from 'fs'

export const readJSON = () => {
    const rawdata: any = fs.readFileSync('./src/assets/Products.json')
    return JSON.parse(rawdata)
}