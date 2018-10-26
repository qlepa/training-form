import React, {Component} from 'react';
import Start from "./Start";
import CourseDetail from "./CourseDetail";
import FirstPart from "./FirstPart";
import MainPart from "./MainPart";
import LastPart from "./LastPart";
import Summary from "./Summary";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'Start',
            ageGroup: null,
            trainer: '',
            assistant: '',
            ex1: null,
            ex2: null,
            exL1: null,
            exL2: null,
            date: null,
            place: null,
            mex: []
        }
    }
    getAgeGroup = (age) => {
        this.setState({
            ageGroup: age
        })
    }
    getFirstPart = (exerciseOneChoose, exerciseTwoChoose) => {
        this.setState({
            ex1: exerciseOneChoose,
            ex2: exerciseTwoChoose
        })
    }
    getLastPart = (exerciseOneChoose, exerciseTwoChoose) => {
        this.setState({
            exL1: exerciseOneChoose,
            exL2: exerciseTwoChoose
        })
    }
    getMainPart = (mainPartExercises) => {
        this.setState({
            mex: [...this.state.mex, ...mainPartExercises]
        })
    }
    setStage = (stageName) => {
        this.setState({
            status: stageName
        })
    }
    handleClick = (takeTrainer, takeAssistant, date, place) => {
        this.setState({
            trainer: takeTrainer,
            assistant: takeAssistant,
            date: date,
            place: place

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
                        <CourseDetail setStage={this.setStage} ageGroup={this.state.ageGroup} getData={this.handleClick}/>
                    </div>
                )
            case "FirstPart":
                return (
                    <div className="App">
                        <FirstPart setStage={this.setStage} ageGroup={this.state.ageGroup} getFirstPart={this.getFirstPart}/>
                    </div>
                )
            case "MainPart":
                return (
                    <div className="App">
                        <MainPart setStage={this.setStage} ageGroup={this.state.ageGroup} getMainPart={this.getMainPart}/>
                    </div>
                )
            case "LastPart":
                return (
                    <div className="App">
                        <LastPart setStage={this.setStage} ageGroup={this.state.ageGroup} getLastPart={this.getLastPart}/>
                    </div>
                )
            case "Summary":
                return (
                    <div className="App">
                        <Summary
                            ageGroup={this.state.ageGroup}
                            trainer={this.state.trainer}
                            assistant={this.state.assistant}
                            ex1={this.state.ex1}
                            ex2={this.state.ex2}
                            date={this.state.date}
                            place={this.state.place}
                            mex={this.state.mex}
                            exL1={this.state.exL1}
                            exL2={this.state.exL2}
                        />
                    </div>
                )
        }
    }
}

export default App;
