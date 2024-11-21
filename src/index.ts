import { MIMETYPES } from './mimetypes';
import { extname } from 'path';

/**
  * This function returns the MIME type of a file based on its extension.
  * If the MIME type is not found, it returns 'application/octet-stream'.
  * @param {string} filename - The name of the file.
*/
function mimeType(filename: string): string {
  const ext = extname(filename).replace(/^\./, '').toLowerCase();

  const mime = Object.keys(MIMETYPES).find(key => MIMETYPES[key].includes(ext));

  return mime || 'application/octet-stream';
}

/**
  * This function returns the extension of a file based on its MIME type.
  * If the extension is not found, it returns null.
  * @param {string} mime - The MIME type of the file.
*/
function extension(mime: string): string | null {
  return Object.keys(MIMETYPES).find(key => key === mime) || null;
}

export { mimeType, extension };