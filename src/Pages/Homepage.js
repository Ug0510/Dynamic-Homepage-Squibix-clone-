import Navbar from '../components/Navbar';
import Wrapper from '../components/Wrapper';
import Footer from '../components/Footer';

function Homepage({data}) {


  return (
    <>
      <Navbar></Navbar>
      <Wrapper data={data}></Wrapper>
      <Footer></Footer>
    </>
  );
}

export default Homepage;
