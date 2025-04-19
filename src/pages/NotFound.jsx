import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white p-6">
      <h1 className="text-6xl font-bold text-orange-500">404</h1>
      <h2 className="text-2xl mt-4 font-semibold">Oops! Page Not Found</h2>
      <p className="mt-2 text-gray-300 text-center max-w-md">
        The page you're looking for doesn't exist or has been moved. But don't worry, you're always welcome at <span className="text-orange-500 font-bold">chaiCode</span>.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition duration-200"
      >
        Go Back Home
      </Link>
    </div>
  );
}
