import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import '../styles/forms.css';
import axios from 'axios';

/**
 * JoinForm Component
 * A React functional component representing a form to join an investing newsletter.
 * Uses react-query for asynchronous form submission.
 * @returns TSX element representing the JoinForm component.
 */

const JoinForm: React.FC = () => {
  const queryClient = useQueryClient();

  // React-query useMutation hook for handling form submission
  const mutation = useMutation(

        // Function that sends a POST request to the server with new submission data
    (newSubmission: any) => axios.post('http://localhost:5000/submissions', newSubmission),
    {
      
      // Callback function executed on successful form submission
      onSuccess: () => {
        // Invalidate and refetch data to update the UI with the new submission
        queryClient.invalidateQueries('submissions');
      },
    }
  );

    // Local state for form data
  const [formData, setFormData] = useState({
    joinFullName: '',
    joinEmailAddress: '',
    joinUserMessage: '',
  });

    // Event handler for input and textarea changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

    // Event handler for form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
        // Trigger the mutation to submit the form data
    await mutation.mutateAsync({
      fullName: formData.joinFullName,
      emailAddress: formData.joinEmailAddress,
      userMessage: formData.joinUserMessage,
    });
  };

    // TSX structure representing the JoinForm component
  return (
    <div className='join-main'>
      <h3>Join Our Investing Newsletter</h3>
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
