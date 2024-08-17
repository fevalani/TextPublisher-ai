import { useState } from "react";
import Button from "../MicroComponents/Button";
import InputRange from "../MicroComponents/InputRange";
import Checkbox from "../MicroComponents/InputCheckbox";

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
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [conectivity, setConectivity] = useState(50);
  const [syntax, setSyntax] = useState(50);
  const [coherence, setCoherence] = useState(50);
  const [purpose, setPurpose] = useState(50);
  const [originality, setOriginality] = useState(50);
  const [consistency, setConsistency] = useState(50);

  return (
    <section
      className={`${
        openSideBar ? `flex flex-col` : `absolute -translate-x-96`
      } md:w-96 w-screen h-full bg-gray-900 p-6 transition-all`}
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
        <ul className="w-full flex flex-col gap-8">
          <InputRange
            title="Tom de Voz"
            value={voiceTone}
            onClick={setVoiceTone}
            sb1="Informal"
            sb2="Formal"
          />
          <InputRange
            title="Vocabulário"
            value={vocabulary}
            onClick={setVocabulary}
            sb1="Simples"
            sb2="Complexo"
            type={1}
          />
          <li className="flex flex-col w-full gap-4">
            Estrutura e Organização
            <InputRange
              title="Tamanho das Frases"
              value={phraseSize}
              onClick={setPhraseSize}
              sb1="Curtas"
              sb2="Longas"
              type={2}
            />
            <InputRange
              title="Uso de pontuação"
              value={punctuation}
              onClick={setPunctuation}
              sb1="Minimalista"
              sb2="Intenso"
              type={2}
            />
          </li>
          <li>
            <InputRange
              title="Perspectiva e Foco"
              value={perspective}
              onClick={setPerspective}
              sb1="Autor"
              sb2="Leitor"
              type={3}
            />
          </li>
          <li className="">
            <Checkbox
              values={selectedOptions}
              setValues={setSelectedOptions}
              title="Estilo Retórico"
              listOptions={["Metáfora", "Analogias", "Ironia", "Hipérbole"]}
            />
          </li>
          <li className="flex flex-col w-full gap-4">
            Coerência e Coesão
            <InputRange
              title="Conectividade"
              value={conectivity}
              onClick={setConectivity}
              sb1="Pouco Conectado"
              sb2="Muito Conectado"
              type={2}
            />
          </li>
          <li className="flex flex-col w-full gap-4">
            Propósito e Público-Alvo
            <div className="flex flex-col gap-2">
              <label>Objetivo do Texto</label>
              <select className="text-black">
                <option value="inform">Informar</option>
                <option value="entertain">Entreter</option>
                <option value="persuade">Persuadir</option>
                <option value="narrate">Narrar</option>
              </select>
            </div>
            <Checkbox
              values={selectedOptions}
              setValues={setSelectedOptions}
              title="Público-Alvo"
              listOptions={[
                "Científico",
                "Acadêmico",
                "Público Geral",
                "Jovens",
              ]}
            />
          </li>
          <li>Originalidade e Criatividade</li>
          <li>Consistência</li>
        </ul>
      </div>
      <div className={`w-full flex justify-end mb-6 text-green-300`}>
        <Button
          onClick={() => console.log("Aplicar")}
          className={`text-green-300`}
        >
          Aplicar
        </Button>
      </div>
    </section>
  );
}
