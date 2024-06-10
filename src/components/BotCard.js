import React from "react";

const BotCard = ({ bot, handleClick, handleDischarge }) => {
  let botType;

  switch (bot.bot_class) {
    case "Assault":
      botType = <i className="icon military" />;
      break;
    case "Defender":
      botType = <i className="icon shield" />;
      break;
    case "Support":
      botType = <i className="icon ambulance" />;
      break;
    default:
      botType = <div />;
  }

  return (
    <div className="ui card" onClick={() => handleClick(bot.id)}>
      <div className="image">
        <img alt="oh no!" src={bot.avatar_url} />
      </div>
      <div className="content">
        <div className="header">
          {bot.name} {botType}
        </div>
        <div className="meta">
          <small>{bot.catchphrase}</small>
        </div>
      </div>
      <div className="extra content">
        <span>
          <i className="icon heartbeat" />
          {bot.health}
        </span>
        <span>
          <i className="icon lightning" />
          {bot.damage}
        </span>
        <span>
          <i className="icon shield" />
          {bot.armor}
        </span>
      </div>
      {handleDischarge && (
        <div className="extra content">
          <button
            className="ui button"
            onClick={(e) => {
              e.stopPropagation();
              handleDischarge(bot.id);
            }}
          >
         X
          </button>
        </div>
      )}
    </div>
  );
};

export default BotCard;
