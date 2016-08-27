import should from 'should'
import * as constants from './endpoints'

describe('constants/endpoints', () => {
  it('doesn\'t export DEFAULTS', (done) => {
    constants.should.not.have.property('DEFAULTS')
    should.not.exist(constants.DEFAULTS)
    done()
  })

  it('exports PLAYER_PROFILE', (done) => {
    constants.should.have.property('PLAYER_PROFILE')
    should.exist(constants.PLAYER_PROFILE)
    done()
  })

  it('exports ALL_PLAYERS', (done) => {
    constants.should.have.property('ALL_PLAYERS')
    should.exist(constants.ALL_PLAYERS)
    done()
  })
})
