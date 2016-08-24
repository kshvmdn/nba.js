import should from 'should'
import expandRowSet from './expand-row-set'

let headers = ['RANK', 'PLAYER_ID', 'PLAYER', 'TEAM_ID', 'TEAM_ABBREVIATION', 'TEAM_NAME', 'JERSEY_NUM', 'PLAYER_POSITION', 'PTS']
let rowSet = [
  [1, 201939, 'Stephen Curry', 1610612744, 'GSW', 'Golden State Warriors', '30', 'G', 30.1],
  [2, 201935, 'James Harden', 1610612745, 'HOU', 'Houston Rockets', '13', 'G', 29.0]
]

describe('expandRowSet', () => {
  it('expands set and doesn\'t alter values', (done) => {
    let flattened = expandRowSet(headers, rowSet)

    for (let i in rowSet) {
      Object.keys(flattened[i]).map(v => flattened[i][v]).should.eql(rowSet[i])
    }

    done()
  })

  it('expands set and has lowercase keys', (done) => {
    let flattened = expandRowSet(headers, rowSet)

    for (let i in rowSet) {
      Object.keys(flattened[i]).every(v => v === v.toLowerCase()).should.be.true()
    }

    done()
  })
})
