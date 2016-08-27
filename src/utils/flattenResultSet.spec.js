import should from 'should'
import flattenResultSet from './flattenResultSet'

let headers = ['RANK', 'PLAYER_ID', 'PLAYER', 'TEAM_ID', 'TEAM_ABBREVIATION', 'TEAM_NAME', 'JERSEY_NUM', 'PLAYER_POSITION', 'PTS']
let rowSet = [
  [1, 201939, 'Stephen Curry', 1610612744, 'GSW', 'Golden State Warriors', '30', 'G', 30.1],
  [2, 201935, 'James Harden', 1610612745, 'HOU', 'Houston Rockets', '13', 'G', 29.0]
]

describe('utils/flattenResultSet', () => {
  it('returns a Promise', (done) => {
    let flattened = flattenResultSet({ headers, rowSet })
    flattened.should.be.Promise()
    done()
  })

  it('doesn\'t alter values', (done) => {
    flattenResultSet({ headers, rowSet }).then((flattened) => {
      for (let i in rowSet) {
        Object.keys(flattened.rows[i]).map(v => flattened.rows[i][v]).should.eql(rowSet[i])
      }

      done()
    })
  })

  it('has lowercase keys', (done) => {
    flattenResultSet({ headers, rowSet }).then((flattened) => {
      for (let i in rowSet) {
        Object.keys(flattened.rows[i]).every(v => v === v.toLowerCase()).should.be.true()
      }

      done()
    })
  })

  it('includes name key (when it exists)', (done) => {
    flattenResultSet({ name: 'test', headers, rowSet }).then((flattened) => {
      flattened.name.should.equal('test')
      done()
    })
  })

  it('flattens multiple sets and returns all as an array', (done) => {
    flattenResultSet([{ headers, rowSet }, { headers, rowSet }]).then((flattened) => {
      flattened.should.be.an.Array
      flattened.should.have.length(2)
      done()
    })
  })
})
