export default function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="mx-auto w-96 my-4">
      <h2>Something went wrong:</h2>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}
