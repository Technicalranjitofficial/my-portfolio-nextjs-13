import { GET_ALL_BLOGS } from '@/Services/graphql/query';
import { getClient } from '@/lib/client';
// import { getClient } from '@/lib/client';
import Image from 'next/image';


export const revalidate = 1;
const About = async() => {

  // const p = await getClient().query({
  //   query:GET_ALL_BLOGS,
    
  // });
  // console.log("herccxxxe",p.data.allBlog);



  // const data = await fetch(
  //   "https://helkh138.api.sanity.io/v1/graphql/production/experiment",
  //   {
  //     method: "POST",
  //     body: JSON.stringify({
  //       query: '{allBlog{title}}',
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     // next: { revalidate: 1 }
  //   }
  // ).then((res) => res.json()).catch((err)=>console.log(err));

// console.log(data)
  return (
    <>
    
    <div className='pt-28'>
    <h1>Releasing Soon</h1>
    </div>
    
    </>
  );
};

export default About;
