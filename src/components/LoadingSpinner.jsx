export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex justify-center items-center h-screen bg-gray-900/60 z-50">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-600"></div>
    </div>
  );
}
