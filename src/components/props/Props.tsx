function Props({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Props;
