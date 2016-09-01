import should from 'should'
import * as constants from './endpoints'

describe('constants/endpoints', () => {
  it('should not export DEFAULTS', (done) => {
    constants.should.not.have.property('DEFAULTS')
    should.not.exist(constants.DEFAULTS)
    done()
  })
})
