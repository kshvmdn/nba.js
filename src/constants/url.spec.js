import should from 'should'
import * as constants from './url'

describe('constants/url', () => {
  it('should export URL object', (done) => {
    constants.URL.should.not.be.empty()
    constants.URL.should.have.property('data')
    constants.URL.should.have.property('stats')
    done()
  })
})
