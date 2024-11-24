import Popup from "@/ui/Popup";

export default async function Home() {
  async function fetchTableData() {
    const response = await fetch(
      "https://www.mat.ufmg.br/futebol/tabela-da-proxima-rodada_seriea/"
    );
    const text = await response.text();

    const tableMatch = text.match(/<table.*?>.*?<\/table>/s);
    if (!tableMatch) {
      throw new Error("Tabela não encontrada na página.");
    }
    const tableHTML = tableMatch[0];
    const rows = tableHTML.match(/<tr.*?>.*?<\/tr>/gs);

    const tableData = rows?.map((row) => {
      // Captura células (td ou th) dentro da linha
      const cells = row.match(/<t[rdh].*?>(.*?)<\/t[rdh]>/gs);
      if (!cells) {
        return [];
      }

      return cells.map((cell) => cell.replace(/<.*?>/g, "").trim());
    });

    return tableData;
  }

  const tableData = await fetchTableData();
  console.log(tableData);

  if (!tableData) return null;

  return (
    <div className="">
      Homepage
      <table className={`w-full bg-white text-black`}>
        <thead>
          <tr>
            {tableData[0]?.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
