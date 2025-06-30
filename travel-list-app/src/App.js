export default function App() {
  return (
    <div>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Travel Tidy ⛱</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your trip? 🧳</h3>
    </div>
  );
}

function PackingList() {}

function Stats() {}
