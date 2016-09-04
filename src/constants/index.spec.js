import should from 'should'
import * as constants from './'

describe('constants/index', () => {
  it('should export BASE_URL', (done) => {
    should.exist(constants.BASE_URL)
    constants.BASE_URL.should.not.be.empty()
    constants.BASE_URL.should.startWith('http')
    constants.BASE_URL.should.endWith('com')
    done()
  })

  it('should export ENDPOINTS', (done) => {
    constants.should.have.property('ENDPOINTS')
    should.exist(constants.ENDPOINTS)
    done()
  })
})
