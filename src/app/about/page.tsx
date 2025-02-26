import { headers } from 'next/headers';


const About = async()=> {
  const headersList = (await headers())
  const name = headersList.get('x-name')
  const phone = headersList.get('x-phone')
  return (
    <div className="p-12">
      <h2>About middleware test Test</h2>
      <p>name: {name}</p>
      <p>phone: {phone}</p>
    </div>
  );
}

export default About
