interface IVocabularyProps {
  lexis: string[];
  type: string;
}

const Lexis = ({ lexis, type }: IVocabularyProps) => {
  return (
    <div className="flex flex-wrap gap-2 mt-8">
      <h3 className="mr-8 text-[#8f8f8f]">{type}</h3>
      {lexis.map((item, index) => (
        <p key={index} className="text-[#a75fe0] font-bold">
          {item}
        </p>
      ))}
    </div>
  );
};

export default Lexis;
