# Iconic Comments

A VSCode extension that provides emoji-powered comment snippets for better code documentation and organization. Transform your code comments with expressive emojis that make your code more readable and maintainable.

Made by [Soumya Darshan Rauth](https://soumya-rauth.cyou). Read [how Iconic Comments make code scannable in practice](https://soumya-rauth.cyou/blog/iconic-comments-in-practice).

## Features

- 🎯 **30+ Comment Snippets** - Comprehensive set of emoji-powered comment templates
- 🚀 **Quick Access** - Type `ii.` followed by any prefix to get instant suggestions
- 📝 **Multiple Languages** - Works with TypeScript, JavaScript, TSX, and JSX files
- 🎨 **Visual Organization** - Use emojis to categorize and highlight different types of comments
- 📋 **Built-in Cheatsheet** - Access the complete list of snippets via command palette

## Demo

![Iconic Comments Demo](images/iconic_comments.gif)

## Installation

### From VSCode Marketplace
1. Open VSCode
2. Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X)
3. Search for "Iconic Comments"
4. Click Install

### From VSIX Package
1. Download the `.vsix` file from the releases page
2. Open VSCode
3. Go to Extensions → More Actions → Install from VSIX
4. Select the downloaded file

## Usage

### Basic Usage
Type any of the following prefixes and press `Tab` to expand:

#### Status Comments
- `ii.ok` → `// ✅ Success message`
- `ii.info` → `// ℹ️ Informational note`
- `ii.warning` → `// ⚠️ Warning message`
- `ii.error` → `// ❌ Error message`

#### Development Comments
- `ii.bug` → `// 🐞 BUG: Bug description`
- `ii.fix` → `// 🔧 FIX: Fix description`
- `ii.idea` → `// 💡 IDEA: Idea description`
- `ii.note` → `// 📝 NOTE: General note`
- `ii.docs` → `// 📚 DOCS: Documentation reference`
- `ii.test` → `// 🧪 TEST: Testing note`
- `ii.question` → `// ❓ QUESTION: Open question`
- `ii.deprecated` → `// ⛔ DEPRECATED: Deprecation notice`
- `ii.refactor` → `// ♻️ REFACTOR: Refactor reminder`
- `ii.review` → `// 👀 REVIEW: Needs review`
- `ii.blocked` → `// 🚫 BLOCKED: Blocked by something`
- `ii.wip` → `// 🏗️ WIP: Work in progress`
- `ii.hotfix` → `// 🔥 HOTFIX: Hot/urgent issue`

#### Technical Comments
- `ii.security` → `// 🛡️ SECURITY: Security concern`
- `ii.performance` → `// ⚡ PERFORMANCE: Performance hint`
- `ii.api` → `// 🔌 API: API-related note`
- `ii.database` → `// 🛢️ DATABASE: Database-related note`
- `ii.ui` → `// 🎨 UI: UI note`
- `ii.ux` → `// 🧭 UX: UX note`
- `ii.log` → `// 📋 LOG: Logging note`
- `ii.config` → `// ⚙️ CONFIG: Configuration note`
- `ii.package` → `// 📦 PACKAGE: Package/dependency note`
- `ii.env` → `// 🌱 ENV: Environment variable note`

#### Organization Comments
- `ii.link` → `// 🔗 Reference link`
- `ii.pin` → `// 📌 Important pinned note`
- `ii.time` → `// ⏱️ TIME: Timing/SLA note`
- `ii.cleanup` → `// 🧹 CLEANUP: Code cleanup task`
- `ii.todo` → `// ✅ TODO: TODO item`

#### Special Comments
- `ii.banner` → Creates a banner block comment
- `ii.todo.wrap` → Wraps selected text with TODO block
- `ii.region` → `// #region Region name`
- `ii.endregion` → `// #endregion`
- `ii.icons` → Inserts the complete cheatsheet as a comment

### Command Palette
Access the cheatsheet anytime by:
1. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
2. Type "Iconic Comments: Show Cheatsheet"
3. Press Enter

## Examples

### Before
```typescript
// This function needs optimization
function processData(data: any[]) {
  // TODO: Add error handling
  // This is a bug that needs fixing
  return data.map(item => item.value);
}
```

### After
```typescript
// ⚡ PERFORMANCE: This function needs optimization
function processData(data: any[]) {
  // ✅ TODO: Add error handling
  // 🐞 BUG: This is a bug that needs fixing
  return data.map(item => item.value);
}
```

### Banner Example
```typescript
/* ====================================================
   User Authentication Module
   ==================================================== */

// 🛡️ SECURITY: Validate user credentials
function authenticateUser(username: string, password: string) {
  // 🔌 API: Call authentication service
  // 📋 LOG: Log authentication attempts
}
```

## Supported Languages

- TypeScript (`.ts`)
- TypeScript React (`.tsx`)
- JavaScript (`.js`)
- JavaScript React (`.jsx`)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

**GitHub Repository**: [https://github.com/soumyaRauth/iconic-comments](https://github.com/soumyaRauth/iconic-comments)

## Development

### Prerequisites
- Node.js
- npm, pnpm, or bun
- VSCode

### Setup
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   # or
   bun install
   ```
3. Open in VSCode
4. Press `F5` to run the extension in a new Extension Development Host window

### Building
```bash
npm run compile
# or
pnpm run compile
# or
bun run compile
```

### Packaging
```bash
npm run package
# or
pnpm run package
# or
bun run package
```

## Author

**Soumya Darshan Rauth**: [soumya-rauth.cyou](https://soumya-rauth.cyou) · [GitHub](https://github.com/soumyaRauth)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a list of changes and version history.

## Issues

If you encounter any issues or have suggestions, please file an issue on the [GitHub repository](https://github.com/soumyaRauth/iconic-comments/issues).

## Acknowledgments

- Inspired by the need for better code documentation
- Emojis make code more expressive and easier to scan
- Built with ❤️ for the developer community
