import React from 'react'
const Modals = () => {
    return (
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-semibold">Deactivate account</h2>
        <p className="mt-2 text-gray-600">
          Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.
        </p>
        <div className="mt-4 flex justify-end space-x-2">
          <button className="px-4 py-2 bg-gray-200 rounded-md">Cancel</button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-md">Deactivate</button>
        </div>
      </div>
    );
  };
  
  export default Modals;
  