// From:
// https://github.com/mozilla/firefox-health-backend/blob/17fe887be81154013a81af933478da34a2c0ee7d/src/release/updates.js#L24-L30
export async function getUpdates() {
  const result = {};
  for (const channel of ['release', 'beta', 'aurora', 'nightly']) {
    result[channel] = await getUpdate(channel);
  }
  return result;
}
