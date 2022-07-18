import {Formik, Form} from "formik"
import css from "./searchbar.module.css"


export const SearchBar = ({onSubmit}) => {
  const handleSubmit = (values, actions )=>{
    onSubmit(values);
    actions.resetForm();  
  }
  return (
  <header className={css.Searchbar}>  
  <Formik initialValues={{text:"", }} 
  onSubmit={handleSubmit}
  
  >
 
    <Form className={css.SearchForm}>
   
      <button type="submit" className={css.SearchFormButton}>
      <span></span>
      </button>
      <input
      
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      className={css.SearchForminput}
    />
    
    </Form>

  </Formik>
  </header>
  )

}