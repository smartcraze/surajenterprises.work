import { headers } from 'next/headers';
import Image from 'next/image';

export default async function Dashboard() {
    const headersList = await headers();
    const userId = headersList.get('x-user-id');
    const userRole = headersList.get('x-user-role');
    const userName = headersList.get('x-user-name');
    const userUrl = headersList.get('x-user-url');
    console.log(userId, userRole, userName, userUrl);


    return <div>
        <h1>Dashboard</h1>
        <p>User ID: {userId}</p>
        <p>User Role: {userRole}</p>
        <p>User Name: {userName}</p>
        <Image src={userUrl ?? ''} alt="User Avatar" width={100} height={100} />
    </div>;
}

