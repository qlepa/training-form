import React from "react";

class AddExercise extends React.Component {
   constructor(props) {
        super(props);
        this.state = {
            actualValue: "",
            display: 'block'
        }

   }

    handleChange = e => {
        this.setState({
            actualValue: e.target.value
        })
    }

    addExercise = () => {
       this.props.handleClickBack(this.state.actualValue)
    }

   render(){

       const exercises = this.props.exercises.map((e, i) => {
           return <option key={i} className="select-form-selector-option">{e.Name}</option>
       })
       let actualExerciseSumm = this.props.exercises.map((e, i) => {
           if (this.state.actualValue === e.Name) {
               return <p key={i} className="select-form-selector-option">{e.Summary}</p>
           }
       })
       let graph = this.props.exercises.map((e, i) => {
           if (this.state.actualValue === e.Name) {
               return (
                   <div className='passing' id={e.Tag} >
                       <div className='playerOne'></div>
                       <div className="playerTwo"></div>
                       <div className="ball"></div>
                   </div>
               )
           }
       })
       return (
           <section className="container">
               <div className="title part">
                   <h2>Część główna</h2>
               </div>
               <form className="select-form">
                   <fieldset className="select-form-fieldset">
                       <legend>Wybierz ćwiczenie</legend>
                       <select className="select-form-selector"
                               onChange={this.handleChange}
                               value={this.state.value}
                       >
                           <option className="select-form-selector-option">--------</option>
                           {exercises}
                       </select>

                       <div className="box exercises-main">
                           {graph}
                       </div>
                   </fieldset>
               </form>
               <button onClick={this.addExercise} className="btn-next">DODAJ ĆWICZENIE</button>
           </section>
     )
   }
 }
 export default AddExercise;