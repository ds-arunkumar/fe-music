import NavBar from "../components/NavBar";


const HomePage = () => {
  return (
    <>
      <div className="container mt-5 text-center">
        <h1 className="text-4xl text-gray-800">Welcome to Music!</h1>
        <h4 className="text-xl text-gray-600">The best music platform</h4>
      

      <div className="max-w-2xl mx-auto mt-5 bg-white shadow-md rounded-md p-5 rounded-lg overflow-hidden border border-gray-200 ">
        <h2 className="text-2xl text-gray-800">Features:</h2>
        <ul className="mt-5 text-lg text-gray-600">
          <li>Listen to your favorite music</li>
          <li>Discover new music</li>
          <li>Share your music with friends</li>
          <li>And much more...</li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default HomePage;