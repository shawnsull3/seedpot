import React, { Component } from 'react';
import Form from '../common/Form';
import logo from '../../images/newStack.png';
import '../../styles/Form.css';
import '../../styles/ReportCard.css';

class ReportCard extends Component {
    constructor(props) {
        super(props);
        this.state ={
            company: '',
            name: '',
            email: '',
            companyType: '',
            location: '',
            slogan: '',
            step: 0,
            fields: [
                [
                    {id: 'company', type: 'text', placeholder: '*Company'},
                    {id: 'name', type: 'text', placeholder: '*Name'},
                    {id: 'email', type: 'email', placeholder: '*Email'},
                ],
                [
                    {id: 'location', placeholder: 'Location', options: [
                        'Midwest', 'East Coast', 'West'
                    ]},
                    {id: 'slogan', type: 'text', placeholder: '*Slogan'},
                ],
                [
                    {id: 'companyType', placeholder: 'Company Type', options: [
                        'For Profit', 'Customer facing', 'Retail', 'SaaS'
                    ]}
                ],
            ],
            headers: [
                'Startup Report Card',
                'Step 2 of 3',
                'Step 3 of 3',
            ]
        }
        this.handleInput = this.handleInput.bind(this);
        this.switchStep = this.switchStep.bind(this);
    }

    handleInput(e) {
        e.preventDefault();
        this.setState({[e.target.id]: e.target.value});
    }

    switchStep(e) {
        e.preventDefault();
        let move = e.target.id;
        console.log(e.target)
        console.log(move);
        move === 'next' ? this.setState({step: this.state.step+1}) 
          : move === 'back' && this.setState({step: this.state.step-1});
    }

    render() {
        const { step, fields, headers } = this.state;
        return (
            <div className='container-flex'>
                <div className='row full-height'>
                    <div className='logo'>
                        <p className='logo-text'>Powered By</p>
                        <img src={logo} alt='new stack ventures' className='logo-img'/>
                    </div>
                    <div className='col card'>
                        <h5>{headers[step]}</h5>
                          <Form fields={fields[step]} handleInput={this.handleInput} state={this.state} />
                        {step === 0 && <p className='subtext'>Get a valuation estimate and grades on your metrics</p> }
                        <div className='row'>
                            {step !== 0 &&
                              <button className='btn button-border' id='back' onClick={this.switchStep}>
                                <i className="fa fa-chevron-left chevron"></i> Back
                              </button>
                            }
                            {step !== fields.length-1 &&
                              <button className='btn button-border' id='next' onClick={this.switchStep}>
                                Next <i className="fa fa-chevron-right chevron"></i>
                              </button>
                            }
                            {step === fields.length-1 &&
                              <button className='btn button-border' id='submit' onClick={() => this.props.history.push('/main/profile')}>
                                Get Results!
                              </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReportCard;