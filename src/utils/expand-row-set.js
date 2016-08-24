/**
 * Expand a row set by changing indices to the respective header.
 * @param  {string[]}   headers Headers mapping to the row set arrays
 * @param  {string[][]} rowSet  Rows of data to be mapped
 * @return {Object[]}           Rows with indices mapped to the respective header element
 */
function expandRowSet (headers, rowSet) {
  return rowSet.map((row, i) => {
    let result = {}

    row.forEach((value, j) => {
      let key = headers[j].toLowerCase()
      result[key] = value
    })

    return result
  })
}

export default expandRowSet
