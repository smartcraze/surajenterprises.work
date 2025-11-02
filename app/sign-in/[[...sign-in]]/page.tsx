import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-1 h-full items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-4">
        <SignIn
        
        withSignUp={false}
         />
      </div>
    </div>
  );
}
