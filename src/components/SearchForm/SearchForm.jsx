

const SearchForm = ({onSubmit}) => {
    const handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.target;
        const value = form.elements.text.value.trim();
        // if(value !== '' || value !== null){}
        onSubmit(value);
        form.reset();
    }
  return (
    <form onSubmit={handleSubmit}>
        <input 
        type='text' 
        name='text' 
        placeholder="Search movies"/>
        <button type='submit'></button>
    </form>
  )
}

export default SearchForm