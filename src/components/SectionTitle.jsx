const SectionTitle = ({ borderColor, text, textColor }) => {
  return (
    <div 
      style={{ borderBottom: `solid ${borderColor}` }} 
      className='pb-5'
    >
      <h2 className={`text-3xl font-semibold tracking-wider capitalize ${textColor}`}
      >
        {text}
      </h2>
    </div>
  );
};

export default SectionTitle;
