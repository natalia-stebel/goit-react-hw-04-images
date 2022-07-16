import {Formik, Form} from "formik"


export const SearchBar = ({onSubmit}) => {
  const handleSubmit = (values, actions )=>{
    onSubmit(values);
    actions.resetForm();  
  }
  return (
  <header>  
  <Formik initialValues={{searchText:"", }} 
  onSubmit={handleSubmit}

  >
 
    <Form>
   
      <button type="submit">
      <span >Search</span>
      </button>
      <input
      
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
    
    </Form>

  </Formik>
  </header>
  )

}