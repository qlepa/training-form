import React from "react";
import App from "./App";
import {db} from "./firebase";

class FirstPart extends React.Component {
   constructor(props) {
   super(props);
   this.state = {
       exerciseOne: [],
       exerciseTwo: []
   }

   }
   render(){
       let exerciseOne = this.state.exerciseOne.map((e,i) => {
           return <option key={i} className="select-form-selector-option">{e.Name}</option>
       })
       let exerciseTwo = this.state.exerciseTwo.map((e,i) => {
           return <option key={i} className="select-form-selector-option">{e.Name}</option>
       })
     return (
         <section className="container">
             <div className="title part">
                 <h2>Część wstępna</h2>
             </div>
             <form className="select-form">
                 <fieldset className="select-form-fieldset">
                     <legend> Ćwiczenie 1</legend>
                     <select className="select-form-selector">
                         <option className="select-form-selector-option">--------</option>
                         {exerciseOne}
                     </select>
                     <div className="box exercises"></div>
                 </fieldset>
             </form>
             <form className="select-form" id="first-ex">
                 <fieldset className="select-form-fieldset">
                     <legend> Ćwiczenie 2</legend>
                     <select className="select-form-selector">
                         <option className="select-form-selector-option">--------</option>
                         {exerciseTwo}
                     </select>
                     <div className="box exercises">
                         <p className=""></p>
                     </div>
                 </fieldset>
             </form>

             <button className="btn-next">DALEJ</button>
         </section>
     )
   }
    componentDidMount () {
        db.collection('first-part-exercises').get().then((snap) => {
            console.log(snap.docs);

            snap.docs.forEach((e) => {
                console.log(e.data());
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