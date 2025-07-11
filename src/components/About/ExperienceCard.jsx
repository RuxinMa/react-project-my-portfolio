const ExperienceCard = ({ experience }) => {
  const { 
    duration, 
    company, 
    type, 
    location, 
    decription, 
    url,  // optional
    url_info,  // optional
    keyword, // optional
    words // optional
  } = experience;

  return (
    <div>
      <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:text-[22px] text-sm font-normal'>
        {/* Date */}
        <p className='whitespace-nowrap'>🗓 {duration}</p>
        {/* Company and Type */}
        <p className='whitespace-nowrap'>
          {company}
          {type && (
            <span className='opacity-7 text-purple-500 rounded ml-2 p-1 text-base'>
              {type}
            </span>
          )}
        </p>
        {/* Location */}
        <p className='whitespace-nowrap'>📍 {location}</p>
      </div>

      <div
        id="container"
        className="bg-gradient-to-r from-violet-500/30 via-purple-600/30 to-fuchsia-500/30 rounded-xl px-4 py-4 mt-2"
      >
        {/* Container */}
        <div className="flex flex-col justify-center gap-3">
          {/* Description */}
          <p className='sm:text-lg text-sm'>
            {decription}
            {url && url_info && (
              <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
                className='text-purple-500 ml-2 hover:text-yellow-200'
              > 
                {url_info}
              </a>
            )}
          </p>

          {/* Keywords */}
          {keyword && words && words.length > 0 && (
            <div className='flex flex-wrap items-center gap-2'>
              <p className='whitespace-nowrap'>{keyword} 👉</p>
              <div className='flex flex-wrap gap-3'>
                {words.map((word, index) => {
                  const bgColors = [
                    'bg-emerald-200',
                    'bg-sky-200',
                    'bg-fuchsia-200',
                    'bg-indigo-200',
                    'bg-lime-200',
                    'bg-yellow-100',
                  ];
                  const bgColor = bgColors[index % bgColors.length];
                  
                  return (
                    <span
                      key={index}
                      className={`
                        ${bgColor} 
                        text-green-950 rounded px-2 sm:text-base text-xs inline-block whitespace-nowrap
                      `}
                    >
                      {word}
                    </span>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
