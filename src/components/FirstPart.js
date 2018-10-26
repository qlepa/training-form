import React from "react";
import {db} from "./firebase";

class FirstPart extends React.Component {
   constructor(props) {
   super(props);
   this.state = {
       exerciseOne: [],
       exerciseTwo: [],
       exerciseOneSumm: [],
       exerciseTwoSumm: [],
       exerciseOneChoose: "",
       exerciseTwoChoose: "",
       ex1p: 'par',
       ex2p: 'par'
   }

   }
   handleChangeOne = e => {
       this.setState({
           exerciseOneChoose: e.target.value
       })
   }
    handleChangeTwo = e => {
        this.setState({
            exerciseTwoChoose: e.target.value
        })
    }
   handleClick = () => {
       this.props.setStage('MainPart')
       this.props.getFirstPart(this.state.exerciseOneChoose, this.state.exerciseTwoChoose)
   }
   changeView1 = () => {
       this.setState({
           ex1p: this.state.ex1p === 'par' ? "graph" : "par"
       })
   }
   render(){
       let exerciseOneChoose = this.state.exerciseOneChoose;
       let exerciseTwoChoose = this.state.exerciseTwoChoose;

       let exerciseOne = this.state.exerciseOne.map((e,i) => {
           if (this.props.ageGroup === e.Age) {
               return <option key={i} className="select-form-selector-option">{e.Name}</option>
           }
       })
       let exerciseTwo = this.state.exerciseTwo.map((e,i) => {
           return <option key={i} className="select-form-selector-option">{e.Name}</option>
       })
       let exerciseOneSumm = this.state.exerciseOne.map((e,i) => {
           if (exerciseOneChoose === e.Name) {
               if (this.state.ex1p === 'par') {
                   return (
                       <img className="ex1-img" key={i} src={e.Url}/>
                   )
               }
               // else if (this.state.ex1p === 'par') {
               //     return (
               //         <p key={i} className="ex-summary">{e.Summary}</p>
               //     )
               // }
           }
       })
       let exerciseTwoSumm = this.state.exerciseTwo.map((e,i) => {
           if (exerciseTwoChoose === e.Name) {
               return <p key={i} className="ex-summary">{e.Summary}</p>
           }
       })
     return (
         <section className="container">
             <div className="title part">
                 <h2>Część wstępna</h2>
             </div>
             <form className="select-form">
                 <fieldset className="select-form-fieldset">
                     <legend> Ćwiczenie 1</legend>
                     <select className="select-form-selector" onChange={this.handleChangeOne} value={this.state.exerciseOneChoose}>
                         <option className="select-form-selector-option">--------</option>
                         {exerciseOne}
                     </select>
                     <div className="box exercises">
                         {exerciseOneSumm}
                         {/*<button onClick={this.changeView1} className="change-btn">CH</button>*/}
                     </div>
                 </fieldset>
             </form>
             <form className="select-form" id="first-ex">
                 <fieldset className="select-form-fieldset">
                     <legend> Ćwiczenie 2</legend>
                     <select className="select-form-selector" onChange={this.handleChangeTwo} value={this.state.exerciseTwoChoose}>
                         <option className="select-form-selector-option">--------</option>
                         {exerciseTwo}
                     </select>
                     <div className="box exercises">
                         {exerciseTwoSumm}
                     </div>
                 </fieldset>
             </form>

             <button onClick={this.handleClick} className="btn-next">DALEJ</button>
         </section>
     )
   }
    componentDidMount () {
        db.collection('first-part-exercises').get().then((snap) => {
            // console.log(snap.docs);

            snap.docs.forEach((e) => {
                // console.log(e.data());
                this.setState({
                    exerciseOne: [
                        ...this.state.exerciseOne,
                        e.data()
                    ],
                    exerciseTwo: [
                        ...this.state.exerciseTwo,
                        e.data()
                    ]
                })
            });
        })
    }
 }

export default FirstPart