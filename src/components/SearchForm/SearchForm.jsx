import toast, { Toaster } from "react-hot-toast";
import { IoSearchSharp } from "react-icons/io5";

import styles from './SearchForm.module.css'

const SearchForm = ({onSubmit}) => {
    const handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.target;
        const value = form.elements.text.value.trim();
        if(value === '' || value === null){
          toast.error('This is an invalid request. Try again!');
          return;
        } else {
          onSubmit(value);
          form.reset();
        }
    };

  return (
    <>
    <form className={styles.form} onSubmit={handleSubmit}>
        <input 
        type='text' 
        name='text' 
        placeholder="Search movies"
        className={styles.input}
        />
        <button type='submit' className={styles.btn}><IoSearchSharp /></button>
    </form>
    <Toaster position="top-right"/>
    </>
  )
}

export default SearchForm