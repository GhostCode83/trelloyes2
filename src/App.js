import React, { Component } from 'react';
import List from './composition/List.js'
import './App.css';
import store from './store'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allCards: store.allCards,
      lists: store.lists
    }
  } 
  
  handleDeleteItem = (id) => {
    let newAllCards = this.state.allCards
   // let newLists = this.state.lists
    //newAllCards = omit(newAllCards, id)
     function omit(newAllCards, id) {
       let {[id]: _, ...rest} = newAllCards;
       console.log(rest)
       return rest
     }
    /*for (let i = 0; i < this.state.lists.length; i++){
      for (let j = 0; j < this.state.lists[i].cardIds.length; j++) {
        if (this.state.lists[i].cardIds[j] === id){
        
           console.log(this.state.lists[i].cardIds[j], id)
          let newLists = this.state.lists[i].cardIds[j]
          let newState = function omit(newLists, id).omit(newAllCards, id)
          //newLists.splice(this.state.lists[i].cardIds[j])
          console.log(newState)
        }
      }*/
      //this.state.lists.cardIds.map(function(item, index){
        //console.log(item, index, id)
        //if ( id === this.state.list[index])
      //}
 // )
    /*for (let i = 0; i < this.state.lists; i++) {
      for(let j = 0; j < this.state.lists.cardIds; j++) {
        if (this.state.lists[i].cardIds[j] === this.state.lists[i].cardIds[id]) {
          
        }
      }
    }*/
    // new logic that removes id from both 
    //console.log(newAllCards)
        //delete newAllCards[id]
    //console.log(newAllCards)
   // this.setState({
      //allCards: newAllCards,
      //lists: newLists
    //  })
  //}
}

  handleRandomItem = () => {
    console.log('Random item rendered!')
  }

  render() {
    const listComponent = this.state.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => this.state.allCards[id])}
              onDeleteItem = {this.handleDeleteItem}
              onRandomItem = {this.handleRandomItem}
            />
          ))
         // console.log(listComponent)
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
    {listComponent}
        </div>
      </main>
    );
  }
}

export default App;