import should from 'should'

import * as e from './'

describe('endpoints/index', () => {
  it('should export `data` and `stats` objects', (done) => {
    e.should.have.property('data')
    e.should.have.property('stats')
    done()
  })
})
