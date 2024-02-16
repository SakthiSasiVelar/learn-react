import ReactDOM from "react-dom/client";

const title = <h1>Title</h1>;

const Container = () => (
  <div>
    {title}
    <h1>This is h1 tag</h1>
    <h2>This is h2 tag</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container />);
