import should from 'should'
import getJson from './get-json'

let endpoint = '/stats/homepagev2'
let query = {
  GameScope: 'Season',
  LeagueID: '00',
  PlayerOrTeam: 'Player',
  PlayerScope: 'All Players',
  Season: '2015-16',
  SeasonType: 'Regular Season',
  StatType: 'Traditional'
}

describe('getJson', () => {
  it('returns JSON response', (done) => {
    getJson(endpoint, { query }, (err, res) => {
      should.exist(res)
      should.not.exist(err)
      done()
    })
  })

  it('returns error for invalid request', (done) => {
    getJson(endpoint, { query: {} }, (err, res) => {
      should.not.exist(res)
      should.exist(err)
      err.statusCode.should.equal(400)
      done()
    })
  })

  it('allows callback to be provided as 2nd argument', (done) => {
    getJson(endpoint, (err, res) => {
      // will throw a ParseError since /stats/homepagev2 w. no query returns
      // HTML (???), not JSON (thx NBA, gr8 API)
      should.not.exist(res)
      should.exist(err)
      done()
    })
  })
})
