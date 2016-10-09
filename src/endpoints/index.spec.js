import should from 'should'

import * as e from './'
import { ENDPOINTS as c } from './../constants'

describe('endpoints/index', () => {
  it('should export `data` and `stats` objects', (done) => {
    e.should.have.property('data')
    e.should.have.property('stats')
    done()
  })
})
