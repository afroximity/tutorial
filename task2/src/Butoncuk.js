import React from "react";
import './Butoncuk.css';

class Butoncuk extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
        dayak: 0
      };
    }

    componentDidUpdate() {
        this.handleDayak()
        
    }

    handleDayak () {
        const localDayak = this.state.dayak
        const localDrink = this.state.count

        if (localDrink>=10 &&( (localDayak+1)*10)<=localDrink) {
            this.setState({dayak: localDayak + 1})   
        }
    }

    handleVomit () {
        if(this.state.count > 0) {
            this.setState({ count: this.state.count - 1})
        }
    }
    
    render() {
        console.log('state:', this.state)
        console.log('dayak:', this.state.dayak)
      return (
        <div className="selam">
          {this.state.count > 1 ? <div>You drank {this.state.count} bottles of beer.</div>: <div>You drank {this.state.count} bottle of beer.</div>} <div>Yenen dayak: {this.state.dayak}</div>
          <button onClick={() => this.setState({ count: this.state.count + 1})}>
            Drink
          </button>
          <button onClick={() => this.handleVomit()}>
            Vomit
          </button>
        </div>
      );
    }
  }

// // const Butoncuk = () => {
// //     const [drinks, setDrink] = useState(0)
// //     const [dayaks, setDayaks] = useState(0)
    
//     return(
//         <div>The world is a gloomy place. Drink something to ease the pain!
//             You have {drinks} in your belly. {dayaks}
//         <button onClick={() => setDrink(drinks + 1) }>YUVARLA!</button>
//         <button onClick={() => setDrink(drinks - 1) }>Kus!</button>
//         {drinks > 5 ? <div>You are drunk amk.</div>: ''}
//         </div>
//     )
// }



export default Butoncuk;

// const [count, setCount] = useState(0);

// const [name, setName] = useState('ahmet')