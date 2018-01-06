/**
 * Flatten a result set by mapping each of it's rows' indices to
 * the respective header item.
 *
 * @param {Object[]} resultSets - Result set(s) to be flattened
 * @return {Promise}
 */
export default function flattenResultSet(resultSets) {
  return new Promise((resolve, reject) => {
    let flattened = {};

    resultSets.forEach((result, i) => {
      flattened[result.name] = result.rowSet.map((row, j) => {
        let mappedRow = {};

        row.forEach((value, k) => {
          let key = result.headers[k].toLowerCase();
          mappedRow[key] = value;
        });

        return mappedRow;
      });
    });

    return resolve(flattened);
  });
}
