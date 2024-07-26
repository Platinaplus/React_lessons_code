function PropsComponent({ title, color }) {
  return (
    <div
      style={{ backgroundColor: color, padding: '50px', marginBottom: '20px' }}
    >
      <h2>{title}</h2>
    </div>
  );
}

export default PropsComponent;
