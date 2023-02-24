import { useFormik } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";

import styles from "./login_form.module.css";

function LoginForm() {

	const schema = Yup.object().shape({
		email: Yup.string().email("email invalido").required("email is required"),
		password: Yup.string().min(5, "password is so short").required("password is required"),
	});

	const { handleSubmit, handleReset, handleChange, errors, values } = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: schema,
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<div>
			<form onSubmit={handleSubmit} onReset={handleReset} className={styles._form}>
				<input type="email" value={values.email} placeholder="email" name="email" onChange={handleChange} />
				{ errors.email ? <span>{errors.email}</span> : null }

				<input type="password" value={values.password} placeholder="password" name="password" onChange={handleChange} />
				{ errors.password ? <span>{errors.password}</span> : null }

				<input type="submit" value="iniciar sesion" />
				<input type="reset" value="Limpiar" />
			</form>
		</div>
	);
}

export default LoginForm;
