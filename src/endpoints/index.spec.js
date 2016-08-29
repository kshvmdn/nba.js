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
