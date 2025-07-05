export default function AuthSocial() {
    const providers = [
      { name: 'Google', icon: 'G', color: 'bg-red-500 hover:bg-red-600' },
      { name: 'Facebook', icon: 'f', color: 'bg-blue-600 hover:bg-blue-700' },
    ];
  
    return (
      <div className="mt-6 grid grid-cols-2 gap-3">
        {providers.map((provider) => (
          <div key={provider.name}>
            <a
              href={`/api/auth/signin/${provider.name.toLowerCase()}`}
              className={`w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white ${provider.color}`}
            >
              <span className="sr-only">Sign in with {provider.name}</span>
              {provider.icon}
            </a>
          </div>
        ))}
      </div>
    );
  }