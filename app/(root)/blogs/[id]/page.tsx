interface PageProps {
    params: Promise<{ id: number }>;
}

export default async function Blog(props: PageProps) {

    const { id } = await props.params;

    return (
        <section>
            <h1>BLOG POST ID {id}</h1>
        </section>
    );
}
