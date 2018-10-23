import React, {Component} from 'react';
import Start from "./Start";
import CourseDetail from "./CourseDetail";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ageGroup: null
        }
    }

    getAgeGroup = (age) => {
        this.setState({
            ageGroup: age
        })
    }

    render() {
        if (!this.state.ageGroup) {
            return (
                <div className="App">
                    {!this.state.ageGroup && <Start getAgeGroup={this.getAgeGroup}/>}
                </div>
            )
        } else {
            // jezeli ageGroup jest nullem to renderuj start, w.p.p nie
            return (
                <div className="App">
                    {!this.state.ageGroup && <Start getAgeGroup={this.getAgeGroup}/>}
                    <CourseDetail ageGroup={this.state.ageGroup}/>

                </div>
            );
        }
    }
}

export default App;
