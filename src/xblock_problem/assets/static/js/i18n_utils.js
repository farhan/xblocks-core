/**
 * Translation functions for this block's JS.
 *
 * Uses the block's own catalog (`window.XBlockProblemI18N`, set by `i18n_js_namespace` and loaded
 * by the block's view before this bundle). Falls back to the platform's global catalog, and
 * then to the untranslated string.
 *
 * Webpack's ProvidePlugin injects these wherever the bundle uses `gettext` or `ngettext`, so
 * call sites stay unchanged.
 */

function catalog() {
    return window.XBlockProblemI18N || window;
}

export function gettext(msgid) {
    const ns = catalog();
    return ns.gettext ? ns.gettext(msgid) : msgid;
}

export function ngettext(singular, plural, count) {
    const ns = catalog();
    if (ns.ngettext) {
        return ns.ngettext(singular, plural, count);
    }
    return count === 1 ? singular : plural;
}
