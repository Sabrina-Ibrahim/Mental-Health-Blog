// import React from 'react';
// import axios from 'axios';
// import useForm from '../CustomHooks/useForm';

// const Anxiety = async (form) => {
//     await axios.post("http://localhost:5000/api/comments/:userId", form)
//         .then(() => {
//             console.log("test")
//         })
//         .catch(error => console.log(error));
// }

// const ClickCommentSubmit = () => {
//     Anxiety(formValues)

//     const { formValues, handleChange, handleSubmit } = useForm(ClickCommentSubmit);

//     return (
//         <div>
//             <div>
//                 <h1>THIS IS THE ANXIETY PAGE.</h1>
//                 <div className='form-container'>
//                     <form onSubmit={handleSubmit} className='anxiety-form'>
//                         <input
//                             value={formValues.text} onChange={handleChange} className='form-field' placeholder='text' name='text' />
//                         <button type='submit'
//                         >
//                             Submit
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// // text: req.body.text,
// //     ownedBy: req.params.userId,
// //         pageName: req.body.pageName,

// export default Anxiety; 