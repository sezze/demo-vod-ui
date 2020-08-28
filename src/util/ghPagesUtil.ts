/**
 * https://github.com/rafgraph/spa-github-pages
 */

export function ghPagesRedirect(l: Location) {
  if (l.search) {
    const q: { [key: string]: string | undefined } = {};
    l.search
      .slice(1)
      .split('&')
      .forEach((v) => {
        const a = v.split('=');
        q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
      });

    if (q.p !== undefined) {
      window.history.replaceState(
        null,
        '',
        l.pathname.slice(0, -1) + (q.p || '') + (q.q ? `?${q.q}` : '') + l.hash
      );
    }
  }
}
