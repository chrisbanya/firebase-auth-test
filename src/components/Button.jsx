export default function Button({ children }) {
  return (
    <button
      type="submit"
      className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
    >
      {children}
    </button>
  );
}
