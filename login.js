import Head from 'next/head'
import Link from 'next/link'

const Login = () => {
    return (
        <form action="/send-data-here" method="post" >
        <label for="first">First name:</label>
        <input type="text" id="first" name="first" />
        <label for="last">Last name:</label>
        <input type="text" id="last" name="last"/>
        <label for="password">Password:</label>
        <input type="text" id="password" name="password" />
        <button type="submit">Submit</button>
      </form>
    )};

    export default Login 