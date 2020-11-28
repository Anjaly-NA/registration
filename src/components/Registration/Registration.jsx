import React from 'react';
import { Formik } from "formik";
import * as Yup from "yup";
import './Registration.css'

const phoneRegExp = /((\+*)((0[ -]+)*|(91 )*)(\d{12}|\d{10}))|\d{5}([- ]*)\d{6}/
const SignUpSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Name is required"),

    userName: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("User Name is required"),

    phoneNumber: Yup.string()
        .required("Phone number is required")
        .matches(phoneRegExp, "Invalid phone number"
        ),

    email: Yup.string().email().required("Email is required"),
    dob: Yup.date().required('Date of Birth Required'),

    password: Yup.string()
        .required("Password is required")
        .min(6, "Password is too short - should be 6 chars minimum"),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
        .required()

});

const initialValues = {
    name: '',
    userName: '',
    phoneNumber: '',
    dob: '',
    email: "",
    password: "",
    acceptTerms: false
};
const submitForm = (values) => {
    alert(JSON.stringify(values))
    console.log(values);
};

const Form = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <img src="/images/left-img.jpeg" alt="left-img.jpeg" width='100%' className='left_img' />
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 bg_color'>
                    <div className='head_text head_text_style'><span className='start_char'>W</span>ATCH NEXT</div>
                    <Formik
                        initialValues={initialValues}
                        // validate={validate}
                        onSubmit={submitForm}
                        validationSchema={SignUpSchema}
                    >
                        {(formik) => {
                            const {
                                values,
                                handleChange,
                                handleSubmit,
                                errors,
                                touched,
                                handleBlur,
                                isValid,
                                dirty
                            } = formik;
                            return (
                                <div className="container_form">
                                    <div className='head_text'>Sign Up</div>
                                    <form onSubmit={handleSubmit}>
                                        <div class="form-row">
                                            <div className="form-group col-md-6">
                                                {/* <label htmlFor="name">Name</label> */}
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    // class="form-control" 
                                                    placeholder="Name"
                                                    value={values.name}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={errors.name && touched.name ?
                                                        "input-error form-control" : 'form-control'}
                                                />
                                                <small id="passwordHelpBlock" class="form-text text-muted">
                                                    {errors.name && touched.name && (
                                                        <span className="error">{errors.name}</span>
                                                    )}</small>
                                            </div>
                                            <div className="form-group col-md-6">
                                                {/* <label htmlFor="userName">userName</label> */}
                                                <input
                                                    type="text"
                                                    name="userName"
                                                    id="userName"
                                                    // class="form-control"
                                                    placeholder="User Name"
                                                    value={values.userName}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={errors.userName && touched.userName ?
                                                        "input-error form-control" : 'form-control'}
                                                />
                                                <small id="passwordHelpBlock" class="form-text text-muted">
                                                    {errors.userName && touched.userName && (
                                                        <span className="error">{errors.userName}</span>
                                                    )}</small>
                                                {/* {errors.userName && touched.userName && (
                                                    <span className="error">{errors.userName}</span>
                                                )} */}
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            {/* <label htmlFor="email">Email</label> */}
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                // class="form-control"
                                                placeholder="Email"
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={errors.email && touched.email ?
                                                    "input-error form-control" : 'form-control'}
                                            />
                                            <small id="passwordHelpBlock" class="form-text text-muted">
                                                {errors.email && touched.email && (
                                                    <span className="error">{errors.email}</span>
                                                )}</small>
                                            {/* {errors.email && touched.email && (
                                                <span className="error">{errors.email}</span>
                                            )} */}
                                        </div>
                                        <div className="form-group">
                                            {/* <label htmlFor="dob">Date of Birth</label> */}
                                            <input
                                                type="date"
                                                name="dob"
                                                id="dob"
                                                // class="form-control"
                                                placeholder="Date of Birth"
                                                value={values.dob}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={errors.dob && touched.dob ?
                                                    "input-error form-control" : 'form-control'}
                                            />
                                            <small id="passwordHelpBlock" class="form-text text-muted">
                                                {errors.dob && touched.dob && (
                                                    <span className="error">{errors.dob}</span>
                                                )}</small>
                                            {/* {errors.dob && touched.dob && (
                                                <span className="error">{errors.dob}</span>
                                            )} */}
                                        </div>
                                        <div className="form-group">
                                            {/* <label htmlFor="phoneNumber">Phone</label> */}
                                            <input
                                                type="text"
                                                name="phoneNumber"
                                                id="phoneNumber"
                                                // class="form-control"
                                                placeholder="Phone"
                                                value={values.phoneNumber}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={errors.phoneNumber && touched.phoneNumber ?
                                                    "input-error form-control" : 'form-control'}
                                            />
                                            <small id="passwordHelpBlock" class="form-text text-muted">
                                                {errors.phoneNumber && touched.phoneNumber && (
                                                    <span className="error">{errors.phoneNumber}</span>
                                                )}</small>
                                            {/* {errors.phoneNumber && touched.phoneNumber && (
                                                <span className="error">{errors.phoneNumber}</span>
                                            )} */}
                                        </div>
                                        <div className="form-group">
                                            {/* <label htmlFor="password">Password</label> */}
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                // class="form-control"
                                                placeholder="Password"
                                                value={values.password}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={errors.password && touched.password ?
                                                    "input-error form-control" : 'form-control'}
                                            />
                                            {/* {errors.password && touched.password && (
                                                <span className="error">{errors.password}</span>
                                            )} */}
                                            <small id="passwordHelpBlock" class="form-text text-muted">
                                                {errors.password && touched.password && (
                                                    <span className="error">{errors.password}</span>
                                                )}</small>
                                        </div>
                                        <div className="form-group">
                                            <div class="form-check">
                                                <input type="checkbox" name="acceptTerms"
                                                    value={values.acceptTerms}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    // className={errors.acceptTerms && touched.acceptTerms ?
                                                    //     "input-error" : null}
                                                    className='form-check-input'
                                                />
                                                <label htmlFor="acceptTerms" className="form-check-label">Accept <span className='terms'>Terms of Service, Privacy Policy</span></label>
                                                <small id="passwordHelpBlock" class="form-text text-muted">
                                                    {errors.acceptTerms && touched.acceptTerms && (
                                                        <span className="error">{errors.acceptTerms}</span>
                                                    )}</small>
                                                {/* {errors.acceptTerms && touched.acceptTerms && (
                                                    <span className="error">{errors.acceptTerms}</span>
                                                )} */}
                                                {/* <ErrorMessage name="acceptTerms" component="div" className="invalid-feedback" /> */}
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            className={dirty && isValid ? "reg_btn" : "reg_btn_disable reg_btn disabled-btn"}
                                            disabled={!(dirty && isValid)}>
                                            SIGN Up
                                    </button>
                                    </form>
                                </div>
                            );
                        }}
                    </Formik>
                </div>
            </div>
        </div>
    );
};
export default Form;