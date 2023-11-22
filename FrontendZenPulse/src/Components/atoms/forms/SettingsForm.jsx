
const SettingsForm = () => {
  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-semibold mb-6">Settings</h1>

      
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Security</h2>
       
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-4">Change Password</h3>

          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
              Current password
              </label>
              <input
                type="password"
                className="w-full border border-gray-300 p-2 rounded-md"
             
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                New Password
              </label>
              <input
                type="password"
                className="w-full border border-gray-300 p-2 rounded-md"
              
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
              Confirm New Password
              </label>
              <input
                type="password"
                className="w-full border border-gray-300 p-2 rounded-md"
             
              />
            </div>

            <button
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
              type="submit"
            >
              Save Password
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default SettingsForm;
