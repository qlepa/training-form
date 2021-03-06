import React from "react";

class Start extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ageGroup: ''
        }

    }
    handleAgeGroup = e => {
        this.setState ({
            ageGroup: e.target.value
        })
    }
    handleClick = () => {
        if(typeof this.props.getAgeGroup == 'function') {
            this.props.getAgeGroup(this.state.ageGroup)
        }
        this.props.setStage('CourseDetails')

    }
    render(){
        return (
            <section className="container">
                <div className="home-page">
                    <h1>Kreator Treningu</h1>
                    <h2>Wybierz kategorię wiekową</h2>
                    <form className="select-form">
                        <select className="select-form-selector" id='ageGroup' value={this.state.ageGroup} onChange={this.handleAgeGroup}>
                            <option className="select-form-selector-option first">Wybierz grupę wiekową</option>
                            <option className="select-form-selector-option">Junior A-C</option>
                            <option className="select-form-selector-option">Junior D</option>
                            <option className="select-form-selector-option">Junior E</option>
                            <option className="select-form-selector-option">Junior F</option>
                            <option className="select-form-selector-option">Junior G</option>
                        </select>
                        <button
                            onClick={this.handleClick}
                            className="btn-next">WYBIERZ</button>
                    </form>
                </div>
            </section>

        )
    }
}
export default Start;
