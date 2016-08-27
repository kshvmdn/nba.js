import should from 'should'
import * as constants from './endpoints'

describe('constants/endpoints', () => {
  it('exports PLAYER_PROFILE', (done) => {
    constants.should.have.property('PLAYER_PROFILE')
    should.exist(constants.PLAYER_PROFILE)
    done()
  })

  it('doesn\'t export DEFAULTS', (done) => {
    constants.should.not.have.property('DEFAULTS')
    should.not.exist(constants.DEFAULTS)
    done()
  })
})
