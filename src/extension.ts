import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    // Register the cheatsheet command
    const disposable = vscode.commands.registerCommand('iconic-comments.showCheatsheet', () => {
        const cheatsheet = `Iconic Comments Cheatsheet
========================

Basic Comments:
ii.ok         → ✅  Success / done
ii.info       → ℹ️  Informational note
ii.warning    → ⚠️  Warning
ii.error      → ❌  Error / failure

Development:
ii.bug        → 🐞  BUG
ii.fix        → 🔧  FIX
ii.idea       → 💡  IDEA
ii.note       → 📝  NOTE
ii.docs       → 📚  DOCS
ii.test       → 🧪  TEST
ii.question   → ❓  QUESTION
ii.deprecated → ⛔  DEPRECATED
ii.refactor   → ♻️  REFACTOR
ii.review     → 👀  REVIEW
ii.blocked    → 🚫  BLOCKED
ii.wip        → 🏗️  WIP
ii.hotfix     → 🔥  HOTFIX

Technical:
ii.security   → 🛡️  SECURITY
ii.performance→ ⚡  PERFORMANCE
ii.api        → 🔌  API
ii.database   → 🛢️  DATABASE
ii.ui         → 🎨  UI
ii.ux         → 🧭  UX
ii.log        → 📋  LOG
ii.config     → ⚙️  CONFIG
ii.package    → 📦  PACKAGE
ii.env        → 🌱  ENV

Organization:
ii.link       → 🔗  Reference link
ii.pin        → 📌  Pinned note
ii.time       → ⏱️  TIME
ii.cleanup    → 🧹  CLEANUP
ii.todo       → ✅  TODO line

Special:
ii.banner     → Banner block
ii.todo.wrap  → Wrap selection with TODO
ii.region     → #region start
ii.endregion  → #endregion end
ii.icons      → Insert this cheatsheet as comment

Usage: Type any prefix (e.g., 'ii.bug') and press Tab to expand!`;

        vscode.window.showInformationMessage(cheatsheet, { modal: true });
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
