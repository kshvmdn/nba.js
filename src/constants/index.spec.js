import should from 'should'
import * as constants from '.'

describe('constants', () => {
  it('exports BASE_URL', (done) => {
    constants.BASE_URL.should.not.be.empty()
    constants.BASE_URL.should.startWith('http')
    constants.BASE_URL.should.endWith('com')
    done()
  })

  it('exports ENDPOINTS', (done) => {
    constants.should.have.property('ENDPOINTS')
    constants.ENDPOINTS.should.exist
    done()
  })
})
