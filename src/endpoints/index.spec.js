import should from 'should'
import * as endpoints from '.'

describe('endpoints/index', () => {
  it('exports allPlayers', (done) => {
    endpoints.should.have.property('allPlayers')
    should.exist(endpoints.allPlayers)
    done()
  })

  it('exports playerProfile', (done) => {
    endpoints.should.have.property('playerProfile')
    should.exist(endpoints.playerProfile)
    done()
  })
})

describe('endpoints/index playerProfile', () => {
  it('returns Promise', (done) => {
    endpoints.playerProfile().should.be.Promise()
    done()
  })

  it('returns error-first callback', (done) => {
    endpoints.playerProfile((err, res) => {
      // playerProfile defaults should throw an error (playerID -> 0)
      should.exist(err)
      should.not.exist(res)
      done()
    })
  })
})

describe('endpoints/index allPlayers', () => {
  it('returns Promise', (done) => {
    endpoints.allPlayers().should.be.Promise()
    done()
  })

  it('returns error-first callback', (done) => {
    endpoints.allPlayers((err, res) => {
      should.not.exist(err)
      should.exist(res)
      done()
    })
  })
})
