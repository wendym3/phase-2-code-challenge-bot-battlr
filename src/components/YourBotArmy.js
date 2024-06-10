import React from "react";
import BotCard from "../components/BotCard";

const YourBotArmy = ({ bots, releaseBot, dischargeBot }) => {
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {bots.map(bot => (
            <BotCard
              key={bot.id}
              bot={bot}
              handleClick={() => releaseBot(bot.id)}
              handleDischarge={() => dischargeBot(bot.id)}
            />
          ))}
        </div>
      </div>
      <div className="row bot-army-row">
        Your Bot Army
      </div>
    </div>
  );
};

export default YourBotArmy;
