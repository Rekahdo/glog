import Link from "next/link";
import { ReactNode } from "react";

interface PageProps {
}

export default function AdminDashboard(props: PageProps) {

    return (
        <section>
            <h1>ADMIN DASHBOAD</h1>
            <p>Users List</p>
            <ul>
                <li><Link href="/user/1">User 1</Link></li>
                <li><Link href="/user/2">User 2</Link></li>
                <li><Link href="/user/3">User 3</Link></li>
                <li><Link href="/user/4">User 4</Link></li>
            </ul>
        </section>
    );
}
