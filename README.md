
# lamers/MIME

A simple utility for working with MIME types and file extensions in JavaScript/TypeScript. This module provides two functions:

- `mimeType`: Determines the MIME type of a file based on its extension.
- `extension`: Retrieves the file extension associated with a specific MIME type.

## Features

- Easily map file extensions to MIME types.
- Supports custom mappings via the `MIMETYPES` object.
- Handles unknown MIME types or extensions gracefully with fallback behavior.

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [mimeType](#mimetype)
  - [extension](#extension)
- [Examples](#examples)
- [License](#license)

---

## Installation

To use this utility, include it in your project:

```bash
npm install lamers-mime
```

---

## Usage

### `mimeType(filename: string): string`

This function determines the MIME type of a file based on its extension. If the extension is not found in the `MIMETYPES` object, it returns a default value of `'application/octet-stream'`.

#### Parameters

- `filename`: The name of the file (string).

#### Returns

- A string representing the MIME type of the file.

#### Example

```javascript
import { mimeType } from './lamers-mime';

console.log(mimeType('picture.jpg')); // Output: 'image/jpeg'
console.log(mimeType('unknownfile.xyz')); // Output: 'application/octet-stream'
```

---

### `extension(mime: string): string | null`

This function retrieves all file extensions associated with a MIME type. If the MIME type is not found, it returns `null`.

#### Parameters

- `mime`: The MIME type to look up (string).

#### Returns

- The file extensions (string[]) or `null` if not found.

#### Example

```javascript
import { extension } from 'lamers-mime';

console.log(extension('image/jpeg')); // Output: ['jpg']
console.log(extension('application/xml')); // Output: null
```

---

## Examples

Here are a few examples to demonstrate how this utility works:

### Example 1: Mapping File Extensions to MIME Types

```javascript
import { mimeType } from './lamers-mime';

console.log(mimeType('document.txt')); // Output: 'text/plain'
console.log(mimeType('image.jpeg'));   // Output: 'image/jpeg'
console.log(mimeType('unknown.ext'));  // Output: 'application/octet-stream'
```

### Example 2: Mapping MIME Types to Extensions

```javascript
import { extension } from './lamers-mime';

console.log(extension('text/plain'));  // Output: ['txt']
console.log(extension('application/json')); // Output: ['json']
console.log(extension('unknown/mime')); // Output: null
```

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contributing

Contributions are welcome! If you have suggestions, bug fixes, or improvements, please create a pull request or open an issue.

---

## Contact

If you have any questions or feedback, feel free to reach out via GitHub issues or email.
