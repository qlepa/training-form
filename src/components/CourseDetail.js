import React from "react";
import App from "./App";
import {db} from "./firebase";

class CourseDetail extends React.Component {
   constructor(props) {
   super(props);
   this.state = {
       trainers: [],
       assistans: []
   }

   }
    handleClick = () => {
        if(typeof this.props.getAgeGroup == 'function') {
            this.props.getAgeGroup(this.state.ageGroup)
        }
        this.props.setStage('FirstPart')
    }
   render(){
       let trainers = this.state.trainers.map((e,i) => {
           return <option key={i} className="select-form-selector-option">{e.Name}</option>
       })
       let assistans = this.state.assistans.map((e,i) => {
           return <option key={i} className="select-form-selector-option">{e.Name}</option>
       })
     return (
         <section className="container">
             <div className="title">
                 <h2>Szczegóły kursu</h2>
             </div>
             <form className="select-form">
                 <fieldset className="select-form-fieldset">
                     <legend>Kadra</legend>
                     <select className="select-form-selector">
                         <option className="select-form-selector-option first">Trener prowadzący</option>
                         {trainers}
                     </select>
                     <select className="select-form-selector">
                         <option className="select-form-selector-option first">Asystent</option>
                         {assistans}
                     </select>
                 </fieldset>
             </form>
             <form className="select-form">
                 <fieldset className="select-form-fieldset">
                     <legend>Szczegóły zajęć</legend>
                     <input type="date" className="select-form-selector"/>
                         <select className="select-form-selector">
                             <option className="select-form-selector-option first">Miejsce zajeć</option>
                             <option className="select-form-selector-option">Hala Deotymy</option>
                             <option className="select-form-selector-option">Junior D</option>
                             <option className="select-form-selector-option">Junior E</option>
                             <option className="select-form-selector-option">Junior F</option>
                             <option className="select-form-selector-option">Junior G</option>
                         </select>
                         <div className="box map"></div>
                 </fieldset>
             </form>
             <button onClick={this.handleClick} className="btn-next">DALEJ</button>
         </section>

     )
   }
   componentDidMount () {
       db.collection('trainers').get().then((snap) => {
           console.log(snap.docs);

           snap.docs.forEach((e) => {
               console.log(e.data());
               this.setState({
                   trainers: [
                       ...this.state.trainers,
                       e.data()
                   ]
               })
           });
       })
       db.collection('assistans').get().then((snap) => {
           console.log(snap.docs);

           snap.docs.forEach((e) => {
               console.log(e.data());
               this.setState({
                   assistans: [
                       ...this.state.assistans,
                       e.data()
                   ]
               })
           });
       })
   }
 }

 export default CourseDetail