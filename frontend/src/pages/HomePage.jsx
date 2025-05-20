import { Link } from "react-router-dom"
import './HomePage.css'

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4 py-12">
      <div className="w-full max-w-4xl mx-auto rounded-2xl bg-white shadow-xl p-8 border border-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Bienvenue sur SmartEvent</h1>
          <p className="text-xl text-gray-600 mb-8">Gérez ou inscrivez-vous à des événements.</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link
              to="/events"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Voir les événements
            </Link>
            <Link
              to="/admin"
              className="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg shadow-md hover:bg-gray-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
            >
              Espace admin
            </Link>
          </div>
          
          {/* Copyright ajouté ici */}
          <div className="copyright-section">
            <p className="copyright-text">&copy; {new Date().getFullYear()} SmartEvent. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage