import mongoose from 'mongoose';

const url = "http://localhost:8000";

let gfs;

const conn = mongoose.connection;

conn.once('open', () => {
    gfs = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'fs'
    });
});

export const uploadFile = async (request, response) => {
    if (!request.file) {
        return response.status(404).json('File not found');
    }

    const imageUrl = `${url}/file/${request.file.filename}`;

    return response.status(200).json(imageUrl);
};

export const getImage = async (request, response) => {
    try {
        const filesCollection = conn.db.collection('fs.files');
        const file = await filesCollection.findOne({ filename: request.params.filename });

        if (!file) {
            return response.status(404).json('File not found');
        }

        const readStream = gfs.openDownloadStream(file._id);
        readStream.on('error', (error) => {
            console.log('Error reading stream:', error);
            return response.status(500).json('Internal server error');
        });

        readStream.on('data', (chunk) => {
            response.write(chunk);
        });

        readStream.on('end', () => {
            response.end();
        });
    } catch (error) {
        console.log('Error:', error);
        return response.status(500).json('Internal server error');
    }
};
