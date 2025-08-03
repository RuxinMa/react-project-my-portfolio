import { skills } from "../../data/skillsData";

const Skills = () => {
  return (
    <div className='flex flex-wrap items-center justify-start gap-6 mt-10'>
      {skills.map((skill) => (
        <div key={skill.id} className="relative group">
          <div
            className={`sm:text-5xl text-3xl transition-all duration-300 ${skill.color} hover:scale-125 cursor-pointer`}
          >
            {skill.icon}
          </div>
          <div 
            className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10"
          >
            {skill.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;