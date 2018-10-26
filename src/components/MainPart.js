import React from "react";
import {db} from "./firebase";

import AddExercise from "./addExercise"

class MainPart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mainPartStatus: "main",
            exercises: [],
            mainPartExercises: [],
            actualValue: '',
            actualExerciseSumm: ''
        }

    }

    handleClickPassesPairs = () => {
        this.setState({
            mainPartStatus: "PairsPasses"
        })
        if (this.state.mainPartExercises.length >= 3) {
            this.setState({
                mainPartStatus: "Blocked"
            })
        }
    }
    handleClickBack = (actualValue) => {
        let mainPartExercises = [];
        this.setState({
            mainPartStatus: "main",
            mainPartExercises: [...this.state.mainPartExercises, actualValue]
        })
    }

    handleClickDelete = (e, i) => {
        console.log("indeks usuwanego elemenu",i)
        let list = [...this.state.mainPartExercises];
        // let el = this.props.i;
        list.splice(i, 1);
        this.setState({
            mainPartExercises: list
        })
    }
    handleClick = () => {
        this.props.setStage('LastPart')
        this.props.getMainPart(this.state.mainPartExercises)
    }
    render() {

        console.log("cwiczenia", this.state.mainPartExercises)
        let mainPartExercises = this.state.mainPartExercises.map((e, i) => {
            return (
                <div className="errors-list">
                    <li key={i}>{e} </li>
                    <button onClick={(event) => this.handleClickDelete(event,i)}>D</button>
                </div>
            )
        })
        switch (this.state.mainPartStatus) {
            case "main":
                return (
                    <section className="container">
                        <div className="title">
                            <h2>Częśc Główna</h2>
                        </div>
                        <div className="summary main-part">
                            <h3>Podania</h3>
                            <div className="passes">
                                <button className="main-part-button" onClick={this.handleClickPassesPairs}>W parach
                                </button>
                                <button className="main-part-button">Grupy</button>
                                <button className="main-part-button">Zespół</button>
                            </div>
                            <h3>Strzały</h3>
                            <div className="shots">
                                <div className="main-part-item">
                                    <p>W parach</p>
                                </div>
                                <div className="main-part-item">
                                    <p>Grupy</p>
                                </div>
                                <div className="main-part-item">
                                    <p>Zespół</p>
                                </div>
                            </div>
                            <h3>Gry meczowe</h3>
                            <div className="plays">
                                <div className="main-part-item">
                                    <p>W parach</p>
                                </div>
                                <div className="main-part-item">
                                    <p>Grupy</p>
                                </div>
                                <div className="main-part-item">
                                    <p>Zespół</p>
                                </div>
                            </div>
                            <ul>
                                {mainPartExercises}
                            </ul>
                        </div>
                        <button onClick={this.handleClick} className="btn-next">DALEJ</button>
                    </section>
                )
            case "PairsPasses":

                return <AddExercise exercises={this.state.exercises}
                                    handleClickBack={this.handleClickBack}
                        />

            case "Blocked":
                return (
                    <section className="container">
                        <div className="title">
                            <h2>Częśc Główna</h2>
                        </div>
                        <div className="summary main-part">
                            <h3>Podania</h3>
                            <div className="passes">
                                <button className="main-part-button" onClick={this.handleClickPassesPairs}>W parach
                                </button>
                                <button className="main-part-button">Grupy</button>
                                <button className="main-part-button">Zespół</button>
                            </div>
                            <h3>Strzały</h3>
                            <div className="shots">
                                <div className="main-part-item">
                                    <p>W parach</p>
                                </div>
                                <div className="main-part-item">
                                    <p>Grupy</p>
                                </div>
                                <div className="main-part-item">
                                    <p>Zespół</p>
                                </div>
                            </div>
                            <h3>Gry meczowe</h3>
                            <div className="plays">
                                <div className="main-part-item">
                                    <p>W parach</p>
                                </div>
                                <div className="main-part-item">
                                    <p>Grupy</p>
                                </div>
                                <div className="main-part-item">
                                    <p>Zespół</p>
                                </div>
                            </div>
                            <ul>
                                {mainPartExercises}
                            </ul>
                            <p className='error'>Możesz wybrać tylko trzy treningi w tej części</p>
                        </div>
                        <button onClick={this.handleClick} className="btn-next">DALEJ</button>
                    </section>
                )
        }
    }

    componentDidMount() {
        db.collection('main-part-pairs-passes').get().then((snap) => {
            console.log(snap.docs);

            snap.docs.forEach((e) => {
                console.log(e.data());
                this.setState({
                    exercises: [
                        ...this.state.exercises,
                        e.data()
                    ]
                })
            });
        })
    }
}

export default MainPart