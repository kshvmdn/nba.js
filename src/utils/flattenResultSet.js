/**
 * Flatten a result set by mapping each of it's rows' indices to
 * the respective header item.
 *
 * @param  {Object|Object[]} resultSets Result set(s) to be flattened
 * @return {Promise}
 */
export default function flattenResultSet (resultSets) {
  return new Promise((resolve, reject) => {
    let isArray = resultSets.constructor === Array

    if (!isArray) resultSets = [resultSets]

    let flattened = resultSets.map((result, i) => {
      let mappedResult = {}

      if (result.name) {
        mappedResult.name = result.name
      }

      mappedResult.rows = result.rowSet.map((row, j) => {
        let mappedRow = {}

        row.forEach((value, k) => {
          let key = result.headers[k].toLowerCase()
          mappedRow[key] = value
        })

        return mappedRow
      })

      return mappedResult
    })

    return resolve(isArray ? flattened : flattened[0])
  })
}
