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

describe('utils/getJson', () => {
  it('should return response/error as a Promise', (done) => {
    let request = getJson(endpoint, { query })
    request.should.be.Promise()
    done()
  })

  it('should respond with response/error', (done) => {
    let request = getJson(endpoint, { query })

    request.then(res => {
      should.exist(res)
      done()
    })

    request.catch(err => {
      should.exist(err)
      done()
    })
  }).timeout(10000)

  it('should throw 400 on invalid request', (done) => {
    let request = getJson(endpoint, { query: {} })

    request.catch((err) => {
      should.exist(err)
      err.statusCode.should.equal(400)
      done()
    })
  })

  it('should support full URLs in addition to endpoints', (done) => {
    let request = getJson('http://stats.nba.com/stats/teamdetails', { query: { teamId: 1610612741 } })

    request.then(res => {
      should.exist(res)
      done()
    })

    request.catch(err => {
      should.exist(err)
      done()
    })
  }).timeout(10000)
})
