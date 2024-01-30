const fs = require('fs')
const path = require('path')
const uploadConfig = require('../config/upload')

class DiskStorage {
    async saveFile(file) {
        await fs.promises.rename(
            path.resolve(uploadConfig.TMP_FOLDER, file), // onde o arquivo está
            path.resolve(uploadConfig.UPLOADS_FOLDER, file), // onde o arquivo vai ficar
        )

        return file
    }

    async deleteFile(file) {
        const filePath = path.resolve(uploadConfig.UPLOADS_FOLDER, file) // onde o arquivo está

        try {
            await fs.promises.stat(filePath)
        } catch (error) {
            return
        }

        await fs.promises.unlink(filePath) // função que remove o arquivo
    }
}

module.exports = DiskStorage