import React, { Component } from 'react';
import './Signup.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';

class Signup extends Component {
  
    constructor(props){
        super(props);

        this.state = {
            testField: ''
        };
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);

    }

    SignupSchema =  Yup.object().shape({
        email: Yup.string()
          .email('Invalid email')
          .required('Required'),
        password: Yup.string()
          .min(2, 'Too Short!')
          .max(16, 'Too Long!')
          .required('Required'),
        rePassword: Yup.string()
          .min(2, 'Too Short!')
          .max(16, 'Too Long!')
          .required('Required')
          .oneOf([Yup.ref('password'), null]),
      });

    render() {

        return (
            <div class="container">
                <form>
                    <div class="form-group">
                        <Formik
                        initialValues={{
                            email: '',
                            password: '',
                            rePassword: '',
                        }}
                        validationSchema={this.SignupSchema}
                        onSubmit={values => {
                            // same shape as initial values
                            console.log(values);
                        }}
                        >
                        {({ errors, touched }) => (
                            <Form>
                                
                                <h4>Email</h4>
                                <Field name="email" type="email" />
                                {errors.email && touched.email ? (
                                    <div>{errors.email}</div>
                                ) : null}
                                
                                <h4>Password</h4>
                                <Field name="password" type="password"/>
                                {errors.password && touched.password ? (
                                    <div>{errors.password}</div>
                                ) : null}
                                
                                <h4>Re-enter Password</h4>
                                <Field name="rePassword" type="password" />
                                {errors.rePassword && touched.rePassword ? <div>{errors.rePassword}</div> : null}
                                
                                <button type="submit" class="btn btn-dark">Submit</button>
                            </Form>
                        )}
                        </Formik>
                    </div>
                </form>
            </div>
        );
    }
}
export default Signup;