import React, { useState } from 'react';
import '../styles/Experience.css';

const Experience = ({ data, onSave }) => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setEditMode(false);
  };

  return (
    <div className="experience">
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="jobTitle"
            placeholder="Job Title"
            value={formData.jobTitle}
            onChange={handleChange}
          />
          <textarea
            name="responsibilities"
            placeholder="Responsibilities"
            value={formData.responsibilities}
            onChange={handleChange}
          />
          <input
            type="text"
            name="startDate"
            placeholder="Start Date"
            value={formData.startDate}
            onChange={handleChange}
          />
          <input
            type="text"
            name="endDate"
            placeholder="End Date"
            value={formData.endDate}
            onChange={handleChange}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <div>
          <p>Company: {formData.companyName}</p>
          <p>Job Title: {formData.jobTitle}</p>
          <p>Responsibilities: {formData.responsibilities}</p>
          <p>From: {formData.startDate} To: {formData.endDate}</p>
          <button onClick={() => setEditMode(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Experience;
