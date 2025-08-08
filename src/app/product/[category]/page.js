export default function CategoryPage({ params }) {
  console.log(params, 123);

  return (
    <div>
      <h1>Категория: {params.category}</h1>
    </div>
  );
}
