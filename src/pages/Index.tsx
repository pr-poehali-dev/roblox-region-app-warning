const Index = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        {/* Roblox Logo */}
        <div className="mb-8">
          <div className="inline-block bg-red-500 text-white font-bold text-4xl px-6 py-3 rounded-lg shadow-lg transform -rotate-1">
            ROBLOX
          </div>
        </div>
        <p className="text-lg font-bold text-black">
          приложение Roblox не доступно в вашем регионе
        </p>
      </div>
    </div>
  );
};

export default Index;
