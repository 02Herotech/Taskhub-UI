import * as Yup from "yup";
import {useFormik} from "formik";
import DashboardLayout from "../../../../components/dashboardLayout";
import styles from "./styles.module.scss";

interface IProps {

}

function countWords(text: string) {
    const words = text.split(/\s+/); // Split the text by spaces
    return words.length;
}

function Index(props: IProps) {

    const initialValues = {
        title: "",
        description: "",
        category: "",
        address: "",
        budget: "",
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("Title is required"),
        description: Yup.string()
            .required("Description is required")
            .test("wordCount", "Description must not exceed 50 words", (value) => {
                return countWords(value) <= 50;
            }),
        category: Yup.string().required("Category is required"),
        address: Yup.string().required("Address is required"),
        budget: Yup.number()
            .typeError("Budget must be a number")
            .required("Budget is required")
            .positive("Budget must be a positive number"),
    });

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            // Handle form submission here
            console.log("Form submitted with values:", values);
        },
    });

    return (
        <DashboardLayout>
            <div>
                <h2 className={styles.postRequest}>Post a Request</h2>
                <div className={styles.formContainer}>
                    <p>Job Details</p>
                    <form onSubmit={formik.handleSubmit}>
                        <div className={styles.formGroup}>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                placeholder="Job Title"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.title}
                                className={styles.input}
                            />
                            {formik.touched.title && formik.errors.title ? (
                                <div className={styles.error}>{formik.errors.title}</div>
                            ) : null}
                        </div>

                        <div className={styles.formGroup}>
                              <textarea
                                  id="description"
                                  name="description"
                                  placeholder="Job Description"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.description}
                                  className={styles.textarea}
                              />
                            {formik.touched.description && formik.errors.description ? (
                                <div className={styles.error}>{formik.errors.description}</div>
                            ) : null}
                        </div>

                        <div className={styles.formGroup}>
                            <select
                                id="category"
                                name="category"
                                placeholder="category"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.category}
                                className={styles.select}
                            >
                                <option value="">Select a category</option>
                                <option value="category1">Category 1</option>
                                <option value="category2">Category 2</option>
                                <option value="category3">Category 3</option>
                            </select>
                            {formik.touched.category && formik.errors.category ? (
                                <div className={styles.error}>{formik.errors.category}</div>
                            ) : null}
                        </div>

                        <div className={styles.formGroup}>
                        <textarea
                            id="address"
                            name="address"
                            placeholder="Address"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.address}
                            className={styles.textarea}
                        />
                            {formik.touched.address && formik.errors.address ? (
                                <div className={styles.error}>{formik.errors.address}</div>
                            ) : null}
                        </div>

                        <div className={styles.formGroup}>
                            <input
                                type="number"
                                id="budget"
                                name="budget"
                                placeholder="Customer's Budget"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.budget}
                                className={styles.input}
                            />
                            {formik.touched.budget && formik.errors.budget ? (
                                <div className={styles.error}>{formik.errors.budget}</div>
                            ) : null}
                        </div>

                        <button type="submit" className={styles.submitButton}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </DashboardLayout>
    );
}

export default Index;
