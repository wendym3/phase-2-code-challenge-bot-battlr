import React from 'react';
import BotCard from './BotCard';

function BotCollection({ bots, addBotToArmy }) {
  return (
    <div>
      {bots.map(bot => (
        <BotCard key={bot.id} bot={bot} onClick={() => addBotToArmy(bot)} />
      ))}
    </div>
  );
}

export default BotCollection;
