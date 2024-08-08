import React, { useState } from 'react';
import '../styles/Education.css';

const Education = ({ data, onSave }) => {
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
    <div className="education">
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="schoolName"
            placeholder="School Name"
            value={formData.schoolName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="studyTitle"
            placeholder="Study Title"
            value={formData.studyTitle}
            onChange={handleChange}
          />
          <input
            type="text"
            name="studyDate"
            placeholder="Study Date"
            value={formData.studyDate}
            onChange={handleChange}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <div>
          <p>School: {formData.schoolName}</p>
          <p>Title: {formData.studyTitle}</p>
          <p>Date: {formData.studyDate}</p>
          <button onClick={() => setEditMode(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Education;
