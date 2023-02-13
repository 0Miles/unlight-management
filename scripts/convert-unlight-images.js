const jpexs = require('jpexs-flash-decompiler')
const path = require('path')
const fs = require('fs')
const shell = require('shelljs')

const projectRootPath = path.resolve(__dirname, '..')

async function convertSwf(sourceFilePath, outputDirPath, items) {
    return new Promise((resolve, reject) => {
        jpexs.export({
            file: sourceFilePath,
            output: outputDirPath,
            items: items
        }, err => {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })
}

async function covertUnlightImages({ startDirPath, outputDirPath, items = [jpexs.ITEM.SHAPE], recursion = true }) {
    if (startDirPath) {
        console.log('check ' + startDirPath)
        const elements = fs.readdirSync(startDirPath)
        for(const element of elements) {
            const elementFullPath = path.join(startDirPath, element)
            const info = fs.statSync(elementFullPath)
            if (info.isDirectory() && recursion) {
                const newOutputDirPath = path.join(outputDirPath, element)
                covertUnlightImages({ startDirPath: elementFullPath, outputDirPath: newOutputDirPath, items, recursion })
            } else {
                const output = path.join(outputDirPath, path.parse(elementFullPath).base)
                if (path.extname(elementFullPath) === '.swf' && !fs.existsSync(output)) {
                    try {
                        await convertSwf(elementFullPath, output, items)
                    } catch (_) {}
                }
            }
        }
    }
}

covertUnlightImages({
    startDirPath: path.join(projectRootPath, 'unlight-images/public/image'),
    outputDirPath: path.join(projectRootPath, 'public/unlight/images/public')
})
covertUnlightImages({
    startDirPath: path.join(projectRootPath, 'unlight-images/data/image'),
    outputDirPath: path.join(projectRootPath, 'public/unlight/images/data')
})

// const assetsList = shell.ls('-R', path.join(projectRootPath, 'public/unlight/images/'))
// assetsList.map(x => x.replace(path.join(projectRootPath, 'public')), '')
// fs.writeFileSync('unlight-images-list.js', 'export const unlightImages = ' + JSON.stringify(assetsList))