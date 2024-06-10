import React from 'react';
import BotCard from './BotCard';

function BotCollection({ bots, enlistBot }) {
  return (
    <div className="ui segment inverted olive bot-collection">
      <div className="ui five column grid">
        <div className="row bot-collection-row">
          {bots.map(bot => (
            <BotCard key={bot.id} bot={bot} handleClick={() => enlistBot(bot)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BotCollection;
