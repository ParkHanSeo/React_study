import React from "react";

import styles from './DeleteConfirmation.module.scss';

type Props = {
    onCancel: () => void;
    onConfirm: () => void;
}

export const DeleteConfirmation: React.FC<Props> = ({ onCancel, onConfirm }) => {
    return (
    <div className={styles.deleteConfirmation}>
        <h2>Are you sure?</h2>
        <p>Do you really want to remove this place?</p>
        <div className={styles.confirmationActions}>
          <button onClick={onCancel} className={styles.buttonText}>
            No
          </button>
          <button onClick={onConfirm} className={styles.button}>
            Yes
          </button>
        </div>
    </div>
    );
};