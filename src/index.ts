import axios from 'axios';

async function getBase64From(url: string): Promise<string> {
    try {
        // Download data from the URL
        const response = await axios.get(url, { responseType: 'arraybuffer' });

        // Convert the downloaded data to base64 string
        const base64String = Buffer.from(response.data, 'binary').toString('base64');

        return base64String;
    } catch (error) {
        console.error('Error downloading or converting to base64:', error);
        throw error;
    }
}
