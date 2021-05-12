import { Button } from 'react-bootstrap'
import React from 'react'
import {Row} from 'react-bootstrap'
import './Articles.css'

function FilterButtons() {


    const art = ['Most recent', 'Most read', 'Most liked']


    return (
        <div>
          <Row>
                {art.map(a =>
                  <Button key={a} className="col ml-3 mr-3 btn-light filter-btn">
                    {a}
                  </Button>
                )}
          </Row>
        </div>
    )
}
export default FilterButtons
