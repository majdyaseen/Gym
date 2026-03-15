/**
 * IRONLOG — Persistent Save Data
 * ================================
 * This file stores your gym progress so it survives app updates.
 *
 * HOW TO USE:
 *   1. Keep this file alongside ironlog.html
 *   2. ironlog.html will load this file via <script src="ironlog-data.js">
 *   3. When you get a new version of ironlog.html, just keep this file — your data is safe.
 *   4. To back up: copy this file somewhere safe.
 *   5. To reset: delete or clear the IRONLOG_SAVED_DATA object below.
 *
 * DATA IS ALSO saved to localStorage as a backup.
 * This file is only written manually when you click "Export Save" in the app.
 */

// This will be populated by the app's export feature.
// You can also manually paste exported data here.
var IRONLOG_SAVED_DATA = null;
