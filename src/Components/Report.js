import React, { Component } from 'react'
import logo from '../images/logo.png'
import barcode from '../images/barcode.png'

import './style.css'

export default class Report extends Component {
  render() {
    return (
      <div className="body-wrapper">
        <div className="page-des">
            <h4>allergy prescription mix receipt</h4>
            <img src={logo} alt="logoimg" />
            <div className="clear"></div>
        </div>
        <ul className="address">
            <li>
                <h6>Zoë M. Harrold</h6><span> | </span><p>DOB: 11/01/1990</p> <span> | </span> <p>MRN:369452</p>
            </li>
            <li><p>Visit: 08/10/2018</p></li>
            <li><p>Baker Allergy and Asthma 9495 SW Locust St. Suite A, Tigard, OR 97223   </p></li>
        </ul>
        <hr id="space1" />
        <div className="prescription">
            <h3>Prescription Overview</h3>
            <ul>
                <li>
                    <p>Prescribing provider: James W. Baker, MD</p>
                    <p>Signed 08/29/2018 by James W. Baker, MD</p>
                </li>
                <li>
                    <h5>Reason for Prescription</h5>
                    <p>Allergy immunotherapy treatment of</p>
                    <p>J30.1 - allergic rhinitis due to pollen</p>
                    <p>J30.1 - allergic rhinitis due to animal dander</p>
                </li>
            </ul>
        </div>
        <div className="bar-wrapper">
            <div className="expiration">
                <ul>
                    <li><h5>Mixed by</h5><p>Luke Barrat</p></li>
                    <li><h5>Mixed on</h5><p>09/01/2018</p></li>
                    <li><h5>Expiration</h5><p>09/01/2019</p></li>
                </ul>
            </div>
            <div className="barcode">
                <img src={barcode} alt="barcode" />
            </div>
            <div className="clear"></div>
        </div>
        <hr id="space2" />
        <div className="bottle-wrapper">
            <div className="bottle-info">
                <ul>
                    <li><h5>Bottle name</h5><p>TRS/GRS Vial 1</p></li>
                    <li><h5>Type</h5><p>New</p></li>
                </ul>
            </div>
            <div className="bottle-color">
                <ul>
                    <li>
                        <p>1:10,000</p>
                        <span style={{ background: '#6451a3' }}></span>
                    </li>
                    <li>
                        <p>1:1,000</p>
                        <span></span>
                    </li>
                    <li>
                        <p>1:100</p>
                        <span></span>
                    </li>
                    <li>
                        <p>1:10</p>
                        <span></span>
                    </li>
                    <li>
                        <p>1:1</p>
                        <span></span>
                    </li>
                </ul>
            </div>
            <div className="clear"></div>
        </div>
        <table className="Extract">
            <thead>
                <tr>
                    <th>Extract</th>
                    <th>Dose (at 1:1)</th>
                    <th>Dilution</th>
                    <th>units</th>
                    <th>Lot#</th>
                    <th>outdate</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Tree Mix 1</td>
                    <td >0.5 mL</td>
                    <td >1:20</td>
                    <td>W/V</td>
                    <td>TM5642</td>
                    <td>12/25/2019</td>
                </tr>
                <tr>
                    <td>Fescue</td>
                    <td>0.2 mL</td>
                    <td>1000</td>
                    <td>BAU/ml</td>
                    <td>FC1112</td>
                    <td>12/25/2019</td>
                </tr>
                <tr>
                    <td>johnson</td>
                    <td>0.3 mL</td>
                    <td>1:20</td>
                    <td>BAU/ml</td>
                    <td>TM5642</td>
                    <td>12/25/2019</td>
                </tr>
            </tbody>
        </table>
        <table className="dillute">
            <thead>
                <tr>
                    <th>Diluents</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>HSA Saline</td>
                    <td>4ml</td>
                </tr>
            </tbody>
        </table>
        <table className="dillute totalamounts">
            <thead>
                <tr>
                    <th colspan={2}>Total Amounts</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Extract</td>
                    <td>1ml</td>
                </tr>
                <tr>
                    <td>Diluents</td>
                    <td>4ml</td>
                </tr>
                <tr>
                    <td>% Glycerin</td>
                    <td>4ml</td>
                </tr>
            </tbody>
        </table>
    </div>
    )
  }
}
