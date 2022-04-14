const Term = ({ name, description }) => {
  return (
    <div className="row justify-content-center mt-10">
      <details className="collapse-panel w-600 mw-full">
        <summary className="collapse-header">{name}</summary>
        <div className="collapse-content">{description}</div>
      </details>
    </div>
  );
};

export default Term;
