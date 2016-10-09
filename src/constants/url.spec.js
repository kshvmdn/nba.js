import should from 'should'
import * as constants from './url'

describe('constants/url', () => {
  it('should export URL object', (done) => {
    constants.should.not.be.empty()
    constants.should.have.property('data')
    constants.should.have.property('stats')
    done()
  })
})
