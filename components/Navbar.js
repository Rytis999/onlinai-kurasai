import Link from 'next/link'

const Navbar = () => {
    return (
      <nav>
     
          <h2>Online kursai</h2>
     
        <Link href="/"><a>Home</a></Link>
        <Link href="/login"><a>Login</a></Link>
        <Link href="/register"><a>Register</a></Link>
        <Link href="/courses"><a>Courses</a></Link>
      </nav>
    );
  }
   
  export default Navbar;