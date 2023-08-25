import './Skills.css'
import SkillsRow from './SkillsRow'

function SkillsDetails() {
  const skills = [
    {name: "C / C++", numStars: 4.5},
    {name: "Kotlin", numStars: 4.5},
    {name: "React", numStars: 4.5},
    {name: "HTML / CSS", numStars: 4.5},
    {name: "Javascript", numStars: 3.5},
    {name: "Python", numStars: 3.5},
    {name: "Splunk", numStars: 3},
    {name: "C# / Xamarin", numStars: 3},
    {name: "MongoDB", numStars: 3},
    {name: "Node / Express", numStars: 3},
    {name: "Angular", numStars: 2.5},
  ]
  return (
    <div>
      <div>
        <h3 className="skills-heading">Programming Languages</h3>
        <table className="skills-table">
          {skills.map((skill) => 
            <SkillsRow 
              key={skill.name}
              name={skill.name}
              numStars={skill.numStars} 
            />
          )}
        </table>
      </div>
      <div className="hobbies">
        <h3 className="skills-heading">Hobbies</h3>
        <ul>
          <li>Continually learning through Udemy courses</li>
          <ul>
            <li>The Complete 2021 Web Development Bootcamp</li>
            <li>2021 Complete Python Bootcamp From Zero to Hero in Python</li>
          </ul>
          <li>Practicing programming</li>
          <li>Relaxing with family and friends</li>
          <li>Golfing</li>
          <li>Playing and watching soccer</li>
          <ul>
            <li>Manchester United supporter</li>
          </ul>
          <li>Watching Formula One</li>
          <ul>
            <li>McLaren Racing supporter</li>
          </ul>
          <li>Practicing piano</li>
          <li>Playing table tennis</li>
        </ul>
      </div>
    </div>
  );
}

export default SkillsDetails;