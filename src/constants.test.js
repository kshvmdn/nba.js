import should from 'should'
import * as constants from './constants'

describe('constants', () => {
  it('should export BASE_URL', (done) => {
    constants.BASE_URL.should.not.be.empty()
    constants.BASE_URL.should.startWith('http')
    constants.BASE_URL.should.endWith('com')
    done()
  })
})
