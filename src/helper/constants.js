export const DEFAULT_APP_CONFIG = {
    routeMode: 'hash',
    base:false,
    path:[],
    domID:'',
    customProps:{}
};
export const OPTS_CONFIG = {
    fetch:window.fetch
};
export const ALL_SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
export const SCRIPT_TAG_REGEX = /<(script)\s+((?!type=('|')text\/ng-template\3).)*?>.*?<\/\1>/is;
export const SCRIPT_SRC_REGEX = /.*\ssrc=('|")?([^>'"\s]+)/;
export const SCRIPT_ENTRY_REGEX = /.*\sentry\s*.*/;
export const LINK_TAG_REGEX = /<(link)\s+.*?>/gi;
export const LINK_IGNORE_REGEX = /.*ignore\s*.*/;
export const STYLE_TAG_REGEX = /<style[^>]*>[\s\S]*?<\/style>/gi;
export const STYLE_TYPE_REGEX = /\s+rel=('|")?stylesheet\1.*/;
export const STYLE_HREF_REGEX = /.*\shref=('|")?([^>'"\s]+)/;
export const STYLE_IGNORE_REGEX = /<style(\s+|\s+.+\s+)ignore(\s*|\s+.*)>/i;
export const HTML_COMMENT_REGEX = /<!--([\s\S]*?)-->/g;
export const SCRIPT_IGNORE_REGEX = /<script(\s+|\s+.+\s+)ignore(\s*|\s+.*)>/i;
