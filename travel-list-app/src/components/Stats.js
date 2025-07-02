export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your packing list 🗓</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.floor((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You have everything packed. Ready to go 🌍"
          : `There are ${numItems} items on your list & you have packed ${numPacked} (
        ${percentage}%) ✈️`}
      </em>
    </footer>
  );
}
