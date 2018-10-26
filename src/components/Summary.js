import React from "react";
import {db} from "./firebase";

class Summary extends React.Component {
   constructor(props) {
   super(props);
   this.state = {
       trainers: []
   }

   }
   render(){
       let date = this.props.date;
       let place = this.props.place;
       let ageGroup = this.props.ageGroup;
       let trainer = this.props.trainer;
       let assistant = this.props.assistant;
       let ex1 = this.props.ex1;
       let ex2 = this.props.ex2;
       let mex = this.props.mex.map((e, i) => {
           return <li key={i}>Ćwiczenie {i+1}: {e}</li>
       })
       let trainerMobile = this.state.trainers.map((e,i) => {
           if (trainer === e.Name) {
               return <li key={i}>tel. {e.Number}</li>
           }
       })
       let exL1 = this.props.exL1;
       let exL2 = this.props.exL2;
     return (
         <section className="container">
             <div className="title part">
                 <h2>Podsumowanie</h2>
             </div>
                 <div className="summary">
                     <h2 className="summ-title">Twój trening</h2>
                     <ul className="summary-list">
                         <li className="summ-li">Data: {date}</li>
                         <li>Miejsce: {place}</li>
                         <li>Grupa wiekowa: {ageGroup}</li>
                         <li>Trener prowadzący: {trainer}</li>
                         {trainerMobile}
                         <li>Asystent trenera: {assistant}</li>
                     </ul>
                     <h3 className="summ-under-title">Część wstępna</h3>
                     <ul className="summary-list">
                         <li>Ćwiczenie 1: {ex1}</li>
                         <li>Ćwiczenie 2: {ex2}</li>
                     </ul>
                     <h3 className="summ-under-title">Część główna</h3>
                     <ul className="summary-list">
                         {mex}
                     </ul>
                     <h3 className="summ-under-title">Część końcowa</h3>
                     <ul className="summary-list">
                         <li>Ćwiczenie 1: {exL1}</li>
                         <li>Ćwiczenie 2: {exL2}</li>
                     </ul>
                 </div>
             {/*<button onClick={this.addExercise} className="btn-next">DODAJ ĆWICZENIE</button>*/}
         </section>

     )
   }
    componentDidMount() {
        db.collection('trainers').get().then((snap) => {
            // console.log(snap.docs);

            snap.docs.forEach((e) => {
                // console.log(e.data());
                this.setState({
                    trainers: [
                        ...this.state.trainers,
                        e.data()
                    ]
                })
            });
        })
        // db.collection('assistans').get().then((snap) => {
        //     // console.log(snap.docs);
        //
        //     snap.docs.forEach((e) => {
        //         // console.log(e.data());
        //         this.setState({
        //             assistans: [
        //                 ...this.state.assistans,
        //                 e.data()
        //             ]
        //         })
        //     });
        // })
    }
 }


export default Summary