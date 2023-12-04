// JoinForm.tsx
import React, { useState } from 'react';
import '../styles/forms.css';

const JoinForm: React.FC = () => {
  const [formData, setFormData] = useState({
    joinFullName: '',
    joinEmailAddress: '',
    joinUserMessage: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to a server or perform local actions
    console.log('Form submitted:', formData);
  };

  return (
    <div className='join-main'>
      <form onSubmit={handleSubmit}>
        <div className='join-form-group'>
          <input
            type="text"
            id="joinFullName"
            name="joinFullName"
            placeholder="Full Name"
            value={formData.joinFullName}
            onChange={handleChange}
          />
        </div>

        <div className='join-form-group'>
          <input
            type="email"
            id="joinEmailAddress"
            name="joinEmailAddress"
            placeholder="Email Address"
            value={formData.joinEmailAddress}
            onChange={handleChange}
          />
        </div>

        <div className='join-form-group'>
          <textarea
            id="joinUserMessage"
            name="joinUserMessage"
            placeholder="Your Message"
            value={formData.joinUserMessage}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className='join-submit-button'>Join Group</button>
      </form>
    </div>
  );
};

export default JoinForm;
