# Image Text Extractor 📸📝

![GitHub release](https://img.shields.io/badge/release-latest-blue.svg) [![GitHub stars](https://img.shields.io/github/stars/milanesaopa/image-text-extractor.svg)](https://github.com/milanesaopa/image-text-extractor/stargazers) [![GitHub forks](https://img.shields.io/github/forks/milanesaopa/image-text-extractor.svg)](https://github.com/milanesaopa/image-text-extractor/network)

Welcome to the **Image Text Extractor**! This package is part of the Xcrap framework. It simplifies the process of extracting text from images using the `node-tesseract-ocr` library. Whether you are working on a web application, a data scraping project, or simply need to convert images into text, this tool is designed for you.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

## Features ✨

- **Easy Integration**: Seamlessly integrate into your JavaScript or TypeScript projects.
- **High Accuracy**: Utilizes the powerful `node-tesseract-ocr` library for reliable text extraction.
- **Cross-Platform**: Works on various platforms, making it versatile for different development environments.
- **Lightweight**: Minimal dependencies ensure a smooth experience.
- **Active Development**: Regular updates and improvements based on community feedback.

## Installation ⚙️

To get started, you need to install the package. You can do this using npm or yarn. Here’s how:

### Using npm

```bash
npm install image-text-extractor
```

### Using yarn

```bash
yarn add image-text-extractor
```

Once installed, you can begin using the extractor in your project.

## Usage 🚀

Here’s a simple example to get you started. 

### Basic Example

```javascript
const { extractText } = require('image-text-extractor');

const imagePath = 'path/to/your/image.png';

extractText(imagePath)
  .then(text => {
    console.log('Extracted Text:', text);
  })
  .catch(err => {
    console.error('Error extracting text:', err);
  });
```

### Advanced Options

You can customize the extraction process with various options. Here’s an example:

```javascript
const { extractText } = require('image-text-extractor');

const imagePath = 'path/to/your/image.png';
const options = {
  lang: 'eng', // Language for text extraction
  oem: 1, // OCR Engine Mode
  psm: 3 // Page Segmentation Mode
};

extractText(imagePath, options)
  .then(text => {
    console.log('Extracted Text:', text);
  })
  .catch(err => {
    console.error('Error extracting text:', err);
  });
```

### Supported Formats

The extractor supports various image formats including:

- PNG
- JPEG
- BMP
- TIFF

Make sure your images are in one of these formats for optimal results.

## Contributing 🤝

We welcome contributions! If you want to help improve the Image Text Extractor, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your branch to your forked repository.
5. Create a pull request.

We appreciate all contributions, big or small!

## License 📄

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Support 💬

For any questions or issues, feel free to open an issue on GitHub. You can also check the [Releases](https://github.com/milanesaopa/image-text-extractor/releases) section for the latest updates and downloads.

## Links 🌐

- [GitHub Repository](https://github.com/milanesaopa/image-text-extractor)
- [Releases](https://github.com/milanesaopa/image-text-extractor/releases)

## Conclusion 🎉

Thank you for checking out the Image Text Extractor! We hope this tool helps you in your projects. If you find it useful, please star the repository and share it with others. Happy coding!

---

For the latest releases, visit our [Releases](https://github.com/milanesaopa/image-text-extractor/releases) section. Download the latest version and start extracting text from images today!