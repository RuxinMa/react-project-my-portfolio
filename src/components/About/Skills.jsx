import { skills } from "../../data";

const Skills = () => {
  return (
    <div className='flex flex-wrap items-center justify-start gap-6 mt-10'>
      {skills.map((skill) => (
        <div
          key={skill.id}
          className={`sm:text-5xl text-3xl transition-all duration-300 ${skill.color} hover:scale-125 cursor-pointer`}
        >
          {skill.icon}
        </div>
      ))}
    </div>
  );
};

export default Skills;