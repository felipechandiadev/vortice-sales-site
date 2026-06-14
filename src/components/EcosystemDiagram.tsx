import diagramHtml from './ecosystem-diagram.html?raw';

export function EcosystemDiagram() {
  return (
    <div
      className="ecosystemDiagramMount"
      dangerouslySetInnerHTML={{ __html: diagramHtml }}
      aria-label="Diagrama del ecosistema Vórtice"
    />
  );
}
