import React from "react";
import Logo from "../../images/logo.png";
import {
    Container,
    FormWrap,
    Icon,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text,
} from "./SigninElements";

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">
                        <img src={Logo} alt="logo" style={{ width: "60px" }} />
                    </Icon>
                    <Form action="#">
                        <FormH1>Sign In to your account</FormH1>
                        <FormLabel htmlFor="for">Email</FormLabel>
                        <FormInput type="email" required />
                        <FormLabel htmlFor="for">Password</FormLabel>
                        <FormInput type="password" required />
                        <FormButton type="submit">Continue</FormButton>
                        <Text>Forget password</Text>
                    </Form>
                </FormWrap>
            </Container>
        </>
    );
};

export default SignIn;
