# Employee-Modal
A simple, reusable React modal component for displaying messages, such as confirmation after an employee is successfully created.

## Installation

Node version: 18.16.1
IDE: Visual Studio Code

#### First

To assure you have the right modal `npm view employee-modal author` the author name is "Arnooo"

#### Next

`npm install employee-modal`

## Usage

Import and use the EmployeeModal component in your React project:

`import React, { useState } from 'react';
import EmployeeModal from 'employee-modal';

const ExampleComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <EmployeeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        message="Employee successfully created!"
      />
    </div>
  );
};

export default ExampleComponent;`

## Props

| Prop      | Type       | Required | Description                                                         |
| --------- | ---------- | -------- | ------------------------------------------------------------------- |
| `isOpen`  | `boolean`  | ✅        | Controls whether the modal is visible (`true`) or hidden (`false`). |
| `onClose` | `function` | ✅        | Function that handles closing the modal when the button is clicked. |
| `message` | `string`   | ❌        | Optional message to display inside the modal.                       |


## Peer Dependencies

This package requires the following dependencies:

`"react": ">=18.2.0",`
`"react-dom": ">=18.2.0",`
`"prop-types": "^15.8.1"`

## Author 
Created by Arnooo
