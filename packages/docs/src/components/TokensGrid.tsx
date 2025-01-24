import "../styles/tokens-grid.css";

interface TokensGridProps {
  tokens: Record<string, string>;
  hasRemValue: false;
}

export function TokensGrid({ tokens, hasRemValue }: TokensGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <td>Pixels</td>}
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
            {hasRemValue && <td>{Number(value.replace("rem", "")) * 16}px</td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
