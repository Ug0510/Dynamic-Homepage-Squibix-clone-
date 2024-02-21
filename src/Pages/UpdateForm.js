import React, { useState, useEffect } from 'react';
import './this.css'; // Import the provided CSS file
import Navbar from '../components/Navbar';

const UpdateForm = ({ data, setData }) => {
  // State variables to hold JSON data and form input values
  const [jsonData, setJsonData] = useState(null);

  // Fetch JSON data from localStorage when component mounts
  useEffect(() => {
    // Fetch JSON data from localStorage
    const parsedData = JSON.parse(data);
    setJsonData(parsedData);
  }, [data]);

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Create a copy of the formData object
    const updatedFormData = { ...jsonData };
    // Split the name by '.' to get the property path
    const path = name.split('.');
    let currentObj = updatedFormData;
    // Traverse the property path to reach the target object
    for (let i = 0; i < path.length - 1; i++) {
      currentObj = currentObj[path[i]];
    }
    // Update the value of the target property
    currentObj[path[path.length - 1]] = value;
    // Set the updated formData state
    setJsonData(updatedFormData);
  }

  // Function to submit the form and update JSON data
  const handleSubmit = (e) => {
    e.preventDefault();
    const updateData = JSON.stringify(jsonData);
    localStorage.setItem('data', updateData);
    setData(updateData); // Update the state immediately after setting localStorage
    window.alert('Data successfully updated');
  };

  // Recursive function to render options and edit buttons
  const renderOptions = (data, path = '') => {
    return Object.keys(data).map((key, index) => {
      const currentPath = path ? `${path}.${key}` : key;
      if (typeof data[key] === 'object' && Object.keys(data[key]).length > 0) {
        // Render an accordion for objects
        return (
          <div key={index} className="accordion accordion-flush" id={`accordion${index}`}>
            <div className="accordion-item">
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="true"
                  aria-controls={`collapse${index}`}
                >
                  {key}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${index}`}
                data-bs-parent={`#accordion${index}`}
              >
                <div className="accordion-body">
                  {renderOptions(data[key], currentPath)}
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        // Render input fields for leaf nodes
        return (
          <div key={index} className='user-box'>
            <input
              type="text"
              id={key}
              name={currentPath}
              value={jsonData[currentPath] || data[key]}
              onChange={handleInputChange}
              className='user-input'
            />
          </div>
        );
      }
    });
  };

  // Render form with input fields and edit buttons
  return (
    <>
      <Navbar/>
      <div className='form-body'> {/* Apply the 'form-body' class */}
        <div className="login-box second mt-5"> {/* Apply the 'login-box' class */}
          <h2>Update Website Content Form</h2>
          <form onSubmit={handleSubmit}>
            {jsonData && renderOptions(jsonData)}
            <button type="submit" className='submit-button'>Submit</button> {/* Apply the 'submit-button' class */}
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateForm;
