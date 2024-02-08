import styles from '../stylesheets/Button.module.css';

export function InputText ({ value, onChange }) {
    return <input type="text" value={value} onChange={onChange} />
}

// Search button

export function Button( { children, onClick }) {
    return <button className={styles.search} onClick={onClick}>{children}</button>
}