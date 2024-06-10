import React, { useState, useEffect } from "react";
import BotCollection from "../components/BotCollection";
import YourBotArmy from "../components/YourBotArmy";

function App() {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);

  useEffect(() => {
    // Fetch bots data from the backend
    fetch("http://localhost:8001/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  const enlistBot = (bot) => {
    // Check if the bot is already enlisted
    if (!enlistedBots.some((b) => b.id === bot.id)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  const releaseBot = (botId) => {
    // Remove the bot from the enlisted bots list
    setEnlistedBots(enlistedBots.filter((bot) => bot.id !== botId));
  };

  const dischargeBot = (botId) => {
    // Delete the bot from the backend
    fetch(`http://localhost:8001/bots/${botId}`, { method: "DELETE" })
      .then(() => {
        // Remove the bot from both enlisted bots and available bots
        setEnlistedBots(enlistedBots.filter((bot) => bot.id !== botId));
        setBots(bots.filter((bot) => bot.id !== botId));
      });
  };

  return (
    <div>
      <YourBotArmy bots={enlistedBots} releaseBot={releaseBot} dischargeBot={dischargeBot} />
      <BotCollection bots={bots} enlistBot={enlistBot} />
    </div>
  );
}

export default App;
