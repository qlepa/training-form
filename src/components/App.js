import React, {Component} from 'react';
import Start from "./Start";
import CourseDetail from "./CourseDetail";
import FirstPart from "./FirstPart";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'Start',
            ageGroup: null,
        }
    }
    componentDidUpdate() {
        console.log(this.state);
    }
    getAgeGroup = (age) => {
        this.setState({
            ageGroup: age
        })
    }
    setStage = (stageName) => {
        this.setState({
            status: stageName
        })
    }
    render() {
        switch (this.state.status) {
            case "Start":
            return (
                <div className="App">
                    {!this.state.ageGroup && <Start setStage={this.setStage} getAgeGroup={this.getAgeGroup}/>}
                </div>
            )
            case "CourseDetails":
            // jezeli ageGroup jest nullem to renderuj start, w.p.p nie
            return (
                <div className="App">
                    {!this.state.ageGroup && <Start setStage={this.setStage} getAgeGroup={this.getAgeGroup}/>}
                    <CourseDetail setStage={this.setStage} ageGroup={this.state.ageGroup}/>
                </div>
            )
            case "FirstPart":
                return (
                   <div className="App">
                        <FirstPart ageGroup={this.state.ageGroup}/>
                   </div>
                )
        }
    }
}

export default App;
