import { AuthProvider } from './contexts/AuthContext';
import { AccountButton } from './components/AccountButton';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-end">
            <AccountButton />
          </div>
        </header>
        <main>
          {/* Your app content */}
        </main>
      </div>
    </AuthProvider>
  );
}

export default App; 