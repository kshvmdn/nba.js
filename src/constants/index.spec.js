import should from 'should'
import * as constants from '.'

describe('constants', () => {
  it('exports BASE_URL', (done) => {
    should.exist(constants.BASE_URL)
    constants.BASE_URL.should.not.be.empty()
    constants.BASE_URL.should.startWith('http')
    constants.BASE_URL.should.endWith('com')
    done()
  })

  it('exports ENDPOINTS', (done) => {
    constants.should.have.property('ENDPOINTS')
    should.exist(constants.ENDPOINTS)
    done()
  })
})
