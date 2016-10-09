import should from 'should'
import * as constants from './'

describe('constants/index', () => {
  it('should export URL', (done) => {
    should.exist(constants.URL)
    constants.URL.should.not.be.empty()
    constants.URL.should.have.property('data')
    constants.URL.should.have.property('stats')
    done()
  })

  it('should export ENDPOINTS', (done) => {
    constants.should.have.property('ENDPOINTS')
    should.exist(constants.ENDPOINTS)
    done()
  })
})
