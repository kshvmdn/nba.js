import should from 'should'
import getJson from './getJson'

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

describe('utils.getJson', () => {
  it('returns response/error as a Promise', (done) => {
    let request = getJson(endpoint, { query })
    request.should.be.Promise()
    done()
  })

  it('resolves to JSON response', (done) => {
    getJson(endpoint, { query }).then((res) => {
      should.exist(res)
      res.should.have.property('body')
      done()
    })
  })

  it('throws 400 on invalid request', (done) => {
    getJson(endpoint, { query: {} }).catch((err) => {
      should.exist(err)
      err.statusCode.should.equal(400)
      done()
    })
  })
})
