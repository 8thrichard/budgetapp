import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import '../styles/forms.css';
import axios from 'axios';

const JoinForm: React.FC = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newSubmission: any) => axios.post('http://localhost:5000/submissions', newSubmission),
    {
      onSuccess: () => {
        // Invalidate and refetch data to update the UI with the new submission
        queryClient.invalidateQueries('submissions');
      },
    }
  );

  const [formData, setFormData] = useState({
    joinFullName: '',
    joinEmailAddress: '',
    joinUserMessage: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await mutation.mutateAsync({
      fullName: formData.joinFullName,
      emailAddress: formData.joinEmailAddress,
      userMessage: formData.joinUserMessage,
    });
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

        <button type="submit" className='join-submit-button'>
          {mutation.isLoading ? 'Submitting...' : 'Join Group'}
        </button>
      </form>
    </div>
  );
};

export default JoinForm;
