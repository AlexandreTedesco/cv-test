import React, { useState } from 'react';
import GeneralInfo from './GeneralInfo';
import Education from './Education';
import Experience from './Experience';
import '../styles/CVForm.css';

const CVForm = () => {
  const [generalInfo, setGeneralInfo] = useState({ name: '', email: '', phone: '' });
  const [education, setEducation] = useState({ schoolName: '', studyTitle: '', studyDate: '' });
  const [experience, setExperience] = useState({
    companyName: '',
    jobTitle: '',
    responsibilities: '',
    startDate: '',
    endDate: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('General Info:', generalInfo);
    console.log('Education:', education);
    console.log('Experience:', experience);
  };

  return (
    <div className="cv-form">
      <h1>CV Form</h1>
      <GeneralInfo data={generalInfo} onSave={setGeneralInfo} />
      <Education data={education} onSave={setEducation} />
      <Experience data={experience} onSave={setExperience} />
      <button onClick={handleSubmit}>Submit CV</button>
      
      {submitted && (
        <div className="submitted-data">
          <h2>Submitted Data</h2>
          <div>
            <h3>General Information</h3>
            <p>Name: {generalInfo.name}</p>
            <p>Email: {generalInfo.email}</p>
            <p>Phone: {generalInfo.phone}</p>
          </div>
          <div>
            <h3>Education</h3>
            <p>School Name: {education.schoolName}</p>
            <p>Study Title: {education.studyTitle}</p>
            <p>Study Date: {education.studyDate}</p>
          </div>
          <div>
            <h3>Experience</h3>
            <p>Company Name: {experience.companyName}</p>
            <p>Job Title: {experience.jobTitle}</p>
            <p>Responsibilities: {experience.responsibilities}</p>
            <p>Start Date: {experience.startDate}</p>
            <p>End Date: {experience.endDate}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CVForm;
