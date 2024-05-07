import { SignIn } from "@clerk/nextjs";
const page = () => {
  return (
    <main className='flex h-screen w-full  items-center justify-center'>
    <SignIn/>
</main> 
 )
}

export default page