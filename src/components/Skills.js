import React from "react";

const Skills = props => {
  return (
    <div>
      {props.totalSkills.map(skill => {
        return (
          <table key={skill} className="table">
            <thead className="tablehead">
              <tr>
                <th>Skill</th>
                <th>Level</th>
                <th>XP</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td>Overall</td>
                <td>{skill.overall.level}</td>
                <td>{skill.overall.xp}</td>
              </tr>
              <tr>
                <td> <img className="skill_img"src="https://vignette.wikia.nocookie.net/runescape2/images/5/51/Attack-icon.png/revision/latest?cb=20181022021633" alt=""/> Attack</td>
                <td>{skill.attack.level}</td>
                <td>{skill.attack.xp}</td>
              </tr>
              <tr>
                <td> <img src="https://vignette.wikia.nocookie.net/runescape2/images/3/3e/Strength-icon.png/revision/latest?cb=20181022021632" alt="" className="skill_img"/> Strength</td>
                <td>{skill.strength.level}</td>
                <td>{skill.strength.xp}</td>
              </tr>
              <tr>
                <td>Defence</td>
                <td>{skill.defence.level}</td>
                <td>{skill.defence.xp}</td>
              </tr>
              <tr>
                <td>Ranged</td>
                <td>{skill.ranged.level}</td>
                <td>{skill.ranged.xp}</td>
              </tr>
              <tr>
                <td>Prayer</td>
                <td>{skill.prayer.level}</td>
                <td>{skill.prayer.xp}</td>
              </tr>
              <tr>
                <td>Magic</td>
                <td>{skill.magic.level}</td>
                <td>{skill.magic.xp}</td>
              </tr>
              <tr>
                <td>Runecraft</td>
                <td>{skill.runecraft.level}</td>
                <td>{skill.runecraft.xp}</td>
              </tr>
              <tr>
                <td>Construction</td>
                <td>{skill.construction.level}</td>
                <td>{skill.construction.xp}</td>
              </tr>
              <tr>
                <td>Hitpoints</td>
                <td>{skill.hitpoints.level}</td>
                <td>{skill.hitpoints.xp}</td>
              </tr>
              <tr>
                <td>Agility</td>
                <td>{skill.agility.level}</td>
                <td>{skill.agility.xp}</td>
              </tr>
              <tr>
                <td>Herblore</td>
                <td>{skill.herblore.level}</td>
                <td>{skill.herblore.xp}</td>
              </tr>
              <tr>
                <td>Thieving</td>
                <td>{skill.thieving.level}</td>
                <td>{skill.thieving.xp}</td>
              </tr>
              <tr>
                <td>Crafting</td>
                <td>{skill.crafting.level}</td>
                <td>{skill.crafting.xp}</td>
              </tr>
              <tr>
                <td>Fletching</td>
                <td>{skill.fletching.level}</td>
                <td>{skill.fletching.xp}</td>
              </tr>
              <tr>
                <td>Slayer</td>
                <td>{skill.slayer.level}</td>
                <td>{skill.slayer.xp}</td>
              </tr>
              <tr>
                <td>Hunter</td>
                <td>{skill.hunter.level}</td>
                <td>{skill.hunter.xp}</td>
              </tr>
              <tr>
                <td>Mining</td>
                <td>{skill.mining.level}</td>
                <td>{skill.mining.xp}</td>
              </tr>
              <tr>
                <td>Smithing</td>
                <td>{skill.smithing.level}</td>
                <td>{skill.smithing.xp}</td>
              </tr>
              <tr>
                <td>Fishing</td>
                <td>{skill.fishing.level}</td>
                <td>{skill.fishing.xp}</td>
              </tr>
              <tr>
                <td>Cooking</td>
                <td>{skill.cooking.level}</td>
                <td>{skill.cooking.xp}</td>
              </tr>
              <tr>
                <td>Firemaking</td>
                <td>{skill.firemaking.level}</td>
                <td>{skill.firemaking.xp}</td>
              </tr>
              <tr>
                <td>Woodcutting</td>
                <td>{skill.woodcutting.level}</td>
                <td>{skill.woodcutting.xp}</td>
              </tr>
              <tr>
                <td>Farming</td>
                <td>{skill.farming.level}</td>
                <td>{skill.farming.xp}</td>
              </tr>
              
            </tbody>
          </table>
        );
      })}
    </div>
  );
};

export default Skills;
