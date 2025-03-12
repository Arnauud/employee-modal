import React from 'react';
import PropTypes from 'prop-types';
import './EmployeeModal.css'; // ✅ Ensure styles are isolated

const EmployeeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // ✅ Prevent rendering when modal is closed

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>Employee Created!</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

// ✅ Prop validation
EmployeeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EmployeeModal;