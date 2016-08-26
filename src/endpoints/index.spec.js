import should from 'should'
import * as endpoints from '.'

describe('endpoints.index', () => {
  it('exports playerProfile', (done) => {
    endpoints.should.have.property('playerProfile')
    endpoints.playerProfile.should.exist
    done()
  })
})
