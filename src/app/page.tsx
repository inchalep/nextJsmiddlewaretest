import { headers } from 'next/headers';


const Home = async()=> {
  const headersList = (await headers())
  const name = headersList.get('x-name')
  const phone = headersList.get('x-phone')
  return (
    <div className="p-12">
      <h2>Mideleware Test</h2>
      <p>name: {name}</p>
      <p>phone: {phone}</p>
    </div>
  );
}

export default Home
