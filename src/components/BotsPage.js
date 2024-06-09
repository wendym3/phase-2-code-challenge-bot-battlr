import React from "react";
import BotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "./BotSpecs";

class BotsPage extends React.Component {
  state = {
    
    botCollection : [],
    filteredBotCollection :[],
    yourBotArmy :[],
    visibleBot : true,
    botSpecs : {},

  }

   componentDidMount (){
    fetch ("http://localhost:8002/bots")
    .then((response) => response.json())
    .then(bots=> this.setState({botCollection:bots, filteredBotCollection: bots}))
    .then(console.log("fetched data"))
  }
   
  //start here with your code for step one
   addToMyArmy = (bot) => {
    const newBotCollection = this.state.filteredBotCollection.filter( cardBot => cardBot.bot_class !==bot.bot_class)
    this.setState({filteredBotCollection: newBotCollection,
    yourBotArmy : [...this.state.yourBotArmy, bot],
  visibleBot: true, })

  }

  removeToMyArmy = (bot) => {
    const newBotArmy = this.state.yourBotArmy.filter(cardBot=>cardBot.id !== bot.id)
    const classOfArmy = newBotArmy.map(bot=>bot.bot_class)
    const newBotCollection = this.state.botCollection.filter(bot=>{
      console.log("Filter:", !classOfArmy.includes(bot.bot_class))
      return !classOfArmy.includes(bot.bot_class)
    })
    console.log("newBotCollection", newBotCollection)
    this.setState({yourBotArmy: newBotArmy, filteredBotCollection: newBotCollection,})
  }
//remove the bot permanently//
   removePermanently = (bot) => {
    let newBotArmy = this.state.yourBotArmy.filter(cardBot=>cardBot !==bot)
    let newBotCollection = this.state.botCollection.filter(cardBot =>cardBot !==bot)
    let newFilteredBotCollection = this.state.filteredBotCollection.filter(cardBot=>cardBot !==bot)

    this.setState({yourBotArmy: newBotArmy, botCollection: newBotCollection, filteredBotCollection: newFilteredBotCollection})

    fetch (`http://localhost:8002/bots/${bot.id}`, {
      method : "DELETE",
    })
    .then(res=>res.json())
    .then (outcome=>console.log (outcome))
  }

  handleDisplayBotSpecs = (bot) => {
    this.setState({botSpecs:bot, visibleBot: false})
  }

  handleDisplayBotCollection = ()=>{
    this.setState({visibleBot:true})
  }
  
  

 
  render (){
    const {
      filteredBotCollection ,
      yourBotArmy ,
      visibleBot ,
      botSpecs ,
  } = this.state
    
  return (
    <div>
      <BotArmy 
      bots={yourBotArmy}
      action={this.removeToMyArmy} 
      removeCardPermanently={this.removePermanently}/>
      {visibleBot}
      ?
      <BotCollection 
      botCollection={filteredBotCollection}
      action={this.handleDisplayBotSpecs} 
      removeCardPermanently={this.removePermanently} 
      />
     : <BotSpecs 
     bot={botSpecs}
      back={this.handleDisplayBotCollection}
      enlist={this.addToMyArmy}/>
    </div>
  )
  }
}
  

export default BotsPage;