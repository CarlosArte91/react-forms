import { FieldArray, Formik } from "formik";

const initialValues = {
	nombre: "",
	edad: "",
	telefonos: [],
};

function RegisterForm() {
	const handleSubmit = (values) => {
		console.log(values);
	};

	const telefonosItems = (arrayHelper, values, handleChange) => {
		const { push, remove } = arrayHelper;

		return (
			<div>
				<h3>Telefonos</h3>
				{values.telefonos.map((tel, index) => (
					<div key={index}>
						<input
							type="text"
							placeholder={`telefono ${index + 1}`}
							value={values.telefonos[index]}
							name={`telefonos.${index}`}
							onChange={handleChange}
						/>
						<button type="button" onClick={() => remove(index)}>X</button>
					</div>
				))}

				<button type="button" onClick={() => push("")}>Agregar</button>
			</div>
		);
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSubmit}
		>
			{ ({ values, handleChange, handleSubmit }) => (
				<form onSubmit={handleSubmit}>
					<input type="text" name="nombre" value={values.nombre} onChange={handleChange} placeholder="nombre" />

					<input type="number" name="edad" value={values.edad} onChange={handleChange} placeholder="edad" />

					<FieldArray name="telefonos" render={(arrayHelper) => telefonosItems(arrayHelper, values, handleChange)} />

					<input type="submit" value="Guardar" />
				</form>
			) }
		</Formik>
	);
}

export default RegisterForm;
