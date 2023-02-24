import { useFormik } from "formik";
import * as Yup from "yup";

function UpdateForm() {
	const initialValues = {
		currentPassword: "",
		newPassword: "",
		confirmPassword: "",
	};

	const validationSchema = Yup.object().shape({
		currentPassword: Yup.string()
			.required("Current password is required"),
		newPassword: Yup.string()
			.required("New password is required")
			.min(6, "Password must be at least 6 characters long"),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref("newPassword"), null], "Passwords must match")
			.required("onfirm new password is required")
	});

	const onSubmit = (values) => {
		console.log(values);
	};

	const { handleSubmit, handleChange, errors } = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (values) => onSubmit(values),
	});

	return (
		<div>
			<h2>Update password</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<input
						type="password"
						placeholder="Current password"
						name="currentPassword"
						onChange={handleChange}
					/>
					{errors.currentPassword ? <span>{errors.currentPassword}</span> : null}
				</div>

				<div>
					<input
						type="password"
						placeholder="New password"
						name="newPassword"
						onChange={handleChange}
					/>
					{errors.newPassword ? <span>{errors.newPassword}</span> : null}
				</div>

				<div>
					<input
						type="password"
						placeholder="Confirm password"
						name="confirmPassword"
						onChange={handleChange}
					/>
					{errors.confirmPassword ? <span>{errors.confirmPassword}</span> : null}
				</div>

				<input type="submit" value="Send"/>
			</form>
		</div>
	);
}

export default UpdateForm;
