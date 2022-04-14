import Term from "./Term";

const TermsList = ({ terms }) => {
  return (
    <main className="content-wrapper pb-10">
      {terms.map((term) => (
        <Term name={term.name} description={term.description} key={term.id} />
      ))}
    </main>
  );
};

export default TermsList;
