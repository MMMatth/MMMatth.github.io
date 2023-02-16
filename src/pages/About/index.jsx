import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  max-width: 500px;
`;

const FormInput = styled.input`
  margin: 10px;
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 500px;
`;

const FormTextarea = styled.textarea`
  margin: 10px;
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 500px;
`;

const FormButton = styled.button`
  margin: 10px;
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
  }
`;

const About = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: send form data to server or do something else
    console.log('Form submitted', name, email, message);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <ContactContainer>
      <h1>Contact us</h1>
      <ContactForm onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <FormInput
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <FormTextarea
          name="message"
          placeholder="Message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <FormButton type="submit">Send</FormButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default About;
