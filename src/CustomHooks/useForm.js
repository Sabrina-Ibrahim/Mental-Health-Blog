import { useState } from "react";
import {
    useNavigate,
} from "react-router-dom"

const useForm = (cb) => {

    const [formValues, setFormValues] = useState({});

    const handleChange = (event) => {
        event.persist();

        setFormValues({ ...formValues, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        cb();
    }

    return { formValues, handleChange, handleSubmit };
}

export default useForm; 