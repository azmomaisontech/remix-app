export default function New() {
  return (
    <>
      <p>Add your own hilarious joke</p>
      <div>
        <label htmlFor="name">Name:</label>
        <input id="name" name="name" />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea id="content" name="content" />
      </div>
    </>
  );
}
