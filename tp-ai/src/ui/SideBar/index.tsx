import { useState } from "react";
import Button from "../MicroComponents/Button";
import InputRange from "../MicroComponents/InputRange";
import Checkbox from "../MicroComponents/InputCheckbox";
import ListToggleitem from "../MicroComponents/ListToggleItem";
import SelectItems from "../MicroComponents/SelectItems";

type SideBarProps = {
  openSideBar: boolean;
  setOpenSideBar: (open: boolean) => void;
};

export default function SideBar({ openSideBar, setOpenSideBar }: SideBarProps) {
  const [voiceTone, setVoiceTone] = useState(50);
  const [vocabulary, setVocabulary] = useState(50);
  const [phraseSize, setPhraseSize] = useState(50);
  const [punctuation, setPunctuation] = useState(50);
  const [perspective, setPerspective] = useState(50);
  const [styleOptions, setStyleOptions] = useState<string[]>([]);
  const [conectivity, setConectivity] = useState(50);
  const [objective, setObjective] = useState("");
  const [targetAudience, setTargetAudience] = useState<string[]>([]);
  const [creativity, setCreativity] = useState(50);

  function applyChanges() {
    const data = {
      voiceTone,
      vocabulary,
      phraseSize,
      punctuation,
      perspective,
      styleOptions,
      conectivity,
      objective,
      targetAudience,
      creativity,
    };
    console.log(data);
  }

  return (
    <section
      className={`${
        openSideBar ? `flex flex-col` : `fixed -translate-x-96`
      } md:w-96 w-screen h-screen bg-gray-900 p-4 transition-all overflow-y-scroll no-scrollbar`}
    >
      <div className={`w-full flex justify-between mb-6 items-center`}>
        Menu de opções
        <Button
          onClick={() => setOpenSideBar(false)}
          className="flex w-fit px-2 py-1 text-red-300 justify-center border border-gray-300 rounded-xl dark:border-neutral-800 dark:bg-zinc-800/30"
        >
          Fechar
        </Button>
      </div>
      <div className={`w-full flex`}>
        <ul className="w-full flex flex-col gap-6">
          <ListToggleitem>
            <InputRange
              title="Tom de Voz"
              value={voiceTone}
              onClick={setVoiceTone}
              sb1="Informal"
              sb2="Formal"
            />
          </ListToggleitem>
          <ListToggleitem>
            <InputRange
              title="Vocabulário"
              value={vocabulary}
              onClick={setVocabulary}
              sb1="Simples"
              sb2="Complexo"
              type={1}
            />
          </ListToggleitem>
          <ListToggleitem>
            <InputRange
              title="Tamanho das Frases"
              value={phraseSize}
              onClick={setPhraseSize}
              sb1="Curtas"
              sb2="Longas"
              type={2}
            />
          </ListToggleitem>
          <ListToggleitem>
            <InputRange
              title="Uso de pontuação"
              value={punctuation}
              onClick={setPunctuation}
              sb1="Minimalista"
              sb2="Intenso"
              type={2}
            />
          </ListToggleitem>
          <ListToggleitem>
            <InputRange
              title="Perspectiva e Foco"
              value={perspective}
              onClick={setPerspective}
              sb1="Autor"
              sb2="Leitor"
              type={3}
            />
          </ListToggleitem>
          <ListToggleitem>
            <Checkbox
              values={styleOptions}
              setValues={setStyleOptions}
              title="Estilo Retórico"
              listOptions={["Metáfora", "Analogias", "Ironia", "Hipérbole"]}
            />
          </ListToggleitem>
          <ListToggleitem>
            <InputRange
              title="Conectividade"
              value={conectivity}
              onClick={setConectivity}
              sb1="Pouco Conectado"
              sb2="Muito Conectado"
              type={2}
            />
          </ListToggleitem>
          <ListToggleitem>
            <SelectItems
              title={"Objetivo do Texto"}
              listOptions={["Informar", "Entreter", "Persuadir", "Narrar"]}
              value={objective}
              setValue={setObjective}
            />
          </ListToggleitem>
          <ListToggleitem>
            <Checkbox
              values={targetAudience}
              setValues={setTargetAudience}
              title="Público-Alvo"
              listOptions={[
                "Científico",
                "Acadêmico",
                "Público Geral",
                "Jovens",
              ]}
            />
          </ListToggleitem>
          <ListToggleitem>
            <InputRange
              title="Criatividade"
              value={creativity}
              onClick={setCreativity}
              sb1="Prático"
              sb2="Criativo"
              type={2}
            />
          </ListToggleitem>
        </ul>
      </div>
      <div className={`w-full flex justify-end my-6 text-green-300`}>
        <Button onClick={applyChanges} className={`text-green-300`}>
          Aplicar
        </Button>
      </div>
    </section>
  );
}
