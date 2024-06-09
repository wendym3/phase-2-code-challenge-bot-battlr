import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, releaseBot, dischargeBot }) {
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {bots.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              handleClick={releaseBot}
              handleDischarge={dischargeBot}
            />
          ))}
        </div>
        <div className="row bot-army-row">
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
