# Changelog

All notable changes to the Iconic Comments extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-09-22

### Added
- Initial release of Iconic Comments extension
- 30+ emoji-powered comment snippets for TypeScript, JavaScript, TSX, and JSX
- Support for multiple comment types:
  - Status comments (✅, ℹ️, ⚠️, ❌)
  - Development comments (🐞, 🔧, 💡, 📝, 📚, 🧪, ❓, ⛔, ♻️, 👀, 🚫, 🏗️, 🔥)
  - Technical comments (🛡️, ⚡, 🔌, 🛢️, 🎨, 🧭, 📋, ⚙️, 📦, 🌱)
  - Organization comments (🔗, 📌, ⏱️, 🧹, ✅)
  - Special comments (banner blocks, TODO wrapping, regions)
- Built-in cheatsheet command accessible via Command Palette
- Comprehensive documentation and examples
- Support for all major JavaScript/TypeScript file types

### Features
- Quick snippet expansion with `ii.` prefix
- Tab completion for all snippets
- Visual emoji categorization for better code organization
- Banner block comments for section headers
- TODO wrapping functionality for selected text
- Region folding support
- Complete cheatsheet integration

### Technical Details
- VSCode extension manifest with proper metadata
- TypeScript source code with command registration
- JSON snippet definitions for all supported languages
- SVG icon with fallback support
- MIT license
- Comprehensive README with usage examples
