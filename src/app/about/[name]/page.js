"use client";

export default function About({ params }) {
  return (
    <div>
      <h1>Автор: {params.name}</h1>
    </div>
  );
}
