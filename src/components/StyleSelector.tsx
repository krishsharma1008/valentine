interface StyleOption {
  id: "regular" | "fancy";
  name: string;
  description: string;
}

interface StyleSelectorProps {
  onSelect: (style: "regular" | "fancy") => void;
}

const StyleSelector = ({ onSelect }: StyleSelectorProps) => {
  const styles: StyleOption[] = [
    {
      id: "regular",
      name: "Classy Style",
      description: "Traditional tarot artwork with timeless symbolism",
    },
    {
      id: "fancy",
      name: "Fancy Style",
      description: "Enchanting artwork filled with magic and mystery",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-8 p-4 text-center">
      <h2 className="text-3xl text-primary font-bold">
        Choose Your Card Style, Poorvi
      </h2>
      <p className="text-lg max-w-2xl text-primary font-bold mb-4">
        Select the artistic style that resonates with your heart, my cutie.
      </p>

      <div className="flex justify-center gap-8">
        {styles.map((style) => (
          <div
            key={style.id}
            onClick={() => onSelect(style.id)}
            className="flex flex-col items-center p-6 rounded-lg border-2 border-primary 
              cursor-pointer transform hover:scale-105 transition-all duration-300
              hover:bg-primary hover:bg-opacity-10"
          >
            <h3 className="text-2xl text-primary font-bold mb-2 word-break">
              {style.name}
            </h3>
            <p className="text-primary font-medium">{style.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StyleSelector;
