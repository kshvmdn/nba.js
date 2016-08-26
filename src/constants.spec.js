import should from 'should'
import * as constants from './constants'

describe('constants', () => {
  it('exports BASE_URL', (done) => {
    constants.BASE_URL.should.not.be.empty()
    constants.BASE_URL.should.startWith('http')
    constants.BASE_URL.should.endWith('com')
    done()
  })

  it('exports QUERY_DEFAULTS', (done) => {
    constants.QUERY_DEFAULTS.should.exist
    constants.QUERY_DEFAULTS.should.be.type('object')
    constants.QUERY_DEFAULTS.should.have.property('season')
    done()
  })
})
