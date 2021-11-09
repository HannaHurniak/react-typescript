import { useState, useCallback } from 'react';

const useForm = (initialValue: { login: string; password: string; }) => {
    const [formValues, setFormValues] = useState(initialValue);

    const handleChange = useCallback((event: any) => {
        const { name, value } = event.target;

        setFormValues({
            ...formValues,
            [name]: value,
        });
    }, [formValues]);

    return [formValues, handleChange] as const;

}
export default useForm;