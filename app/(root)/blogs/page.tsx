import Link from "next/link";

interface PageProps {
}

export default function BlogsDashboard(props: PageProps) {

    return (
        <section>
            <h1>BLOGS DASHBOAD</h1>
            <p>Blogs List</p>
            <ul>
                <li><Link href="/blog/1">Blog Post 1</Link></li>
                <li><Link href="/blog/2">Blog Post 2</Link></li>
                <li><Link href="/blog/3">Blog Post 3</Link></li>
                <li><Link href="/blog/4">Blog Post 4</Link></li>
            </ul>
        </section>
    );
}
